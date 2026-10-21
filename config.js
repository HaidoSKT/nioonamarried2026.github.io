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
    
    // 🎥 ROMANTIC VIDEOS (Direct Links)
    videos: [
      {
        url: "https://cdn.discordapp.com/attachments/864790420605370371/1562453637954011177/Terranova_With_My_GIRLFRIENDDDD_2.mp4?ex=6ada0bd8&is=6ad8ba58&hm=bd9ea9d7e96ae12ae189370695e092f2e7c3db2d6f2458fc23231385c2651a50&",
        title: "Terranova With My GIRLFRIENDDDD 🎬💖",
        caption: "Terranova with my favorite person in the whole world 💖"
      },
      {
        url: "https://cdn.discordapp.com/attachments/864790420605370371/1562455447599063220/Timelapse_makan_marugame_udonn_3.mp4?ex=6ada0d87&is=6ad8bc07&hm=63b3820cb9e1ba839f111f66a6359e87ab9381bb9959b6378fdca4a3b21f1464&",
        title: "Timelapse Makan Marugame Udon 🍜✨",
        caption: "Timelapse makan Marugame Udon bareng sayang 🍜🥰"
      }
    ],

    // 📸 POLAROID PHOTOS (Direct Links)
    photos: [
      {
        url: "https://cdn.discordapp.com/attachments/864790420605370371/1562453004475695234/IMG-20260722-WA0063.jpg?ex=6ada0b41&is=6ad8b9c1&hm=8c61fd5d278aed415fdcc038d7b8719c807462b5badcd3279f662458be81eb34&animated=true",
        caption: "You and me, always my favorite memory 🌸",
        rotation: "-3deg"
      },
      {
        url: "https://media.discordapp.net/attachments/864790420605370371/1562455542566232074/IMG_0854.JPG?ex=6ada0d9e&is=6ad8bc1e&hm=be7d23f09bed22cbd36ea08174bb046e5d9bf5c52427e27dbab8ca9282a1bfaf&animated=true&width=1897&height=1265",
        caption: "My prettiest view in the entire world ✨",
        rotation: "2.5deg"
      },
      {
        url: "https://media.discordapp.net/attachments/864790420605370371/1562455665119731722/IMG_0269.JPG?ex=6ada0dbb&is=6ad8bc3b&hm=5b5e2003bb451ab1b205223df8b1b571c9c7d5896a89d69d6e3abd738b37c94f&animated=true&width=1897&height=1265",
        caption: "Every little smile of yours lights up my day 🧸",
        rotation: "-2deg"
      },
      {
        url: "https://media.discordapp.net/attachments/864790420605370371/1562458330436345856/20260502_190601_933.jpg?ex=6ada1037&is=6ad8beb7&hm=1d59161e7baf03af87e7b960453a2f61decab4061cf17723f190155969bc84e4&animated=true&width=1265&height=1897",
        caption: "Forever grateful for you, my dearest Onaa 💖",
        rotation: "3deg"
      }
    ],
    closingLoveNote: "No matter the distance between Surabaya and wherever you are, my heart will always choose you. Happy 3rd Anniversary, Onaa! ❤️",
    interactiveButton: "Send You A Thousand Hearts 💖"
  }
};
