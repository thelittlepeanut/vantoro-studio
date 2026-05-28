export type Lang = "en" | "fr";

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Nav
    "nav.swipe": "Swipe",
    "nav.duplicates": "Duplicates",
    "nav.album": "Albums",
    "nav.modes": "Modes",
    "nav.stats": "Stats",
    "nav.privacy": "Privacy",
    "nav.cta": "Download",
    "nav.back": "← Back to home",
    // Hero
    "hero.badge": "iOS App — Available Now",
    "hero.title.line1": "Your camera roll,",
    "hero.title.line2": "finally clean.",
    "hero.sub":
      "Sweep is the fastest way to clean your photo library. Swipe through your photos like Tinder — keep what matters, trash the rest.",
    // App Store badges
    "badge.ios.line1": "Download on the",
    "badge.ios.line2": "App Store",
    "badge.android.line1": "Coming soon on",
    "badge.android.line2": "Google Play",
    // Stats
    "stat.fps": "60fps",
    "stat.fps.label": "Silky animations",
    "stat.local": "100%",
    "stat.local.label": "On-device",
    "stat.data": "0",
    "stat.data.label": "Data uploaded",
    // Marquee chips
    "chip.keep": "Swipe right to keep",
    "chip.delete": "Swipe left to delete",
    "chip.dupes": "Smart duplicate detection",
    "chip.album": "Browse by album",
    "chip.fav": "Add to Favorites",
    "chip.stats": "Session statistics",
    "chip.local": "100% on-device",
    "chip.undo": "Undo any swipe",
    // Feature 1 - Swipe
    "f1.label": "Swipe Interface",
    "f1.title.line1": "Tinder for your",
    "f1.title.line2": "camera roll.",
    "f1.desc":
      "The fastest way to decide what stays and what goes. One swipe per photo — left to trash, right to keep. Satisfying, instant, addictive.",
    "f1.b1.h": "Swipe left — trash",
    "f1.b1.p":
      "Send photos to the review basket. Nothing is deleted until you confirm.",
    "f1.b2.h": "Swipe right — keep",
    "f1.b2.p": "Instantly move on. Zero friction, zero regret.",
    "f1.b3.h": "Undo anytime",
    "f1.b3.p": "Tap undo and your last decision reverses instantly.",
    // Feature 2 - More choices
    "f2.label": "More than two choices",
    "f2.title.line1": "Keep, trash,",
    "f2.title.line2": "love — or sort.",
    "f2.desc":
      "Not every photo is a yes or no. Heart your best shots as favorites, or assign them to albums — all without leaving the swipe flow.",
    "f2.b1.h": "Swipe up — favorite",
    "f2.b1.p": "Add your best photos to Favorites in one motion.",
    "f2.b2.h": "Assign to album",
    "f2.b2.p":
      "Tap the folder button to place the photo into any album — create a new one on the fly.",
    "f2.b3.h": "60fps animations",
    "f2.b3.p":
      "React Native Reanimated 3 makes every gesture feel native and instant.",
    // Feature 3 - Album
    "f3.label": "Album Organisation",
    "f3.title.line1": "Sort as you swipe.",
    "f3.title.line2": "No extra steps.",
    "f3.desc":
      "While reviewing a photo you can instantly assign it to any existing album — or create a new one on the spot. Organisation and cleanup in a single session.",
    "f3.b1.h": "Pick any album",
    "f3.b1.p":
      "A bottom sheet lists all your albums. Tap to assign without leaving the swipe flow.",
    "f3.b2.h": "Create a new album",
    "f3.b2.p":
      'Tap "New Album" to name and create an album right there, then assign immediately.',
    "f3.b3.h": "Add to Favorites in one tap",
    "f3.b3.p":
      'Toggle "Add to Favorites" directly from the album sheet for your best shots.',
    // Feature 4 - Duplicates
    "f4.label": "Duplicate Detection",
    "f4.title.line1": "Stop duplicates",
    "f4.title.line2": "eating your storage.",
    "f4.desc":
      "Sweep automatically groups near-identical photos, burst series, and screenshots. Keep the best one, delete the rest — in a single tap.",
    "f4.b1.h": "Best quality auto-identified",
    "f4.b1.p":
      "Sweep badges the sharpest photo in each group — just confirm and move on.",
    "f4.b2.h": "Delete all or keep all",
    "f4.b2.p":
      "One button to wipe the whole group, one to keep everything. Fast, no friction.",
    "f4.b3.h": "Hundreds of groups per session",
    "f4.b3.p":
      "Bursts, similar shots, screenshots — Sweep finds them all and presents each group one by one.",
    // Feature 5 - Smart tools
    "f5.label": "Smart tools",
    "f5.title.line1": "Three modes",
    "f5.title.line2": "for every need.",
    "f5.desc":
      "Quick clean, deep duplicate search, or album-by-album — pick your mode from the home screen and start sweeping in seconds.",
    "f5.b1.h": "Quick Clean",
    "f5.b1.p":
      "Swipe through your entire library in chronological order. Unlimited, fast, thorough.",
    "f5.b2.h": "Duplicates",
    "f5.b2.p":
      "Auto-detect near-identical photos, burst series, and screenshots — grouped for fast review.",
    "f5.b3.h": "By Album",
    "f5.b3.p":
      "Target a specific album — your Paris trip, your screenshots — without touching the rest.",
    // Feature 6 - Stats/Review
    "f6.label": "Session Results",
    "f6.title.line1": "See exactly",
    "f6.title.line2": "what you freed.",
    "f6.desc":
      "Every session ends with a full recap — photos swiped, trashed, kept, favorited, and megabytes freed. And before anything is deleted for good, review your trash basket and rescue any accidental swipe.",
    "f6.b1.h": "Review before you delete",
    "f6.b1.p":
      "Photos go to a review basket first — scroll through, rescue mistakes, then confirm. Nothing is gone until you say so.",
    "f6.b2.h": "Storage reclaimed",
    "f6.b2.p": "Exact MB/GB freed — no guessing, no estimates.",
    "f6.b3.h": "Full session recap",
    "f6.b3.p":
      "Photos deleted, kept, favorited, duration — the whole picture after every session.",
    // Feature 7 - Privacy
    "f7.label": "Privacy First",
    "f7.title.line1": "100% local.",
    "f7.title.line2": "Zero servers.",
    "f7.desc":
      "Your photos never leave your phone. Sweep works entirely offline — no account, no upload, no cloud. What happens on your device stays on your device.",
    "f7.b1.h": "Photos stay on-device",
    "f7.b1.p": "Sweep never sends any photo or metadata to a server.",
    "f7.b2.h": "Works offline",
    "f7.b2.p": "No internet connection required. Ever.",
    "f7.b3.h": "No account needed",
    "f7.b3.p": "Open the app, start swiping. No sign-up, no tracking.",
    // Modes
    "modes.label": "Three modes",
    "modes.title": "One app. Every library.",
    "modes.sub":
      "Whether you want a quick blitz or a deep clean, Sweep has the right mode for the moment.",
    "mode1.num": "Mode 01",
    "mode1.title": "Quick Clean",
    "mode1.desc":
      "Swipe through your full library chronologically. Unlimited photos, zero friction. The fastest way to make a dent.",
    "mode2.num": "Mode 02",
    "mode2.title": "Duplicates",
    "mode2.desc":
      "Sweep auto-groups near-identical photos, burst series, and screenshots. Review each cluster and wipe the waste in one tap.",
    "mode3.num": "Mode 03",
    "mode3.title": "By Album",
    "mode3.desc":
      "Target one album at a time — your last trip, your screenshots, your camera roll. Clean surgically, not blindly.",
    // CTA
    "cta.label": "Get started",
    "cta.title.line1": "Stop scrolling.",
    "cta.title.line2": "Start sweeping.",
    "cta.sub":
      "Your photo library is waiting. Download Sweep and reclaim your space in minutes.",
    // Footer
    "footer.copy": "© 2025 Sweep. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    // Privacy page
    "privacy.page.badge": "Legal",
    "privacy.page.h1": "Privacy Policy",
    "privacy.page.updated": "Last updated: May 27, 2025",
    "privacy.tldr":
      "Sweep does not collect, store, or transmit any of your personal data or photos. Everything happens on your device. No account, no server, no cloud.",
    "privacy.s1.h2": "1. Who we are",
    "privacy.s1.p1":
      'Sweep ("the App", "we", "our") is a photo library management app for iOS. The App is operated as an independent developer product.',
    "privacy.s1.p2":
      "If you have any questions about this Privacy Policy, contact us at: help@vantoro.studio",
    "privacy.s2.h2": "2. Data we do NOT collect",
    "privacy.s2.p1":
      "Sweep is designed from the ground up to operate entirely on your device. We do not collect, process, or transmit:",
    "privacy.s2.li1": "Your photos, videos, or any media from your library",
    "privacy.s2.li2":
      "Your name, email address, or any personally identifiable information",
    "privacy.s2.li3": "Your location data",
    "privacy.s2.li4":
      "Your usage patterns, swipe behavior, or session activity",
    "privacy.s2.li5": "Device identifiers or advertising IDs",
    "privacy.s2.li6":
      "Crash logs or analytics data (beyond what Apple collects natively via App Store)",
    "privacy.s2.p2":
      "No account or sign-up is required to use Sweep. We have no user database.",
    "privacy.s3.h2": "3. Photo library access",
    "privacy.s3.p1":
      "Sweep requests access to your photo library solely to display and manage photos within the App on your device. Your photos are never uploaded to any server, shared with any third party, or transmitted over the internet.",
    "privacy.s3.p2":
      "All processing (sorting, duplicate detection, session statistics) is performed locally on your device using on-device APIs. You can revoke photo library access at any time in iOS Settings → Privacy & Security → Photos.",
    "privacy.s4.h2": "4. Subscription and payments",
    "privacy.s4.p1":
      "Sweep may offer optional premium features through in-app purchases or subscriptions managed entirely by Apple via the App Store. We do not process, store, or have access to your payment information.",
    "privacy.s4.p2":
      "Purchase and subscription management is handled by Apple Inc. and subject to Apple's Privacy Policy. RevenueCat, our subscription management provider, may collect limited anonymous transaction data (e.g., subscription status, purchase timestamps) to manage entitlements. RevenueCat does not receive your photos or personal identity information.",
    "privacy.s5.h2": "5. Third-party services",
    "privacy.s5.p1":
      "The App does not integrate advertising SDKs, third-party analytics frameworks, or social login providers. The only external service involved in the App is:",
    "privacy.s5.li1":
      "Apple App Store / StoreKit — for in-app purchase processing",
    "privacy.s5.li2":
      "RevenueCat — for subscription entitlement management (anonymous, no personal data)",
    "privacy.s6.h2": "6. Children's privacy",
    "privacy.s6.p1":
      "Sweep is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child under 13 has provided personal information to us, please contact us immediately at help@vantoro.studio.",
    "privacy.s7.h2": "7. Changes to this policy",
    "privacy.s7.p1":
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the App after changes constitutes acceptance of the updated policy.",
    "privacy.s8.h2": "8. Contact",
    "privacy.s8.p1":
      "For any privacy-related questions or requests, contact us at: help@vantoro.studio",
    // Terms page
    "terms.page.badge": "Legal",
    "terms.page.h1": "Terms of Use",
    "terms.page.updated": "Last updated: May 27, 2025",
    "terms.s1.h2": "1. Acceptance of terms",
    "terms.s1.p1":
      'By downloading, installing, or using Sweep ("the App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, do not use the App.',
    "terms.s1.p2":
      "These Terms apply to all users of the App, including users of any free or premium features.",
    "terms.s2.h2": "2. Description of the App",
    "terms.s2.p1":
      "Sweep is a photo library management application for iOS that allows you to review, organise, and delete photos from your device. The App operates entirely on-device — no photos, videos, or personal data are uploaded to any server.",
    "terms.s3.h2": "3. Subscriptions and in-app purchases",
    "terms.s3.p1":
      "Sweep may offer optional premium features through auto-renewable subscriptions or one-time in-app purchases managed by Apple via the App Store.",
    "terms.s3.sub1":
      "Auto-renewable subscriptions automatically renew at the end of each subscription period unless cancelled at least 24 hours before the renewal date. Payment is charged to your Apple ID account at confirmation of purchase and upon each renewal.",
    "terms.s3.p2":
      "You can manage and cancel your subscription at any time in your Apple ID account settings (Settings → [your name] → Subscriptions). Cancellation takes effect at the end of the current billing period — you retain access to premium features until then.",
    "terms.s3.p3":
      "Refunds. All purchases are final and non-refundable, except as required by applicable law or as determined by Apple's refund policy. To request a refund, contact Apple Support directly at reportaproblem.apple.com.",
    "terms.s3.p4":
      "Free trials. If a free trial is offered, it will begin at the start of the subscription period. Any unused portion of a free trial is forfeited upon purchase of a subscription.",
    "terms.s3.p5":
      "Subscription prices may vary by region and are set in your local currency. Prices are inclusive of applicable taxes where required.",
    "terms.s4.h2": "4. Licence",
    "terms.s4.p1":
      "Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable licence to use the App on any Apple device you own or control, solely for your personal, non-commercial purposes.",
    "terms.s4.p2": "You may not:",
    "terms.s4.li1": "Copy, modify, or distribute the App or any part of it",
    "terms.s4.li2": "Reverse engineer, decompile, or disassemble the App",
    "terms.s4.li3": "Rent, lease, or sublicense the App",
    "terms.s4.li4": "Use the App for any unlawful purpose",
    "terms.s5.h2": "5. User responsibilities",
    "terms.s5.p1":
      "You are solely responsible for all actions taken within the App, including the deletion of photos. Sweep moves deleted photos to your iOS Recently Deleted album (standard iOS behaviour), giving you a recovery window before permanent deletion. We are not responsible for any data loss resulting from your use of the App.",
    "terms.s5.p2":
      "You are responsible for maintaining appropriate backups of your photo library before using Sweep.",
    "terms.s6.h2": "6. Intellectual property",
    "terms.s6.p1":
      "The App, including all content, features, and functionality, is owned by the developer and protected by applicable intellectual property laws. The Sweep name, logo, and related marks are proprietary. Nothing in these Terms grants you any right to use our trademarks, logos, or brand assets.",
    "terms.s7.h2": "7. Disclaimer of warranties",
    "terms.s7.p1":
      'The App is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
    "terms.s7.p2":
      "We do not warrant that the App will be uninterrupted, error-free, or free of viruses or other harmful components.",
    "terms.s8.h2": "8. Limitation of liability",
    "terms.s8.p1":
      "To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data, loss of profits, or any other losses arising from your use of or inability to use the App.",
    "terms.s8.p2":
      "Our total liability to you for any claims arising from these Terms or the App shall not exceed the amount you paid us in the twelve months preceding the claim.",
    "terms.s9.h2": "9. Privacy",
    "terms.s9.p1":
      "Your use of the App is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the App, you consent to the data practices described in the Privacy Policy.",
    "terms.s10.h2": "10. Changes to the App and Terms",
    "terms.s10.p1":
      "We reserve the right to modify or discontinue the App (or any part of it) at any time, with or without notice. We may also update these Terms from time to time. The updated Terms will be posted on this page with a revised date. Continued use of the App after changes constitutes acceptance of the updated Terms.",
    "terms.s11.h2": "11. Governing law",
    "terms.s11.p1":
      "These Terms are governed by and construed in accordance with the laws of France, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of France.",
    "terms.s12.h2": "12. Contact",
    "terms.s12.p1":
      "For any questions about these Terms, contact us at: help@vantoro.studio",
    // Vantoro Studio homepage
    "studio.badge": "Indie apps, thoughtfully made",
    "studio.title": "Vantoro",
    "studio.gradient": "Studio.",
    "studio.sub":
      "We build focused, beautiful mobile apps for iOS. Less features. More craft.",
    "studio.apps": "Our apps",
    "sweep.desc":
      "Clean your photo library with a swipe. The fastest way to declutter your camera roll.",
    "sweep.explore": "Explore →",
    "footer.studio": "© 2025 Vantoro Studio. All rights reserved.",
  },
  fr: {
    // Nav
    "nav.swipe": "Swipe",
    "nav.duplicates": "Doublons",
    "nav.album": "Albums",
    "nav.modes": "Modes",
    "nav.stats": "Stats",
    "nav.privacy": "Confidentialité",
    "nav.cta": "Télécharger",
    "nav.back": "← Retour",
    // Hero
    "hero.badge": "App iOS — Disponible maintenant",
    "hero.title.line1": "Ta photothèque,",
    "hero.title.line2": "enfin rangée.",
    "hero.sub":
      "Sweep est la façon la plus rapide de nettoyer ta photothèque. Swipe tes photos comme sur Tinder — garde ce qui compte, jette le reste.",
    // App Store badges
    "badge.ios.line1": "Disponible sur",
    "badge.ios.line2": "App Store",
    "badge.android.line1": "Bientôt sur",
    "badge.android.line2": "Google Play",
    // Stats
    "stat.fps": "60fps",
    "stat.fps.label": "Animations fluides",
    "stat.local": "100%",
    "stat.local.label": "Sur l'appareil",
    "stat.data": "0",
    "stat.data.label": "Données envoyées",
    // Marquee chips
    "chip.keep": "Swipe droite pour garder",
    "chip.delete": "Swipe gauche pour supprimer",
    "chip.dupes": "Détection intelligente des doublons",
    "chip.album": "Parcourir par album",
    "chip.fav": "Ajouter aux Favoris",
    "chip.stats": "Statistiques de session",
    "chip.local": "100% sur l'appareil",
    "chip.undo": "Annuler n'importe quel swipe",
    // Feature 1 - Swipe
    "f1.label": "Interface de swipe",
    "f1.title.line1": "Tinder pour",
    "f1.title.line2": "ta photothèque.",
    "f1.desc":
      "La façon la plus rapide de décider ce qui reste et ce qui part. Un swipe par photo — à gauche pour supprimer, à droite pour garder. Satisfaisant, instantané, addictif.",
    "f1.b1.h": "Swipe gauche — corbeille",
    "f1.b1.p":
      "Envoie les photos dans le panier de révision. Rien n'est supprimé avant confirmation.",
    "f1.b2.h": "Swipe droite — garder",
    "f1.b2.p": "Passe à la suite. Zéro friction, zéro regret.",
    "f1.b3.h": "Annuler à tout moment",
    "f1.b3.p":
      "Appuie sur annuler et ta dernière décision s'inverse instantanément.",
    // Feature 2 - More choices
    "f2.label": "Plus que deux choix",
    "f2.title.line1": "Garder, supprimer,",
    "f2.title.line2": "aimer — ou trier.",
    "f2.desc":
      "Chaque photo n'est pas un oui ou non. Mets en favori tes meilleurs clichés, ou assigne-les à des albums — sans quitter le flux de swipe.",
    "f2.b1.h": "Swipe haut — favori",
    "f2.b1.p": "Ajoute tes meilleures photos aux Favoris d'un seul geste.",
    "f2.b2.h": "Assigner à un album",
    "f2.b2.p":
      "Appuie sur le dossier pour placer la photo dans n'importe quel album — crée-en un nouveau à la volée.",
    "f2.b3.h": "Animations 60fps",
    "f2.b3.p":
      "React Native Reanimated 3 rend chaque geste natif et instantané.",
    // Feature 3 - Album
    "f3.label": "Organisation par album",
    "f3.title.line1": "Trie en swipant.",
    "f3.title.line2": "Sans étapes supplémentaires.",
    "f3.desc":
      "En révisant une photo, tu peux instantanément l'assigner à n'importe quel album existant — ou en créer un nouveau sur le moment. Organisation et nettoyage en une seule session.",
    "f3.b1.h": "Choisir un album",
    "f3.b1.p":
      "Un panel liste tous tes albums. Appuie pour assigner sans quitter le flux de swipe.",
    "f3.b2.h": "Créer un album",
    "f3.b2.p":
      'Appuie sur "Nouvel Album" pour le nommer et le créer, puis assigner immédiatement.',
    "f3.b3.h": "Ajouter aux Favoris en un tap",
    "f3.b3.p":
      'Active "Ajouter aux Favoris" depuis le panel pour tes meilleurs clichés.',
    // Feature 4 - Duplicates
    "f4.label": "Détection des doublons",
    "f4.title.line1": "Arrête les doublons",
    "f4.title.line2": "de bouffer ton stockage.",
    "f4.desc":
      "Sweep regroupe automatiquement les photos quasi-identiques, les rafales et les captures d'écran. Garde la meilleure, supprime le reste — en un seul tap.",
    "f4.b1.h": "Meilleure qualité identifiée",
    "f4.b1.p":
      "Sweep identifie la photo la plus nette de chaque groupe — confirme et passe à la suite.",
    "f4.b2.h": "Tout supprimer ou tout garder",
    "f4.b2.p":
      "Un bouton pour tout supprimer, un pour tout garder. Rapide, sans friction.",
    "f4.b3.h": "Des centaines de groupes par session",
    "f4.b3.p":
      "Rafales, clichés similaires, captures d'écran — Sweep les trouve tous et présente chaque groupe un par un.",
    // Feature 5 - Smart tools
    "f5.label": "Outils intelligents",
    "f5.title.line1": "Trois modes",
    "f5.title.line2": "pour chaque besoin.",
    "f5.desc":
      "Nettoyage rapide, recherche de doublons, ou album par album — choisis ton mode depuis l'écran d'accueil et commence en quelques secondes.",
    "f5.b1.h": "Nettoyage Rapide",
    "f5.b1.p":
      "Swipe toute ta bibliothèque en ordre chronologique. Illimité, rapide, complet.",
    "f5.b2.h": "Doublons",
    "f5.b2.p":
      "Détecte automatiquement les photos quasi-identiques, les rafales et les captures — regroupées pour une révision rapide.",
    "f5.b3.h": "Par Album",
    "f5.b3.p":
      "Cible un album spécifique — ton voyage à Paris, tes captures d'écran — sans toucher au reste.",
    // Feature 6 - Stats/Review
    "f6.label": "Résultats de session",
    "f6.title.line1": "Vois exactement",
    "f6.title.line2": "ce que tu as libéré.",
    "f6.desc":
      "Chaque session se termine par un récapitulatif complet — photos swipées, supprimées, gardées, en favoris, et mégaoctets libérés. Et avant toute suppression définitive, revois ton panier et récupère les erreurs.",
    "f6.b1.h": "Révise avant de supprimer",
    "f6.b1.p":
      "Les photos vont d'abord dans un panier de révision — fais défiler, récupère les erreurs, puis confirme. Rien n'est parti avant que tu le décides.",
    "f6.b2.h": "Stockage récupéré",
    "f6.b2.p": "MB/GB libérés exacts — pas d'estimation, pas de surprise.",
    "f6.b3.h": "Récapitulatif complet",
    "f6.b3.p":
      "Photos supprimées, gardées, en favoris, durée — le tableau complet après chaque session.",
    // Feature 7 - Privacy
    "f7.label": "Confidentialité avant tout",
    "f7.title.line1": "100% local.",
    "f7.title.line2": "Zéro serveur.",
    "f7.desc":
      "Tes photos ne quittent jamais ton téléphone. Sweep fonctionne entièrement hors ligne — pas de compte, pas d'upload, pas de cloud. Ce qui se passe sur ton appareil reste sur ton appareil.",
    "f7.b1.h": "Photos sur l'appareil",
    "f7.b1.p": "Sweep n'envoie jamais aucune photo ni métadonnée à un serveur.",
    "f7.b2.h": "Fonctionne hors ligne",
    "f7.b2.p": "Aucune connexion internet requise. Jamais.",
    "f7.b3.h": "Pas de compte requis",
    "f7.b3.p":
      "Ouvre l'app, commence à swiper. Pas d'inscription, pas de tracking.",
    // Modes
    "modes.label": "Trois modes",
    "modes.title": "Une app. Chaque photothèque.",
    "modes.sub":
      "Que tu veuilles un nettoyage express ou un grand ménage, Sweep a le mode qu'il faut.",
    "mode1.num": "Mode 01",
    "mode1.title": "Nettoyage Rapide",
    "mode1.desc":
      "Swipe toute ta bibliothèque en ordre chronologique. Photos illimitées, zéro friction. La façon la plus rapide de faire le ménage.",
    "mode2.num": "Mode 02",
    "mode2.title": "Doublons",
    "mode2.desc":
      "Sweep regroupe automatiquement les photos quasi-identiques, les rafales et les captures. Révise chaque groupe et supprime les doublons en un tap.",
    "mode3.num": "Mode 03",
    "mode3.title": "Par Album",
    "mode3.desc":
      "Cible un album à la fois — ton dernier voyage, tes captures d'écran, ton pellicule. Nettoie chirurgicalement, pas à l'aveugle.",
    // CTA
    "cta.label": "Commencer",
    "cta.title.line1": "Stop de scroller.",
    "cta.title.line2": "Commence à sweeper.",
    "cta.sub":
      "Ta photothèque t'attend. Télécharge Sweep et récupère ton espace en quelques minutes.",
    // Footer
    "footer.copy": "© 2025 Sweep. Tous droits réservés.",
    "footer.privacy": "Politique de confidentialité",
    "footer.terms": "Conditions d'utilisation",
    // Privacy page
    "privacy.page.badge": "Légal",
    "privacy.page.h1": "Politique de confidentialité",
    "privacy.page.updated": "Dernière mise à jour : 27 mai 2025",
    "privacy.tldr":
      "Sweep ne collecte, ne stocke ni ne transmet aucune de tes données personnelles ou photos. Tout se passe sur ton appareil. Pas de compte, pas de serveur, pas de cloud.",
    "privacy.s1.h2": "1. Qui sommes-nous",
    "privacy.s1.p1":
      "Sweep est une application de gestion de photothèque pour iOS. L'application est opérée en tant que produit développeur indépendant.",
    "privacy.s1.p2":
      "Pour toute question sur cette politique, contact : help@vantoro.studio",
    "privacy.s2.h2": "2. Données que nous NE collectons PAS",
    "privacy.s2.p1":
      "Sweep est conçu pour fonctionner entièrement sur ton appareil. Nous ne collectons, traitons ni transmettons :",
    "privacy.s2.li1": "Tes photos, vidéos ou tout autre média",
    "privacy.s2.li2": "Ton nom, adresse email ou toute information personnelle",
    "privacy.s2.li3": "Tes données de localisation",
    "privacy.s2.li4": "Tes habitudes d'utilisation ou activité de session",
    "privacy.s2.li5": "Les identifiants de l'appareil",
    "privacy.s2.li6":
      "Les journaux de crash (au-delà de ce qu'Apple collecte via l'App Store)",
    "privacy.s2.p2":
      "Aucun compte n'est requis pour utiliser Sweep. Nous n'avons pas de base de données utilisateurs.",
    "privacy.s3.h2": "3. Accès à la photothèque",
    "privacy.s3.p1":
      "Sweep demande l'accès à ta photothèque uniquement pour afficher et gérer les photos sur ton appareil. Tes photos ne sont jamais uploadées sur un serveur, partagées avec des tiers, ni transmises sur internet.",
    "privacy.s3.p2":
      "Tout le traitement est effectué localement sur ton appareil. Tu peux révoquer l'accès à la photothèque à tout moment dans Réglages iOS → Confidentialité & sécurité → Photos.",
    "privacy.s4.h2": "4. Abonnements et paiements",
    "privacy.s4.p1":
      "Sweep peut proposer des fonctionnalités premium via des achats intégrés gérés par Apple. Nous n'avons pas accès à tes informations de paiement.",
    "privacy.s4.p2":
      "RevenueCat, notre prestataire de gestion d'abonnements, peut collecter des données de transaction anonymes limitées pour gérer les droits. RevenueCat ne reçoit pas tes photos ni tes données personnelles.",
    "privacy.s5.h2": "5. Services tiers",
    "privacy.s5.p1":
      "L'application n'intègre pas de SDK publicitaires, de frameworks analytiques tiers. Les seuls services externes impliqués sont :",
    "privacy.s5.li1": "Apple App Store / StoreKit — pour les achats intégrés",
    "privacy.s5.li2":
      "RevenueCat — pour la gestion des droits d'abonnement (anonyme, sans données personnelles)",
    "privacy.s6.h2": "6. Confidentialité des enfants",
    "privacy.s6.p1":
      "Sweep ne s'adresse pas aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants. Si tu penses qu'un enfant de moins de 13 ans nous a fourni des informations, contacte-nous immédiatement à help@vantoro.studio.",
    "privacy.s7.h2": "7. Modifications",
    "privacy.s7.p1":
      "Nous pouvons mettre à jour cette politique. Les modifications seront publiées sur cette page.",
    "privacy.s8.h2": "8. Contact",
    "privacy.s8.p1":
      "Pour toute question relative à la confidentialité, contacte-nous : help@vantoro.studio",
    // Terms page
    "terms.page.badge": "Légal",
    "terms.page.h1": "Conditions d'utilisation",
    "terms.page.updated": "Dernière mise à jour : 27 mai 2025",
    "terms.s1.h2": "1. Acceptation des conditions",
    "terms.s1.p1":
      "En téléchargeant, installant ou utilisant Sweep, tu acceptes ces Conditions d'utilisation. Si tu n'es pas d'accord, n'utilise pas l'application.",
    "terms.s1.p2":
      "Ces Conditions s'appliquent à tous les utilisateurs de l'application, y compris les utilisateurs des fonctionnalités gratuites ou premium.",
    "terms.s2.h2": "2. Description de l'application",
    "terms.s2.p1":
      "Sweep est une application de gestion de photothèque iOS qui te permet de réviser, organiser et supprimer des photos sur ton appareil. L'application fonctionne entièrement sur l'appareil — aucune photo ni donnée personnelle n'est uploadée sur un serveur.",
    "terms.s3.h2": "3. Abonnements et achats intégrés",
    "terms.s3.p1":
      "Sweep peut proposer des fonctionnalités premium via des abonnements à renouvellement automatique ou des achats intégrés gérés par Apple via l'App Store.",
    "terms.s3.sub1":
      "Les abonnements à renouvellement automatique se renouvellent automatiquement à la fin de chaque période sauf annulation au moins 24 heures avant la date de renouvellement.",
    "terms.s3.p2":
      "Tu peux gérer et annuler ton abonnement dans les réglages de ton identifiant Apple. L'annulation prend effet à la fin de la période de facturation en cours.",
    "terms.s3.p3":
      "Remboursements. Tous les achats sont définitifs et non remboursables, sauf disposition légale contraire. Pour demander un remboursement, contacte le support Apple sur reportaproblem.apple.com.",
    "terms.s3.p4":
      "Essais gratuits. Si un essai gratuit est proposé, il débutera au début de la période d'abonnement.",
    "terms.s3.p5":
      "Les prix des abonnements peuvent varier selon la région et sont fixés dans ta devise locale.",
    "terms.s4.h2": "4. Licence",
    "terms.s4.p1":
      "Nous t'accordons une licence limitée, non exclusive, non transférable et révocable d'utiliser l'application sur tout appareil Apple que tu possèdes, uniquement à des fins personnelles et non commerciales.",
    "terms.s4.p2": "Tu ne peux pas :",
    "terms.s4.li1":
      "Copier, modifier ou distribuer l'application ou une partie de celle-ci",
    "terms.s4.li2":
      "Faire de la rétro-ingénierie, décompiler ou désassembler l'application",
    "terms.s4.li3": "Louer, crédit-bailler ou sous-licencier l'application",
    "terms.s4.li4": "Utiliser l'application à des fins illégales",
    "terms.s5.h2": "5. Responsabilités de l'utilisateur",
    "terms.s5.p1":
      "Tu es seul responsable de toutes les actions effectuées dans l'application, y compris la suppression de photos. Sweep déplace les photos supprimées dans l'album \"Récemment supprimés\" d'iOS.",
    "terms.s5.p2":
      "Tu es responsable de maintenir des sauvegardes appropriées de ta photothèque avant d'utiliser Sweep.",
    "terms.s6.h2": "6. Propriété intellectuelle",
    "terms.s6.p1":
      "L'application est la propriété du développeur et protégée par les lois applicables. Le nom Sweep, le logo et les marques associées sont propriétaires.",
    "terms.s7.h2": "7. Exclusion de garanties",
    "terms.s7.p1":
      'L\'application est fournie "telle quelle" et "telle que disponible" sans garanties d\'aucune sorte.',
    "terms.s7.p2":
      "Nous ne garantissons pas que l'application sera ininterrompue, sans erreur ou exempte de virus.",
    "terms.s8.h2": "8. Limitation de responsabilité",
    "terms.s8.p1":
      "Dans la mesure maximale permise par la loi applicable, nous ne serons pas responsables des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs.",
    "terms.s8.p2":
      "Notre responsabilité totale envers toi ne dépassera pas le montant que tu nous as payé au cours des douze mois précédant la réclamation.",
    "terms.s9.h2": "9. Confidentialité",
    "terms.s9.p1":
      "Ton utilisation est également régie par notre Politique de confidentialité, incorporée par référence à ces Conditions.",
    "terms.s10.h2": "10. Modifications",
    "terms.s10.p1":
      "Nous nous réservons le droit de modifier ou d'interrompre l'application à tout moment. L'utilisation continue de l'application après les modifications vaut acceptation.",
    "terms.s11.h2": "11. Droit applicable",
    "terms.s11.p1":
      "Ces conditions sont régies par le droit français. Tout litige sera soumis à la juridiction exclusive des tribunaux français.",
    "terms.s12.h2": "12. Contact",
    "terms.s12.p1":
      "Pour toute question sur ces Conditions, contacte-nous : help@vantoro.studio",
    // Vantoro Studio homepage
    "studio.badge": "Apps indépendantes, faites avec soin",
    "studio.title": "Vantoro",
    "studio.gradient": "Studio.",
    "studio.sub":
      "On crée des apps mobiles iOS focalisées et soignées. Moins de fonctionnalités. Plus de qualité.",
    "studio.apps": "Nos apps",
    "sweep.desc":
      "Nettoie ta photothèque en un swipe. La façon la plus rapide de désencombrer ta bibliothèque.",
    "sweep.explore": "Explorer →",
    "footer.studio": "© 2025 Vantoro Studio. Tous droits réservés.",
  },
};
