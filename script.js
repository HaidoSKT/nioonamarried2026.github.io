// ==============================================================================
// 💖 ROMANTIC SURPRISE WEBSITE - GAME LOGIC & ANIMATIONS
// ==============================================================================

(function() {
  const config = window.SURPRISE_CONFIG;

  // ---------------------------------------------------------------------------
  // 1. SOUND & AUDIO (Custom MP3 Audio Player + Web Audio Synthesizer Fallback)
  // ---------------------------------------------------------------------------
  let audioCtx = null;
  let audioElement = null;
  let isMusicPlaying = false;
  let musicInterval = null;

  function initAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function initAudioElement() {
    if (!audioElement && config.music && config.music.url) {
      audioElement = new Audio(config.music.url);
      audioElement.loop = true;
      audioElement.volume = 0.65;
      audioElement.addEventListener('error', () => {
        console.warn('Custom audio file not found. Falling back to ambient music box.');
        audioElement = null;
      });
    }
  }

  // Soft romantic music-box note
  function playNote(freq, type = 'sine', duration = 0.5, gainVal = 0.15) {
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // AudioContext policy fallback
    }
  }

  // Play a gentle pop on tile click
  function playPop() {
    initAudio();
    playNote(520, 'sine', 0.1, 0.12);
  }

  // Play sweet success chime
  function playSuccessChime() {
    initAudio();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      setTimeout(() => playNote(freq, 'triangle', 0.45, 0.18), i * 110);
    });
  }

  // Play romantic fanfare when game completes
  function playFanfare() {
    initAudio();
    const melody = [523.25, 659.25, 783.99, 880, 1046.50];
    melody.forEach((freq, i) => {
      setTimeout(() => playNote(freq, 'sine', 0.6, 0.22), i * 130);
    });
  }

  // Start background music (Custom MP3 or Ambient Synth)
  function startMusic() {
    initAudio();
    if (isMusicPlaying) return;
    const btn = document.getElementById('music-toggle');

    initAudioElement();

    if (audioElement) {
      audioElement.play().then(() => {
        isMusicPlaying = true;
        btn.classList.add('playing');
        btn.innerText = '🎶';
      }).catch(err => {
        playSynthesizedMusic();
      });
    } else {
      playSynthesizedMusic();
    }
  }

  // Stop background music
  function stopMusic() {
    const btn = document.getElementById('music-toggle');
    isMusicPlaying = false;
    btn.classList.remove('playing');
    btn.innerText = '🎵';

    if (audioElement) {
      audioElement.pause();
    }
    if (musicInterval) {
      clearInterval(musicInterval);
      musicInterval = null;
    }
  }

  function toggleBackgroundMusic() {
    if (isMusicPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  }

  // Ambient romantic lofi music box loop (C Major pentatonic chords)
  function playSynthesizedMusic() {
    const btn = document.getElementById('music-toggle');
    isMusicPlaying = true;
    btn.classList.add('playing');
    btn.innerText = '🎶';

    const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
    let step = 0;
    const pattern = [0, 2, 4, 7, 4, 2, 1, 3, 5, 7, 5, 3];

    if (musicInterval) clearInterval(musicInterval);
    musicInterval = setInterval(() => {
      if (!isMusicPlaying) return;
      const noteFreq = scale[pattern[step % pattern.length] % scale.length];
      playNote(noteFreq, 'sine', 0.9, 0.08);
      step++;
    }, 340);
  }

  // ---------------------------------------------------------------------------
  // 2. AMBIENT SPARKLES CANVAS
  // ---------------------------------------------------------------------------
  function initAmbientCanvas() {
    const canvas = document.getElementById('ambient-canvas');
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = Math.min(width > 600 ? 50 : 25, 60);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.8,
        speedY: Math.random() * 0.45 + 0.2,
        speedX: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.7 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        isHeart: Math.random() > 0.65
      });
    }

    function render() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.01;
        const currentAlpha = Math.max(0.1, Math.min(0.85, p.alpha));

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.fillStyle = `rgba(240, 140, 175, ${currentAlpha})`;
        ctx.beginPath();
        if (p.isHeart) {
          // Draw tiny floating heart
          const size = p.radius * 2.2;
          ctx.font = `${size * 2}px sans-serif`;
          ctx.fillText('✨', p.x, p.y);
        } else {
          // Draw glowing round star/orb
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      requestAnimationFrame(render);
    }
    render();
  }

  // ---------------------------------------------------------------------------
  // 3. SCREEN SWITCHER
  // ---------------------------------------------------------------------------
  function goToScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ---------------------------------------------------------------------------
  // 4. GAME 1: WORD SEARCH (SWEET, CUTE, LOVE)
  // ---------------------------------------------------------------------------
  const foundWords = new Set();
  let isDragging = false;
  let selectedCells = []; // array of { r, c, char, el }
  let clearTimer = null;

  function initGame1() {
    const gridEl = document.getElementById('word-grid');
    const badgesContainer = document.getElementById('word-badges');
    gridEl.innerHTML = '';
    badgesContainer.innerHTML = '';

    // Render word status badges
    config.game1.wordsToFind.forEach(word => {
      const badge = document.createElement('div');
      badge.className = 'word-badge';
      badge.id = `badge-${word}`;
      badge.innerText = `${word} 🤍`;
      badgesContainer.appendChild(badge);
    });

    // Render 5x5 grid
    config.game1.grid.forEach((row, r) => {
      row.forEach((char, c) => {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.dataset.row = r;
        tile.dataset.col = c;
        tile.dataset.char = char;
        tile.innerText = char;

        // Pointerdown starts drag or tap
        tile.addEventListener('pointerdown', (e) => {
          e.preventDefault();
          initAudio();
          isDragging = true;
          handleCellInteraction(r, c, char, tile);
        });

        // Pointerenter continues drag
        tile.addEventListener('pointerenter', () => {
          if (isDragging) {
            handleCellInteraction(r, c, char, tile);
          }
        });

        gridEl.appendChild(tile);
      });
    });

    // Touch & pointer drag tracking across tiles (works flawlessly on mobile touchscreens)
    gridEl.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (target && target.classList.contains('tile')) {
        const r = parseInt(target.dataset.row);
        const c = parseInt(target.dataset.col);
        const char = target.dataset.char;
        handleCellInteraction(r, c, char, target);
      }
    });

    // Pointerup finishes drag gesture
    window.addEventListener('pointerup', () => {
      isDragging = false;
      evaluateSelectionOnRelease();
    });

    // "Reveal Next" button handler
    const nextBtn = document.getElementById('game1-next-btn');
    nextBtn.addEventListener('click', () => {
      playSuccessChime();
      goToScreen('screen-confession');
    });
  }

  function handleCellInteraction(r, c, char, tile) {
    if (tile.classList.contains('matched')) return;

    if (clearTimer) {
      clearTimeout(clearTimer);
      clearTimer = null;
    }

    const alreadyIdx = selectedCells.findIndex(item => item.r === r && item.c === c);
    if (alreadyIdx !== -1) {
      // If tapping the last selected tile, deselect it
      if (alreadyIdx === selectedCells.length - 1 && !isDragging) {
        const removed = selectedCells.pop();
        removed.el.classList.remove('selecting');
        playPop();
      }
      return;
    }

    selectedCells.push({ r, c, char, el: tile });
    tile.classList.add('selecting');
    playPop();

    // Check if current selection forms any target word
    checkWordMatch();
  }

  function checkWordMatch() {
    const currentSpelling = selectedCells.map(c => c.char).join('');

    // Check if matched any target word
    const matchedWord = config.game1.wordsToFind.find(w => w === currentSpelling);

    if (matchedWord && !foundWords.has(matchedWord)) {
      // SUCCESS: Word found!
      foundWords.add(matchedWord);
      playSuccessChime();

      selectedCells.forEach(item => {
        item.el.classList.remove('selecting');
        item.el.classList.add('matched');
      });

      const badge = document.getElementById(`badge-${matchedWord}`);
      if (badge) {
        badge.classList.add('found');
        badge.innerText = `${matchedWord} ✨`;
      }

      selectedCells = [];

      // Check if all words completed
      if (foundWords.size === config.game1.wordsToFind.length) {
        onGame1Complete();
      }
      return true;
    }

    return false;
  }

  function evaluateSelectionOnRelease() {
    if (selectedCells.length === 0) return;

    // If already matched, nothing to do
    if (checkWordMatch()) return;

    const currentSpelling = selectedCells.map(c => c.char).join('');
    const remainingWords = config.game1.wordsToFind.filter(w => !foundWords.has(w));

    // Check if the current spelling is a valid prefix of any remaining word
    const isValidPrefix = remainingWords.some(w => w.startsWith(currentSpelling));

    if (!isValidPrefix) {
      // Not a valid prefix: clear after a short delay so the user sees the feedback
      clearTimer = setTimeout(() => {
        selectedCells.forEach(item => item.el.classList.remove('selecting'));
        selectedCells = [];
      }, 350);
    }
  }

  function onGame1Complete() {
    playFanfare();
    shootConfetti();
    const successText = document.getElementById('game1-success-text');
    const nextBtn = document.getElementById('game1-next-btn');
    successText.classList.add('show');
    nextBtn.classList.add('visible');
  }

  // ---------------------------------------------------------------------------
  // 5. STEP 2: CONFESSION LETTER
  // ---------------------------------------------------------------------------
  function initConfession() {
    const letterBody = document.getElementById('letter-body');
    letterBody.innerHTML = '';

    config.confession.paragraphs.forEach(p => {
      const pEl = document.createElement('p');
      pEl.innerText = p;

      if (p.startsWith('— From') || p.startsWith('- From')) {
        pEl.style.textAlign = 'right';
        pEl.style.fontWeight = '700';
        pEl.style.fontFamily = 'var(--font-serif)';
        pEl.style.color = 'var(--primary-pink)';
        pEl.style.marginTop = '14px';
        pEl.style.fontSize = '1.05rem';
      } else if (p.includes('I love you Onaa')) {
        pEl.style.fontWeight = '700';
        pEl.style.fontFamily = 'var(--font-serif)';
        pEl.style.fontSize = '1.1rem';
        pEl.style.color = 'var(--accent-rose)';
        pEl.style.marginTop = '10px';
      }

      letterBody.appendChild(pEl);
    });

    const nextBtn = document.getElementById('confession-next-btn');
    nextBtn.classList.add('visible');
    nextBtn.addEventListener('click', () => {
      playSuccessChime();
      goToScreen('screen-game2');
    });
  }

  // ---------------------------------------------------------------------------
  // 6. GAME 2: EMOJI MATCHING MEMORY GAME (4x4)
  // ---------------------------------------------------------------------------
  let memoryCards = [];
  let flippedCards = [];
  let matchedPairs = 0;
  let canFlip = true;

  function initGame2() {
    const gridEl = document.getElementById('memory-grid');
    gridEl.innerHTML = '';
    matchedPairs = 0;
    flippedCards = [];
    canFlip = true;

    // Create 8 pairs = 16 cards total
    const emojis = config.game2.emojis;
    const cardData = [...emojis, ...emojis];

    // Shuffle cards
    cardData.sort(() => Math.random() - 0.5);

    cardData.forEach((emoji, index) => {
      const card = document.createElement('div');
      card.className = 'memory-card';
      card.dataset.emoji = emoji;
      card.dataset.index = index;

      card.innerHTML = `
        <div class="card-face card-back">💖</div>
        <div class="card-face card-front">${emoji}</div>
      `;

      card.addEventListener('click', () => onCardClick(card));
      gridEl.appendChild(card);
      memoryCards.push(card);
    });

    updatePairsCount();

    const nextBtn = document.getElementById('game2-next-btn');
    nextBtn.addEventListener('click', () => {
      playFanfare();
      goToScreen('screen-surprise');
      shootConfetti();
    });
  }

  function updatePairsCount() {
    const countEl = document.getElementById('pairs-count');
    if (countEl) {
      countEl.innerText = `${matchedPairs} / ${config.game2.emojis.length}`;
    }
  }

  function onCardClick(card) {
    initAudio();
    if (!canFlip) return;
    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;

    playPop();
    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      canFlip = false;
      const [card1, card2] = flippedCards;

      if (card1.dataset.emoji === card2.dataset.emoji) {
        // Matched!
        setTimeout(() => {
          card1.classList.add('matched');
          card2.classList.add('matched');
          playSuccessChime();
          matchedPairs++;
          updatePairsCount();
          flippedCards = [];
          canFlip = true;

          if (matchedPairs === config.game2.emojis.length) {
            onGame2Complete();
          }
        }, 320);
      } else {
        // Not matched - flip back
        setTimeout(() => {
          card1.classList.remove('flipped');
          card2.classList.remove('flipped');
          flippedCards = [];
          canFlip = true;
        }, 800);
      }
    }
  }

  function onGame2Complete() {
    playFanfare();
    shootConfetti();
    const successText = document.getElementById('game2-success-text');
    const nextBtn = document.getElementById('game2-next-btn');
    successText.classList.add('show');
    nextBtn.classList.add('visible');
  }

  // ---------------------------------------------------------------------------
  // 7. STEP 4: FINAL SURPRISE PHOTO GALLERY & VIDEO
  // ---------------------------------------------------------------------------
  function initFinalSurprise() {
    renderVideoCard();
    renderPhotoGallery();

    const finalBtn = document.getElementById('send-love-btn');
    finalBtn.addEventListener('click', () => {
      playFanfare();
      shootConfetti();
      spawnFloatingHearts(20);
    });

    // Local Video Preview feature
    const videoInput = document.getElementById('video-uploader');
    if (videoInput) {
      videoInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          if (!config.finalSurprise.video) {
            config.finalSurprise.video = { enabled: true };
          }
          config.finalSurprise.video.enabled = true;
          config.finalSurprise.video.url = URL.createObjectURL(file);
          config.finalSurprise.video.caption = file.name.replace(/\.[^/.]+$/, "") + " 🎬💖";
          renderVideoCard();
          shootConfetti();
        }
      });
    }

    // Local Photo Preview feature (so user can drop their own photos right in the browser)
    const fileInput = document.getElementById('photo-uploader');
    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
          config.finalSurprise.photos = files.map((file, i) => ({
            url: URL.createObjectURL(file),
            caption: `Our Memory #${i + 1} 💖`,
            rotation: (i % 2 === 0 ? -2.5 : 2.5) + 'deg'
          }));
          renderPhotoGallery();
          shootConfetti();
        }
      });
    }
  }

  function renderVideoCard() {
    const videoContainer = document.getElementById('video-container');
    if (!videoContainer) return;
    videoContainer.innerHTML = '';

    // Support both an array of videos or a single video object
    let videoList = [];
    if (Array.isArray(config.finalSurprise.videos)) {
      videoList = config.finalSurprise.videos;
    } else if (config.finalSurprise.video && config.finalSurprise.video.url) {
      videoList = [config.finalSurprise.video];
    }

    videoList.forEach(videoConfig => {
      if (!videoConfig || !videoConfig.url) return;

      const card = document.createElement('div');
      card.className = 'video-card';

      let mediaHtml = '';
      const url = videoConfig.url.trim();

      // Check if YouTube URL
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        let embedUrl = url;
        if (url.includes('watch?v=')) {
          const videoId = url.split('watch?v=')[1].split('&')[0];
          embedUrl = `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes('youtu.be/')) {
          const videoId = url.split('youtu.be/')[1].split('?')[0];
          embedUrl = `https://www.youtube.com/embed/${videoId}`;
        }
        mediaHtml = `
          <div class="video-wrapper">
            <iframe src="${embedUrl}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        `;
      } else {
        // Direct video URL (MP4 / WebM / CDN links)
        mediaHtml = `
          <div class="video-wrapper">
            <video controls playsinline preload="auto" src="${url}" style="width: 100%; border-radius: 12px; max-height: 480px; background: #000;">
              <source src="${url}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        `;
      }

      card.innerHTML = `
        ${mediaHtml}
        ${videoConfig.caption ? `<div class="video-caption">${videoConfig.caption}</div>` : ''}
      `;

      videoContainer.appendChild(card);
    });
  }

  function renderPhotoGallery() {
    const galleryEl = document.getElementById('photo-gallery');
    galleryEl.innerHTML = '';

    config.finalSurprise.photos.forEach((photo, idx) => {
      const polaroid = document.createElement('div');
      polaroid.className = 'polaroid';
      polaroid.style.transform = `rotate(${photo.rotation || (idx % 2 === 0 ? '-2deg' : '2deg')})`;

      polaroid.innerHTML = `
        <div class="polaroid-img-wrapper">
          <img src="${photo.url}" alt="Memory ${idx + 1}" loading="lazy" />
        </div>
        ${photo.caption ? `<div class="polaroid-caption">${photo.caption}</div>` : ''}
      `;

      polaroid.addEventListener('click', () => {
        playPop();
        spawnFloatingHearts(5);
      });

      galleryEl.appendChild(polaroid);
    });
  }

  // ---------------------------------------------------------------------------
  // 8. EFFECTS: CONFETTI & FLOATING HEARTS
  // ---------------------------------------------------------------------------
  function shootConfetti() {
    const colors = ['#e3537e', '#ff94b8', '#ffccd8', '#ffd166', '#ffffff'];
    for (let i = 0; i < 40; i++) {
      const conf = document.createElement('div');
      conf.style.position = 'fixed';
      conf.style.zIndex = '9999';
      conf.style.width = Math.random() * 8 + 6 + 'px';
      conf.style.height = Math.random() * 8 + 6 + 'px';
      conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      conf.style.left = Math.random() * 100 + 'vw';
      conf.style.top = '-10px';
      conf.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      conf.style.opacity = '1';
      conf.style.pointerEvents = 'none';
      conf.style.transition = `transform ${Math.random() * 1.8 + 1.2}s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 2s ease`;
      document.body.appendChild(conf);

      requestAnimationFrame(() => {
        conf.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${window.innerHeight + 20}px) rotate(${Math.random() * 720}deg)`;
        conf.style.opacity = '0';
      });

      setTimeout(() => conf.remove(), 2500);
    }
  }

  function spawnFloatingHearts(count = 10) {
    const emojis = ['💖', '💕', '🌸', '✨', '🎀', '💌', '❤️'];
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.left = Math.random() * 80 + 10 + 'vw';
        heart.style.bottom = '40px';
        heart.style.fontSize = Math.random() * 1.2 + 1.4 + 'rem';
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 2000);
      }, i * 70);
    }
  }

  // ---------------------------------------------------------------------------
  // 9. INITIALIZATION
  // ---------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    // Inject dynamic texts from config
    document.getElementById('recipient-name-game2').innerText = config.recipientName;
    document.getElementById('music-toggle').addEventListener('click', toggleBackgroundMusic);

    // Initialize all components
    initAmbientCanvas();
    initGame1();
    initConfession();
    initGame2();
    initFinalSurprise();

    // Start on Screen 1
    goToScreen('screen-game1');

    // First user gesture triggers audio & starts romantic music
    const handleFirstGesture = () => {
      initAudio();
      if (config.music && config.music.autoPlayOnFirstTap && !isMusicPlaying) {
        startMusic();
      }
    };
    window.addEventListener('pointerdown', handleFirstGesture, { once: true });
  });

})();
