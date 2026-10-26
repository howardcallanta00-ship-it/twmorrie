# One More Tuesday

A dependency-free, responsive study quiz for the 1999 film Tuesdays with Morrie. 80 curated questions: 32 multiple choice, 30 identification, 18 true or false. Content follows the supplied transcript; scene times include its introductory segment. The raw transcript is not distributed.

## Local preview

Install Node.js 20 or later, then run `npm start` from this folder. Open http://localhost:4173. No package installation is required.

## Features

- Quick Quiz launches a fresh 10-question round with 4 multiple choice, 3 identification, and 3 true/false questions.
- Who Said It? curates 16 speaker questions. Story & Scenes curates 25 questions about context, events, and chronology. Tagged questions appear only once in All Questions.
- All Questions defaults to the full mixed bank; dedicated modes and individual formats support 10, 20, or all available questions.
- Independent question and answer shuffling; explanations and timestamps.
- Case/punctuation-insensitive identification with explicit accepted aliases (no unreliable fuzzy grading).
- Save and resume, missed-question rematches, 100 points per correct answer, current and best streaks, result breakdowns, and dark/light themes.
- Neumorphic controls, colorful answer tiles and format accents, mobile single-column answers, and a wide-screen score sidebar. Motion honors reduced-motion preferences.
- Mobile answer dock keeps Check/Next within reach. Draft answers survive leaving or refreshing. Starting Quick Quiz protects an unfinished round with a resume option.
- Desktop shortcuts: 1–4 choose an option; Enter checks or advances outside text fields. Enter in an identification field submits normally.
- Results include a filterable answer notebook for both correct and missed questions. The most recent completed round remains accessible from home.
- Local browser storage only. No sign-in, tracking, external fonts, or API services.

## Render deployment (after GitHub review)

Create a Static Site from the repository. If this folder is the repository root, leave Root Directory blank. Build Command: `node -e "console.log('Static site ready')"`. Publish Directory: `public`. No environment variables are required. Alternatively use a Node web service with Start Command `npm start`; the server honors Render's PORT variable. The static option needs no running server.

Run `npm test` for content and grading checks. Edit `public/questions.js` to change the bank. Browser progress is origin/device specific and does not sync. Scores support study and are not tamper-resistant examination results.

## Performance budgets

No build step, runtime dependencies, external assets, or external fonts. Route `/`: combined JavaScript budget 55 KiB, CSS budget 38 KiB (including mobile dock, navigation, and answer-notebook states), total initial first-party assets budget 100 KiB (uncompressed). Local lab measurements are diagnostic, not field Core Web Vitals. Deployment targets remain LCP <= 2.5s, INP <= 200ms, CLS <= 0.1 at the 75th percentile; confirm field metrics after deployment and real usage.
