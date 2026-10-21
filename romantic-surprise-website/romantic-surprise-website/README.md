# 💖 Romantic Surprise Website

A handcrafted, interactive romantic surprise website inspired by the viral aesthetic.

## ✨ Features

1. **Game 1: Word Search ("SWEET, CUTE, LOVE")** 🎀
   - Interactive 5x5 letter grid with touch and drag support.
   - Detects the hidden words (`SWEET`, `CUTE`, `LOVE`), unlocks glowing pink highlights, and reveals the "Reveal Next ✨" button with sound effects.
2. **Step 2: The Confession Letter** 💌
   - Glassmorphic card with a floating 3D envelope seal.
   - Elegant typography, smooth scrollbar, and your personalized romantic letter.
3. **Game 2: Emoji Match Challenge** 🧩
   - 4x4 card flip memory game matching 8 adorable pairs (⭐, 🧸, 🦄, 🌸, ✨, 🍭, 💖, 🎀).
   - Matched cards turn deep glowing pink and celebration confetti bursts upon completion!
4. **Step 4: The Grand Finale (Photo Scrapbook)** 📸
   - Polaroid-style photo cards with authentic tape stickers, subtle tilt angles, and custom captions.
   - Interactive "Send You A Thousand Hearts 💖" button that showers hearts & sparkles.
5. **Atmosphere & Music**:
   - Floating glowing sparkles & stars canvas in blush pink pastel aesthetic.
   - Built-in soothing music-box synthesizer (runs natively in any browser with no external audio files required!).

---

## 🚀 How to Preview Instantly

Just open **`index.html`** in any web browser (Chrome, Safari, Edge, Firefox)! No installation or server needed.

---

## 🎨 How to Customize (Takes 2 Minutes)

Open **`config.js`** in any text editor:

1. **Change Name**:
   ```javascript
   recipientName: "Winona", // Put your girlfriend's name or pet name here
   ```
2. **Edit the Love Letter**:
   Update `confession.paragraphs` with your own words.
3. **Add Your Real Photos**:
   - Save your photos into the `images/` folder (e.g. `images/pic1.jpg`, `images/pic2.jpg`).
   - In `config.js`, update the `photos` list:
     ```javascript
     photos: [
       {
         url: "images/pic1.jpg",
         caption: "Our first trip to the beach 🌅"
       },
       {
         url: "images/pic2.jpg",
         caption: "My favorite smile in the world 🌸"
       }
     ]
     ```

---

## 🌐 How to Host It Online for FREE

To send her a live link on her phone:

### Option A: Cloudflare Pages (Recommended - 100% Free & Fast)
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com/) (free sign-up).
2. Click **Create a project** > **Direct Upload**.
3. Drag & drop the entire `romantic-surprise-website` folder.
4. Done! Cloudflare will give you a free live URL (e.g. `your-surprise.pages.dev`).

### Option B: Netlify Drop (Instant Drag & Drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop this folder onto the page.
3. Your site is instantly live with a free custom URL!

### Option C: GitHub Pages
1. Create a GitHub repository and push these files.
2. Go to **Settings** > **Pages** > Select branch `main` > Save.
3. Your site will be live at `https://<your-username>.github.io/<repo-name>`.
