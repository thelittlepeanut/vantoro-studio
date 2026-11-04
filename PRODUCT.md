# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
iPhone owners whose camera roll is bloated (thousands of photos, burst series, screenshots, near-duplicates) and who want to clean it without a tedious chore. They arrive from a link, a video or an App Store search and decide within seconds whether to download. A second audience is App Store reviewers, who need the support, privacy and terms pages to be complete and easy to find.

## Product Purpose
vantoro.studio is the website of Vantoro Studio, an independent iOS app studio (sole proprietor, France), and of its first app, FlickFlush. The site presents the studio, sells FlickFlush, and hosts the legal and support pages App Store review requires. Success: a visitor understands FlickFlush and heads for the download; a reviewer finds support, privacy and terms at once.

## Positioning
FlickFlush cleans a photo library by swiping, one photo at a time, entirely on-device: no account, no upload, no server. Nothing is deleted until the user confirms in a review basket, and deleted photos land in iOS's Recently Deleted album.

## Operating Context
The app is French/English (the site has an EN/FR toggle, EN default). Content is the source of truth in `lib/translations.ts`. The app is a React Native app on iOS (Android is mentioned as coming soon on the current site).

## Capabilities and Constraints
- Stack: existing Next.js 16 (App Router) + Tailwind v4 + TypeScript project; keep it.
- Routes: `/` (studio home), `/flickflush`, `/flickflush/support`, `/flickflush/privacy`, `/flickflush/terms`. All must stay, in FR and EN.
- FlickFlush features (confirmed by the app screenshots and copy): swipe left to trash, right to keep, up to favorite, undo; album assignment from a bottom sheet; duplicate detection with best-quality badge, Delete all / Keep / Keep all; three modes (Quick clean, Duplicates, By album); daily goal and streak; session recap with space freed; trash review basket; everything on-device, works offline, no account.
- The app has PRO-gated tools (Quick clean and Duplicates show a PRO tag) and subscriptions managed by Apple, with RevenueCat for entitlements. No prices are on the site and none may be invented.
- Release state: FlickFlush is coming soon / in App Store review. There is no public App Store URL yet: no live "Download" claim, no fabricated store link.
- Legal facts to preserve verbatim: published by Vantoro Studio, operated by Kévin Bourdouleix, sole proprietor (entrepreneur individuel), France, SIREN 912714128; contact help@vantoro.studio; terms last updated October 9, 2026.
- Terminology: user-facing copy must not use the words "sweep" or "sweeping" (removed deliberately in recent commits).

## Brand Commitments
Names: Vantoro Studio, FlickFlush. Logos: `public/assets/vantoro-logo.png` (V ribbon mark) and `public/assets/flickflush-logo.png` (white broom on violet app icon) are the shipped marks. The user said the visual world is entirely free to replace (palette included).

## Evidence on Hand
- 11 real iOS screenshots of FlickFlush in `public/screenshots/` (French UI): swipe, album sheet, duplicates, stats, session recap, trash review, home.
- Real legal and support copy in FR/EN.
- Absent, never to be fabricated: testimonials, download counts, ratings, press, prices, an App Store URL, Android availability dates.

## Product Principles
1. The product is the swipe: show the real screens doing the real job.
2. Privacy is a mechanism, not a badge: on-device, no account, nothing deleted without confirmation.
3. Be honest about release state and pricing.
4. Support and legal pages are first-class citizens for reviewers.
5. Small studio, high craft: the site itself is the studio's proof.

## Accessibility & Inclusion
WCAG AA contrast, visible focus, reduced-motion respected, usable on phones first (the audience is on an iPhone), FR/EN parity.
