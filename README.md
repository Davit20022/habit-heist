# Habit Heist

A GTA-inspired gamified habit and life tracker built with React, Vite, Tailwind CSS, Lucide React, and Framer Motion.

## GitHub Pages setup

1. Upload all files and folders in this project to the root of your GitHub repository, including the hidden `.github` folder.
2. Commit to the `main` branch.
3. In GitHub, open **Settings > Pages**.
4. Under **Build and deployment > Source**, choose **GitHub Actions**.
5. Open the **Actions** tab and wait for `Deploy Habit Heist to GitHub Pages` to complete.
6. Return to **Settings > Pages** to find the published website URL.

Future commits to `main` automatically rebuild and redeploy the website.

## Run locally

    npm install
    npm run dev

## Production build

    npm run build

Vite writes the production site to `dist/`.

Player progress is stored locally in each browser using localStorage under `habit-heist-v1`.
