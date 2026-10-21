// ==============================================================================
// 💖 ROMANTIC SURPRISE WEBSITE CONFIGURATION
// Customize your girlfriend's name, love letter, photos, and messages below!
// ==============================================================================

window.SURPRISE_CONFIG = {
  // Her name or pet name
  recipientName: "Onaa",

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
      "HAIII ONAAA HOW ARE YOU DOINGG?!?!?! TODAY IS 22 OCTOBER... our third anniversary... I'm really sorry about yesterday.. I'm such an egoistical person.. an evil person.. It seems like I've always wanting something to just be like my ways... I know I'm so selfish..",
      "I've prepared this gift for you yaa sayang.. I've always find myself looking for you in every part in Surabaya and every part in my life... You know.. seeing your notification is the best thing that had come to me for this time... It's been two months yaa since we're LDR.. I hope that we could last forever.. I know that you're my red line..",
      "Semoga kamu disana kuat ya sayang.. I always come and pray for you.. before bed.. mwah.. I hope you stay healthy.. and I hope that you pass your IELTS Exam laterrr :DDD MWAAAHH",
      "Thank you for being my safe space for all this time.. My favorite notification.. My favorite smile.. My favorite scent.. And for being the sweetest part of my entire life..",
      "I love you Onaa... Agnes Adonnara.. ❤️",
      "— From Beloved Nio 💖"
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

  // 📸 STEP 4: The Final Surprise Photo Scrapbook & Video
  finalSurprise: {
    title: "Our Favorite Memories 📸",
    subtitle: "Every moment by your side is a memory I will cherish forever.",
    
    // 🎥 ROMANTIC VIDEO SETTINGS
    // You can drop your video into the "videos/" folder (e.g. "videos/video.mp4")
    // or use a YouTube embed link like "https://www.youtube.com/embed/VIDEO_ID"
    video: {
      enabled: true,
      title: "A Special Video For You 🎥",
      url: "videos/video.mp4", // Replace with your video file name or YouTube URL
      caption: "Every second with you is my happiest memory 🎬💖"
    },

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
    closingLoveNote: "No matter the distance between Surabaya and wherever you are, my heart will always choose you. Happy 3rd Anniversary, Onaa! ❤️",
    interactiveButton: "Send You A Thousand Hearts 💖"
  }
};
