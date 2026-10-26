# Redesign verification

## Direction and scope

Personal film-study game, not a promotional landing page. The first viewport identifies the film and offers a one-click Quick Quiz. Peach quotation and mint scene challenges follow; the complete bank and format drills remain accessible below. Lavender, peach, mint, and yellow answer surfaces distinguish choices without implying correctness. Neumorphic light/dark surfaces press inward on selection. The ticket motif identifies the film; letter cards represent the actual formats. The main question stays quiet enough to read, with expression in the choices, points, streaks, and feedback. On narrow screens, choices stack and round statistics become a compact strip. No extra accounts, services, or deployment were added.

The user specified a strong direction, so one rendered design was validated rather than building two competing apps. Kahoot's public home-page examples informed the colorful four-answer layout; the visual identity is original. No third-party branding or assets were copied. All illustration consists of lightweight CSS and text. The previous restrained literary page was unsuitable for the requested game feel.

## Render review and corrections

1. Mobile title: hiding the desktop ticket removed the film name from the first viewport. Added the title and year to the permanent introduction label.
2. Phone question screen: metadata and explanation text were too small, and round statistics consumed too much vertical space. Enlarged answer/explanation text and compressed the statistics strip.
3. Enlarged content: at 200% CSS zoom, two-column challenges and compact rows overflowed. Added container-based reflow, wrapping header controls, and single-column challenge fallbacks.

Additional checks found muted-text contrast below 4.5:1 on a few colored surfaces. Both light and dark muted colors were adjusted. A load-time footer shift was removed by hiding the footer until the app has rendered. This reduced the measured simulated-mobile initial CLS from 0.091 to 0.

## Working behavior

- Six Node tests pass: complete bank, valid options, normalized identification, shuffling, dedicated-mode filtering, balanced true/false, and guaranteed mixed quick rounds (related assertions share tests).
- Complete 80-question browser run: 80 correct, 8,000 points, best streak 80, no browser script errors.
- Quick Quiz: ten questions, all three formats; empty-answer validation, incorrect feedback, streak resets, result summary, and a one-question rematch verified.
- Who Said It?: sixteen curated questions; quotation display and “Oprah” alias verified.
- Story & Scenes: twenty-five curated questions, including event sequencing and scene context; full-pool launch verified.
- Saved session restored after reload. Completed rounds increment once per completion; rematches count as separate rounds.
- Home and question layouts checked at 320, 390, 560, 768, 1024, 1440, and 1920 pixels without horizontal overflow. Enlarged 200% content also checked. Desktop, phone, wide-screen, dark mode, question feedback, and results renders inspected.
- Reduced-motion mode removes entry and success animations and transitions. Controls retain native keyboard behavior and visible focus.

## Local performance evidence

Route: http://localhost:4173/; static production files served directly without a build step. Browser: headless installed Microsoft Edge, controlled by Playwright. Representative data: all 80 questions loaded. Fresh browser contexts, no external assets or fonts.

| Final initial-load check | Viewport | CPU/network conditions | LCP | CLS |
|---|---|---|---|---|
| Desktop | 1440 x 1000 | Host CPU, local network, fresh context | 92 ms | 0 |
| Simulated mobile | 390 x 844 | 4x CPU slowdown, 150 ms latency, 1.6 Mbps download, cache disabled | 1,000 ms | 0 |

Earlier repeated-action checks on the same interaction implementation measured click-to-second-animation-frame latency for launch, reveal, and next question: 5.6–12.1 ms on desktop and 9.8–46.1 ms under the mobile simulation. These are synthetic response diagnostics, not INP. Selection, typing, scrolling, opening review details, save/resume, and repeated quiz progression were also interaction-tested.

Initial assets total approximately 65 KB uncompressed. JavaScript is approximately 34 KB (55 KiB budget); CSS is below 30 KiB; all assets are below the 100 KiB route budget. No runtime packages or image/font requests are required.

These are individual local lab observations, not field Core Web Vitals or promises about Render. INP and 75th-percentile real-user metrics remain unverified until deployment and sufficient usage. Physical-phone testing and an independent accessibility audit were not performed.
