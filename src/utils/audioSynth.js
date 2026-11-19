// Wedding Audio Engine
// Plays the uploaded Telugu Wedding Song ("అమ్మలారో పైడి కొమ్మలారో... కళ్యాణం కమనీయం...")
// Starts from 0:00 (very beginning) when the "OPEN INVITATION" button is clicked
// Pauses when leaving to other tabs (Google Maps) and autoplays on return

class DivineAudioEngine {
  constructor() {
    this.audio = null;
    this.isPlaying = false;
    this.shouldAutoPlayOnReturn = false; // Enabled only after invitation is opened
    this.isInvitationOpened = false;
    this.listeners = new Set();
    this.bellCtx = null;

    if (typeof window !== 'undefined') {
      this.initAudioElement();
      this.setupVisibilityListeners();
    }
  }

  initAudioElement() {
    if (!this.audio) {
      this.audio = new Audio('/wedding-song.mp3');
      this.audio.loop = true;
      this.audio.volume = 0.75;

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notifyListeners();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notifyListeners();
      });

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notifyListeners();
      });
    }
  }

  subscribe(callback) {
    this.listeners.add(callback);
    callback(this.isPlaying);
    return () => this.listeners.delete(callback);
  }

  notifyListeners() {
    this.listeners.forEach(cb => {
      try {
        cb(this.isPlaying);
      } catch (e) {
        console.error(e);
      }
    });
  }

  setupVisibilityListeners() {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is hidden or user opened Google Maps in another tab
        if (this.isPlaying) {
          this.shouldAutoPlayOnReturn = true;
          this.stop(false); // Pause quietly, keep flag to resume on return
        }
      } else {
        // User returned to the wedding website tab
        if (this.shouldAutoPlayOnReturn && this.isInvitationOpened) {
          this.start();
        }
      }
    };

    const handleWindowBlur = () => {
      if (this.isPlaying) {
        this.shouldAutoPlayOnReturn = true;
        this.stop(false);
      }
    };

    const handleWindowFocus = () => {
      if (this.shouldAutoPlayOnReturn && this.isInvitationOpened && !document.hidden) {
        this.start();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);
  }

  // Called explicitly when user clicks on Google Maps or External routing
  prepareForExternalRouting() {
    if (this.isInvitationOpened) {
      this.shouldAutoPlayOnReturn = true;
    }
    if (this.isPlaying) {
      this.stop(false);
    }
  }

  // Start the song from the VERY BEGINNING (0:00) when clicking Open Invitation
  playFromStart() {
    this.initAudioElement();
    this.isInvitationOpened = true;
    this.shouldAutoPlayOnReturn = true;
    if (this.audio) {
      this.audio.currentTime = 0; // Rewind to 0:00
    }
    this.start();
  }

  start() {
    this.initAudioElement();
    if (!this.audio) return;

    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
          this.notifyListeners();
        })
        .catch((err) => {
          console.log('Audio playback waiting for user action:', err);
        });
    }
  }

  stop(clearAutoPlayFlag = true) {
    if (clearAutoPlayFlag) {
      this.shouldAutoPlayOnReturn = false;
    }
    if (this.audio) {
      this.audio.pause();
    }
    this.isPlaying = false;
    this.notifyListeners();
  }

  toggle() {
    if (this.isPlaying) {
      this.stop(true);
    } else {
      this.start();
    }
  }

  // Sacred Temple Bell Chime using Web Audio API
  ringTempleBell() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!this.bellCtx) {
      this.bellCtx = new AudioCtx();
    }
    if (this.bellCtx.state === 'suspended') {
      this.bellCtx.resume();
    }

    const now = this.bellCtx.currentTime;
    const bellPitches = [523.25, 1046.5, 1567.98, 2093.0];

    bellPitches.forEach((freq, idx) => {
      const osc = this.bellCtx.createOscillator();
      const gain = this.bellCtx.createGain();

      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      const volume = idx === 0 ? 0.35 : 0.15 / idx;
      gain.gain.setValueAtTime(volume, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

      osc.connect(gain);
      gain.connect(this.bellCtx.destination);

      osc.start(now);
      osc.stop(now + 3.3);
    });
  }
}

export const divineAudio = new DivineAudioEngine();
