// ==============================================================================
// 💖 ROMANTIC SURPRISE WEBSITE CONFIGURATION
// Customize your girlfriend's name, love letter, photos, and messages below!
// ==============================================================================

window.SURPRISE_CONFIG = {
  // Her name or pet name (e.g. "Winona", "Babe", "Princess", "My Love")
  recipientName: "Winona",

  // 🎀 GAME 1: Word Search
  game1: {
    title: "Let's play a little game 🎀",
    instructions: "Connect the letters to find three words that always come to my mind whenever I think of you.",
    hint: "(Hint: SWEET, CUTE, LOVE)",
    wordsToFind: ["SWEET", "CUTE", "LOVE"],
    // 5x5 Grid Layout (Matches the viral video layout):
    // - SWEET: Row 0 across (indices (0,0) to (0,4))
    // - CUTE:  Col 0 down (indices (1,0) to (4,0))
    // - LOVE:  Diagonal (indices (1,1) -> (2,2) -> (3,3) -> (4,4))
    grid: [
      ['S', 'W', 'E', 'E', 'T'],
      ['C', 'L', 'I', 'V', 'E'],
      ['U', 'O', 'O', 'Q', 'R'],
      ['T', 'L', 'V', 'V', 'X'],
      ['E', 'Y', 'B', 'D', 'E']
    ],
    successMessage: "The stars align perfect. You may proceed. ✨",
    nextButtonText: "Reveal Next ✨"
  },

  // 💌 STEP 2: The Love Letter / Confession
  confession: {
    badge: "💌",
    title: "My Confession 💌",
    paragraphs: [
      "I love how comfortable it is to be around you. Even on my most tiring days, just seeing a text from you is always enough to make me smile.",
      "I honestly didn't plan for this to happen, but lately, I find myself looking for you in everything. I'm constantly thinking about your laugh, the warmth of your smile, and how you make even the ordinary days feel so special.",
      "Thank you for being my safe space, my favorite notification, and the sweetest part of my day.",
      "Every single memory with you is something I hold close to my heart. But wait, I prepared one more little surprise for you..."
    ],
    nextButtonText: "Read On 🌸"
  },

  // 🧩 GAME 2: Emoji Match Memory Game
  game2: {
    title: "A Little Challenge 🧩",
    // {NAME} will be automatically replaced with recipientName
    instructions: "Let's play one more quick game, {NAME}! Match all the cute emojis to unlock the final surprise I have for you.",
    emojis: ["⭐", "🧸", "🦄", "🌸", "✨", "🍭", "💖", "🎀"],
    successMessage: "You found all the matches! You're amazing 💖",
    nextButtonText: "One Last Thing ✨"
  },

  // 📸 STEP 4: The Final Surprise Photo Scrapbook
  finalSurprise: {
    title: "Our Favorite Memories 📸",
    subtitle: "Every moment by your side is a memory I will cherish forever.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=700&q=80",
        caption: "The day everything felt like magic ✨",
        rotation: "-3deg"
      },
      {
        url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=700&q=80",
        caption: "My favorite view will always be you 🌸",
        rotation: "2deg"
      },
      {
        url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=700&q=80",
        caption: "Our endless laughs and sweet memories 🧸",
        rotation: "-2deg"
      },
      {
        url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=700&q=80",
        caption: "Forever and always my person 💖",
        rotation: "3deg"
      }
    ],
    closingLoveNote: "No matter where life takes us, my heart will always choose you. I love you so much! ❤️",
    interactiveButton: "Send You A Thousand Hearts 💖"
  }
};
