---
description: How to deploy the portfolio website with Vercel
---

# Deploying with Vercel

Vercel is the best way to host a Vite project. It's free and extremely fast.

### 1. The GitHub Method (Easiest & Recommended)
1. Push your code to a **GitHub repository**.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"Add New"** > **"Project"**.
4. Import your portfolio repository.
5. Vercel will automatically detect `Vite` as the framework.
6. Click **"Deploy"**.

Every time you push new code to GitHub, Vercel will automatically update your website!

### 2. The Command Line Method
If you don't want to use GitHub right now:
1. Open your terminal in the project folder.
2. Install the Vercel CLI: `npm i -g vercel`
3. Run the command: `vercel`
4. Follow the prompts (log in if needed).
5. When it asks for settings, it should detect Vite automatically. Just hit Enter for defaults.
6. Once finished, run `vercel --prod` to push it to the live URL.

### Important Note for your Images
Since we added your certificate images to the `public/certificates/` folder, Vercel will bundle them correctly. Once deployed, just verify it's working by visiting the provided `.vercel.app` link.
