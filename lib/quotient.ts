import type { Lang } from "./translations";

/** Copy for the Quotient pages (product, support, privacy, terms). */
export const quotient: Record<Lang, Record<string, string>> = {
  en: {
    // Chrome
    "q.name": "Quotient",
    "q.back": "Back to Quotient",
    "q.nav": "Quotient",

    // Product page
    "q.title.1": "Your screen time,",
    "q.title.2": "as a percentage.",
    "q.sub":
      "Set a daily limit. Quotient shows how much of it you have used, in the app, on your home screen and on your lock screen.",
    "q.cta": "Questions? Support",
    "q.home.desc":
      "Your screen time as a percentage of the daily limit you set. In the app, on your home screen, on your lock screen. Nothing leaves your iPhone.",
    "q.home.link": "Discover Quotient",
    "q.alt.app": "Quotient showing 63% of a 2 hour daily limit",
    "q.alt.home": "Quotient widgets on the iPhone home screen",
    "q.alt.lock": "Quotient widget on the iPhone lock screen",
    "q.alt.history": "Quotient history chart over 7 days",

    "q.f1.title": "One number that means something",
    "q.f1.desc":
      "100% is your daily limit, whatever it is. 63% tells you more at a glance than 1h15, and it still shows the minutes left.",
    "q.f1.p1": "Daily limit from 1 hour to as long as you like, changed in a tap.",
    "q.f1.p2": "A segmented bar that fills up through the day.",
    "q.f1.p3": "Resets at midnight, no setup to repeat.",

    "q.f2.title": "Widgets that look good",
    "q.f2.desc":
      "Small and medium widgets for the home screen, circular and inline widgets for the lock screen. Pick the one you like, or all of them.",
    "q.f2.p1": "Color mode turns the bar from green to red as you get close to the limit.",
    "q.f2.p2": "A refresh button redraws the widget right away.",
    "q.f2.p3": "Lock screen widgets follow iOS: monochrome.",

    "q.f3.title": "A nudge before the limit",
    "q.f3.desc":
      "Get a notification at 50%, 75%, 90% and 100% of your limit. Pick as many as you like. They arrive even when the app is closed.",
    "q.f3.p1": "One notification per threshold and per day.",
    "q.f3.p2": "History over 7 or 30 days, with the average and the days under your limit.",
    "q.f3.p3": "Your most used apps of the day.",

    "q.private.title": "It stays on your iPhone",
    "q.private.desc":
      "Quotient reads your screen time through Apple's Screen Time framework and computes the percentage on the device. No account, no server, no ads, no analytics. Nothing leaves your iPhone.",
    "q.private.p1": "No account",
    "q.private.p2": "No data collected",
    "q.private.p3": "One-time purchase, no subscription",

    "q.facts.title": "Good to know",
    "q.facts.1": "Works on iPhone with iOS 17 or later.",
    "q.facts.2": "Available in English, French, German, Spanish, Italian and Portuguese.",
    "q.facts.3":
      "iOS asks you to allow Screen Time access the first time (with your passcode or Face ID). Without it, Quotient cannot read your usage.",
    "q.facts.4":
      "Widgets are redrawn by iOS, which limits how often it does so. The app shows the exact time of the last update.",

    // Support
    "q.support.h1": "Quotient Support",
    "q.support.sub": "Need help with Quotient? You're in the right place.",
    "q.support.contact.h2": "Contact us",
    "q.support.contact.p1":
      "The fastest way to reach us is by email. We usually reply within 48 hours.",
    "q.support.contact.p2":
      "To help us answer faster, include your iOS version, your iPhone model and a short description of the problem (screenshots are welcome).",
    "q.support.faq.h2": "Frequently asked questions",
    "q.support.faq.q1": "Why does Quotient ask for Screen Time access?",
    "q.support.faq.a1":
      "It is the only way for an app to read your screen time on iOS. The access is used to compute your percentage on your device. Nothing is sent anywhere. You can remove it at any time in Settings → Screen Time.",
    "q.support.faq.q2": "The widget shows no data or an old time.",
    "q.support.faq.a2":
      "Open the app once and make sure Screen Time is allowed and that you chose the tracked apps (select all categories). iOS redraws widgets on its own schedule, so the widget can lag a little. Tap the refresh button on a home screen widget, or open the app, to redraw it.",
    "q.support.faq.q3": "The percentage on the widget is not the same as in the app.",
    "q.support.faq.a3":
      "The line « Updated at … » in the app and on the widgets tells you the time of the last data point. If they differ, the widget has not been redrawn yet. iOS limits how many times a widget can be redrawn per day.",
    "q.support.faq.q4": "I don't receive notifications.",
    "q.support.faq.a4":
      "Check that notifications are allowed for Quotient in Settings → Notifications, and that at least one threshold is selected in the app. A threshold already reached when you select it does not notify.",
    "q.support.faq.q5": "How do I get a refund?",
    "q.support.faq.a5":
      "Refunds are handled by Apple. Visit reportaproblem.apple.com, sign in and select the purchase you want to report.",
    "q.support.faq.q6": "Does it work on iPad or Apple Watch?",
    "q.support.faq.a6":
      "Not yet. Quotient is made for iPhone with iOS 17 or later.",
    "q.support.legal.h2": "Legal",

    // Privacy
    "q.privacy.h1": "Privacy Policy",
    "q.privacy.updated": "Last updated: November 4, 2026",
    "q.privacy.tldr":
      "Quotient does not collect, store, or transmit any of your personal data. Your screen time is read and computed on your iPhone. No account, no server, no cloud.",
    "q.privacy.s1.h2": "1. Who we are",
    "q.privacy.s1.p1":
      'Quotient ("the App", "we", "our") is a screen time app for iPhone published by Vantoro Studio, operated by Kévin Bourdouleix, sole proprietor (entrepreneur individuel), France — SIREN 912714128.',
    "q.privacy.s1.p2":
      "If you have any questions about this Privacy Policy, contact us at: help@vantoro.studio",
    "q.privacy.s2.h2": "2. Data we do NOT collect",
    "q.privacy.s2.p1":
      "Quotient is designed to operate entirely on your device. We do not collect, process, or transmit:",
    "q.privacy.s2.li1": "Your screen time, the apps you use or how long you use them",
    "q.privacy.s2.li2":
      "Your name, email address, or any personally identifiable information",
    "q.privacy.s2.li3": "Your location data",
    "q.privacy.s2.li4": "Device identifiers or advertising IDs",
    "q.privacy.s2.li5": "Crash logs or analytics data (beyond what Apple collects natively via the App Store)",
    "q.privacy.s2.p2":
      "No account or sign-up is required to use Quotient. We have no user database and the App does not connect to any server of ours.",
    "q.privacy.s3.h2": "3. Screen Time access",
    "q.privacy.s3.p1":
      "Quotient uses Apple's Screen Time framework (Family Controls and Device Activity) to read how long you use your iPhone today and to compute the percentage of your daily limit. This requires your authorization, which iOS asks for the first time you open the App.",
    "q.privacy.s3.p2":
      "The figures are processed on your iPhone only. They are shared between the App, its widgets and its extensions through an App Group, a storage area that stays on your device. They are never uploaded, shared with a third party, or transmitted over the internet. You can withdraw the authorization at any time in Settings → Screen Time. Deleting the App deletes this data.",
    "q.privacy.s4.h2": "4. Notifications",
    "q.privacy.s4.p1":
      "If you turn on threshold notifications, they are generated on your iPhone (local notifications). No push server is involved and no token is sent to us.",
    "q.privacy.s5.h2": "5. Purchase",
    "q.privacy.s5.p1":
      "Quotient is a paid app, bought once on the App Store. The payment is handled entirely by Apple. We do not process, store, or have access to your payment information, and we do not receive your name or email address.",
    "q.privacy.s6.h2": "6. Third-party services",
    "q.privacy.s6.p1":
      "The App does not integrate advertising SDKs, third-party analytics frameworks, or social login providers. The only external service involved is the Apple App Store, for the purchase.",
    "q.privacy.s7.h2": "7. Children's privacy",
    "q.privacy.s7.p1":
      "Quotient is not directed at children under 13. We do not collect personal information from anyone, children included. If you have a question about this, contact us at help@vantoro.studio.",
    "q.privacy.s8.h2": "8. Your rights",
    "q.privacy.s8.p1":
      "Since we do not collect any personal data, we hold nothing about you to access, correct or delete. If you are in the European Union, you can still contact us at help@vantoro.studio about any question regarding your rights under the GDPR.",
    "q.privacy.s9.h2": "9. Changes to this policy",
    "q.privacy.s9.p1":
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.",
    "q.privacy.s10.h2": "10. Contact",
    "q.privacy.s10.p1":
      "For any privacy-related questions or requests, contact us at: help@vantoro.studio",

    // Terms
    "q.terms.h1": "Terms of Use",
    "q.terms.updated": "Last updated: November 4, 2026",
    "q.terms.s1.h2": "1. Acceptance of terms",
    "q.terms.s1.p1":
      'By downloading, installing, or using Quotient ("the App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, do not use the App.',
    "q.terms.s1.p2":
      "You must be at least 13 years old to use the App. If you are under the age of majority in your country, you confirm that a parent or guardian has agreed to these Terms on your behalf.",
    "q.terms.s2.h2": "2. Description of the App",
    "q.terms.s2.p1":
      "Quotient is an iPhone app that shows your screen time as a percentage of a daily limit that you set, in the App and in widgets. The App operates entirely on your device. No screen time data or personal data is uploaded to any server.",
    "q.terms.s2.p2":
      "The figures come from Apple's Screen Time framework. They depend on what iOS reports, and widgets are redrawn by iOS on its own schedule, so they may lag or differ slightly from what Settings shows. The App is an indicator, not a medical, parental-control or security tool.",
    "q.terms.s3.h2": "3. Purchase",
    "q.terms.s3.p1":
      "Quotient is sold as a paid app, for a one-time price shown on the App Store before you buy. There is no subscription and no in-app purchase. Prices may vary by region and are set in your local currency.",
    "q.terms.s3.p2":
      "Refunds. Purchases are handled by Apple. Refunds are granted according to Apple's refund policy and applicable law. To request a refund, contact Apple directly at reportaproblem.apple.com. If you are a consumer in the European Union, you may have a legal right of withdrawal, to the extent permitted by law.",
    "q.terms.s4.h2": "4. Licence",
    "q.terms.s4.p1":
      "Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable licence to use the App on any Apple device you own or control, solely for your personal, non-commercial purposes.",
    "q.terms.s4.p2": "You may not:",
    "q.terms.s4.li1": "Copy, modify, or distribute the App or any part of it",
    "q.terms.s4.li2": "Reverse engineer, decompile, or disassemble the App",
    "q.terms.s4.li3": "Rent, lease, or sublicense the App",
    "q.terms.s4.li4": "Use the App for any unlawful purpose",
    "q.terms.s5.h2": "5. Intellectual property",
    "q.terms.s5.p1":
      "The App, including all content, features, and functionality, is owned by the developer and protected by applicable intellectual property laws. The Quotient name, logo, and related marks are proprietary. Nothing in these Terms grants you any right to use our trademarks, logos, or brand assets.",
    "q.terms.s6.h2": "6. Disclaimer of warranties",
    "q.terms.s6.p1":
      'The App is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
    "q.terms.s6.p2":
      "We do not warrant that the App will be uninterrupted or error-free, or that the figures it shows will be exact at every moment. Nothing in these Terms excludes or limits any warranty or right that cannot be excluded under applicable consumer protection law, including the legal guarantee of conformity under French and EU law.",
    "q.terms.s7.h2": "7. Limitation of liability",
    "q.terms.s7.p1":
      "To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the App.",
    "q.terms.s7.p2":
      "Our total liability to you for any claims arising from these Terms or the App shall not exceed the amount you paid for the App. Nothing in these Terms limits liability for death or personal injury, fraud, gross negligence or wilful misconduct, or any other liability that cannot be limited by law.",
    "q.terms.s8.h2": "8. Privacy",
    "q.terms.s8.p1":
      "Your use of the App is also governed by our {privacy}, which is incorporated into these Terms by reference.",
    "q.terms.s8.link": "Privacy Policy",
    "q.terms.s9.h2": "9. Changes to the App and Terms",
    "q.terms.s9.p1":
      "We reserve the right to modify or discontinue the App (or any part of it) at any time. We may also update these Terms from time to time. The updated Terms will be posted on this page with a revised date. Continued use of the App after changes constitutes acceptance of the updated Terms.",
    "q.terms.s10.h2": "10. Apple App Store terms",
    "q.terms.s10.p1":
      'These Terms are between you and Vantoro Studio only, and not with Apple Inc. ("Apple"). Vantoro Studio, not Apple, is solely responsible for the App and its content.',
    "q.terms.s10.p2":
      'Your use of the App is also subject to Apple\'s Licensed Application End User License Agreement (the "Apple EULA"), available at apple.com/legal/internet-services/itunes/dev/stdeula. If these Terms conflict with the Apple EULA, the Apple EULA prevails to the extent of the conflict.',
    "q.terms.s10.p3":
      "Apple has no obligation to provide any maintenance or support services for the App. Support is provided by us through the Support page of this website.",
    "q.terms.s10.p4":
      "If the App fails to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price. To the maximum extent permitted by law, Apple has no other warranty obligation with respect to the App. As between you and us, we are responsible for any claims relating to the App, including product liability claims, claims that the App fails to comply with a legal or regulatory requirement, consumer protection claims, and intellectual property infringement claims.",
    "q.terms.s10.p5":
      "Apple and its subsidiaries are third-party beneficiaries of these Terms. Once you accept these Terms, Apple has the right to enforce them against you as a third-party beneficiary. You confirm that you are not located in a country subject to a U.S. Government embargo or designated as a \"terrorist supporting\" country, and that you are not on any U.S. Government list of prohibited or restricted parties.",
    "q.terms.s11.h2": "11. Governing law",
    "q.terms.s11.p1":
      "These Terms are governed by and construed in accordance with the laws of France, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of France. If you are a consumer, this does not deprive you of the mandatory consumer protection provisions of your country of residence, and you may also bring a claim before the courts of your country of residence. Before going to court, we encourage you to contact us so we can try to resolve the issue amicably.",
    "q.terms.s12.h2": "12. Contact",
    "q.terms.s12.p1":
      "For any questions about these Terms, contact us at: help@vantoro.studio",
    "q.terms.s12.p2":
      "Quotient is published by Vantoro Studio, operated by Kévin Bourdouleix, sole proprietor (entrepreneur individuel), France — SIREN 912714128.",
  },

  fr: {
    "q.name": "Quotient",
    "q.back": "Retour à Quotient",
    "q.nav": "Quotient",

    "q.title.1": "Ton temps d'écran,",
    "q.title.2": "en pourcentage.",
    "q.sub":
      "Fixe une limite quotidienne. Quotient te montre la part déjà utilisée, dans l'app, sur ton écran d'accueil et sur ton écran verrouillé.",
    "q.cta": "Une question ? Assistance",
    "q.home.desc":
      "Ton temps d'écran en pourcentage de la limite quotidienne que tu fixes. Dans l'app, sur ton écran d'accueil, sur ton écran verrouillé. Rien ne quitte ton iPhone.",
    "q.home.link": "Découvrir Quotient",
    "q.alt.app": "Quotient affichant 63 % d'une limite quotidienne de 2 heures",
    "q.alt.home": "Widgets Quotient sur l'écran d'accueil de l'iPhone",
    "q.alt.lock": "Widget Quotient sur l'écran verrouillé de l'iPhone",
    "q.alt.history": "Historique Quotient sur 7 jours",

    "q.f1.title": "Un chiffre qui veut dire quelque chose",
    "q.f1.desc":
      "100 %, c'est ta limite quotidienne, quelle qu'elle soit. 63 % en dit plus d'un coup d'œil que 1h15, et le temps restant reste affiché.",
    "q.f1.p1": "Limite quotidienne de 1 heure à ce que tu veux, réglée en un appui.",
    "q.f1.p2": "Une barre segmentée qui se remplit au fil de la journée.",
    "q.f1.p3": "Remise à zéro à minuit, rien à refaire.",

    "q.f2.title": "Des widgets soignés",
    "q.f2.desc":
      "Widgets petit et moyen pour l'écran d'accueil, widgets rond et en ligne pour l'écran verrouillé. Choisis celui que tu préfères, ou tous.",
    "q.f2.p1": "Le mode couleur fait passer la barre du vert au rouge à l'approche de la limite.",
    "q.f2.p2": "Un bouton d'actualisation redessine le widget tout de suite.",
    "q.f2.p3": "Les widgets d'écran verrouillé suivent iOS : monochromes.",

    "q.f3.title": "Un coup de coude avant la limite",
    "q.f3.desc":
      "Reçois une notification à 50 %, 75 %, 90 % et 100 % de ta limite. Choisis-en autant que tu veux. Elles arrivent même app fermée.",
    "q.f3.p1": "Une notification par seuil et par jour.",
    "q.f3.p2": "Historique sur 7 ou 30 jours, avec la moyenne et les jours sous ta limite.",
    "q.f3.p3": "Tes apps les plus utilisées du jour.",

    "q.private.title": "Tout reste sur ton iPhone",
    "q.private.desc":
      "Quotient lit ton temps d'écran via le framework Temps d'écran d'Apple et calcule le pourcentage sur l'appareil. Pas de compte, pas de serveur, pas de pub, pas d'analytics. Rien ne quitte ton iPhone.",
    "q.private.p1": "Aucun compte",
    "q.private.p2": "Aucune donnée collectée",
    "q.private.p3": "Achat unique, sans abonnement",

    "q.facts.title": "Bon à savoir",
    "q.facts.1": "Fonctionne sur iPhone avec iOS 17 ou plus récent.",
    "q.facts.2": "Disponible en français, anglais, allemand, espagnol, italien et portugais.",
    "q.facts.3":
      "iOS te demande d'autoriser l'accès à Temps d'écran la première fois (avec ton code ou Face ID). Sans cela, Quotient ne peut pas lire ton usage.",
    "q.facts.4":
      "Les widgets sont redessinés par iOS, qui limite la fréquence. L'app affiche l'heure exacte de la dernière mise à jour.",

    "q.support.h1": "Assistance Quotient",
    "q.support.sub": "Besoin d'aide avec Quotient ? Tu es au bon endroit.",
    "q.support.contact.h2": "Nous contacter",
    "q.support.contact.p1":
      "Le plus rapide est de nous écrire par email. Nous répondons généralement sous 48 heures.",
    "q.support.contact.p2":
      "Pour répondre plus vite, indique ta version d'iOS, ton modèle d'iPhone et une courte description du problème (les captures d'écran sont bienvenues).",
    "q.support.faq.h2": "Questions fréquentes",
    "q.support.faq.q1": "Pourquoi Quotient demande l'accès à Temps d'écran ?",
    "q.support.faq.a1":
      "C'est le seul moyen pour une app de lire ton temps d'écran sur iOS. L'accès sert à calculer ton pourcentage sur ton appareil. Rien n'est envoyé nulle part. Tu peux le retirer à tout moment dans Réglages → Temps d'écran.",
    "q.support.faq.q2": "Le widget n'affiche rien ou une heure ancienne.",
    "q.support.faq.a2":
      "Ouvre l'app une fois et vérifie que Temps d'écran est autorisé et que tu as choisi les apps suivies (sélectionne toutes les catégories). iOS redessine les widgets à son rythme, le widget peut donc avoir un peu de retard. Appuie sur le bouton d'actualisation d'un widget d'accueil, ou ouvre l'app, pour le redessiner.",
    "q.support.faq.q3": "Le pourcentage du widget n'est pas le même que dans l'app.",
    "q.support.faq.a3":
      "La ligne « Mis à jour à … » dans l'app et sur les widgets indique l'heure du dernier point de donnée. Si elles diffèrent, le widget n'a pas encore été redessiné. iOS limite le nombre de redessins d'un widget par jour.",
    "q.support.faq.q4": "Je ne reçois pas de notifications.",
    "q.support.faq.a4":
      "Vérifie que les notifications sont autorisées pour Quotient dans Réglages → Notifications, et qu'au moins un seuil est sélectionné dans l'app. Un seuil déjà atteint au moment où tu le sélectionnes ne notifie pas.",
    "q.support.faq.q5": "Comment obtenir un remboursement ?",
    "q.support.faq.a5":
      "Les remboursements sont gérés par Apple. Rends-toi sur reportaproblem.apple.com, connecte-toi et sélectionne l'achat concerné.",
    "q.support.faq.q6": "Ça marche sur iPad ou Apple Watch ?",
    "q.support.faq.a6":
      "Pas encore. Quotient est conçu pour l'iPhone avec iOS 17 ou plus récent.",
    "q.support.legal.h2": "Mentions légales",

    "q.privacy.h1": "Politique de confidentialité",
    "q.privacy.updated": "Dernière mise à jour : 4 novembre 2026",
    "q.privacy.tldr":
      "Quotient ne collecte, ne stocke et ne transmet aucune de tes données personnelles. Ton temps d'écran est lu et calculé sur ton iPhone. Pas de compte, pas de serveur, pas de cloud.",
    "q.privacy.s1.h2": "1. Qui sommes-nous",
    "q.privacy.s1.p1":
      "Quotient (« l'application », « nous ») est une application de temps d'écran pour iPhone, éditée par Vantoro Studio, exploitée par Kévin Bourdouleix, entrepreneur individuel, France — SIREN 912714128.",
    "q.privacy.s1.p2":
      "Pour toute question sur cette Politique de confidentialité, écris-nous : help@vantoro.studio",
    "q.privacy.s2.h2": "2. Données que nous ne collectons PAS",
    "q.privacy.s2.p1":
      "Quotient est conçu pour fonctionner entièrement sur ton appareil. Nous ne collectons, ne traitons et ne transmettons pas :",
    "q.privacy.s2.li1": "Ton temps d'écran, les apps que tu utilises ni la durée d'utilisation",
    "q.privacy.s2.li2":
      "Ton nom, ton adresse email ou toute information permettant de t'identifier",
    "q.privacy.s2.li3": "Ta localisation",
    "q.privacy.s2.li4": "Des identifiants d'appareil ou publicitaires",
    "q.privacy.s2.li5": "Des journaux de plantage ou des données d'analyse (hors ce qu'Apple collecte nativement via l'App Store)",
    "q.privacy.s2.p2":
      "Aucun compte ni inscription n'est nécessaire pour utiliser Quotient. Nous n'avons pas de base d'utilisateurs et l'application ne se connecte à aucun de nos serveurs.",
    "q.privacy.s3.h2": "3. Accès à Temps d'écran",
    "q.privacy.s3.p1":
      "Quotient utilise le framework Temps d'écran d'Apple (Family Controls et Device Activity) pour lire la durée d'utilisation de ton iPhone aujourd'hui et calculer le pourcentage de ta limite quotidienne. Cela nécessite ton autorisation, qu'iOS demande à la première ouverture.",
    "q.privacy.s3.p2":
      "Ces chiffres sont traités uniquement sur ton iPhone. Ils sont partagés entre l'application, ses widgets et ses extensions via un App Group, un espace de stockage qui reste sur ton appareil. Ils ne sont jamais envoyés, partagés avec un tiers ni transmis par internet. Tu peux retirer l'autorisation à tout moment dans Réglages → Temps d'écran. Supprimer l'application supprime ces données.",
    "q.privacy.s4.h2": "4. Notifications",
    "q.privacy.s4.p1":
      "Si tu actives les notifications de seuil, elles sont générées sur ton iPhone (notifications locales). Aucun serveur de notifications push n'intervient et aucun jeton ne nous est envoyé.",
    "q.privacy.s5.h2": "5. Achat",
    "q.privacy.s5.p1":
      "Quotient est une application payante, achetée une fois sur l'App Store. Le paiement est entièrement géré par Apple. Nous ne traitons ni ne stockons tes informations de paiement et n'y avons pas accès, et nous ne recevons ni ton nom ni ton email.",
    "q.privacy.s6.h2": "6. Services tiers",
    "q.privacy.s6.p1":
      "L'application n'intègre aucun SDK publicitaire, aucun outil d'analyse tiers ni connexion via un réseau social. Le seul service externe concerné est l'App Store d'Apple, pour l'achat.",
    "q.privacy.s7.h2": "7. Enfants",
    "q.privacy.s7.p1":
      "Quotient ne s'adresse pas aux enfants de moins de 13 ans. Nous ne collectons de données personnelles de personne, enfants compris. Pour toute question, écris-nous à help@vantoro.studio.",
    "q.privacy.s8.h2": "8. Tes droits",
    "q.privacy.s8.p1":
      "Comme nous ne collectons aucune donnée personnelle, nous ne détenons rien sur toi que tu puisses consulter, corriger ou supprimer. Si tu es dans l'Union européenne, tu peux quand même nous écrire à help@vantoro.studio pour toute question sur tes droits au titre du RGPD.",
    "q.privacy.s9.h2": "9. Modifications de cette politique",
    "q.privacy.s9.p1":
      "Nous pouvons mettre à jour cette Politique de confidentialité. Les changements seront publiés sur cette page avec une date mise à jour.",
    "q.privacy.s10.h2": "10. Contact",
    "q.privacy.s10.p1":
      "Pour toute question ou demande relative à la confidentialité, écris-nous : help@vantoro.studio",

    "q.terms.h1": "Conditions d'utilisation",
    "q.terms.updated": "Dernière mise à jour : 4 novembre 2026",
    "q.terms.s1.h2": "1. Acceptation des conditions",
    "q.terms.s1.p1":
      "En téléchargeant, installant ou utilisant Quotient (« l'application »), tu acceptes ces Conditions d'utilisation (« Conditions »). Si tu n'es pas d'accord, n'utilise pas l'application.",
    "q.terms.s1.p2":
      "Tu dois avoir au moins 13 ans pour utiliser l'application. Si tu n'as pas atteint l'âge de la majorité dans ton pays, tu confirmes qu'un parent ou un représentant légal a accepté ces Conditions en ton nom.",
    "q.terms.s2.h2": "2. Description de l'application",
    "q.terms.s2.p1":
      "Quotient est une application iPhone qui affiche ton temps d'écran en pourcentage d'une limite quotidienne que tu fixes, dans l'application et dans des widgets. L'application fonctionne entièrement sur ton appareil. Aucune donnée de temps d'écran ni donnée personnelle n'est envoyée à un serveur.",
    "q.terms.s2.p2":
      "Les chiffres proviennent du framework Temps d'écran d'Apple. Ils dépendent de ce que rapporte iOS, et les widgets sont redessinés par iOS à son rythme : ils peuvent avoir du retard ou différer légèrement de ce qu'affichent les Réglages. L'application est un indicateur, pas un outil médical, de contrôle parental ou de sécurité.",
    "q.terms.s3.h2": "3. Achat",
    "q.terms.s3.p1":
      "Quotient est vendue comme application payante, pour un prix unique affiché sur l'App Store avant l'achat. Il n'y a ni abonnement ni achat intégré. Les prix peuvent varier selon la région et sont exprimés dans ta devise locale.",
    "q.terms.s3.p2":
      "Remboursements. Les achats sont gérés par Apple. Les remboursements sont accordés selon la politique d'Apple et la loi applicable. Pour en demander un, contacte directement Apple sur reportaproblem.apple.com. Si tu es consommateur dans l'Union européenne, tu peux disposer d'un droit légal de rétractation, dans la mesure permise par la loi.",
    "q.terms.s4.h2": "4. Licence",
    "q.terms.s4.p1":
      "Sous réserve du respect de ces Conditions, nous t'accordons une licence limitée, non exclusive, non transférable et révocable pour utiliser l'application sur tout appareil Apple que tu possèdes ou contrôles, à des fins strictement personnelles et non commerciales.",
    "q.terms.s4.p2": "Tu ne peux pas :",
    "q.terms.s4.li1": "Copier, modifier ou distribuer l'application ou une partie de celle-ci",
    "q.terms.s4.li2": "Faire de l'ingénierie inverse, décompiler ou désassembler l'application",
    "q.terms.s4.li3": "Louer, prêter ou sous-licencier l'application",
    "q.terms.s4.li4": "Utiliser l'application à des fins illégales",
    "q.terms.s5.h2": "5. Propriété intellectuelle",
    "q.terms.s5.p1":
      "L'application, y compris tous ses contenus, fonctionnalités et services, appartient à son éditeur et est protégée par les lois sur la propriété intellectuelle. Le nom Quotient, son logo et les marques associées sont protégés. Rien dans ces Conditions ne te donne le droit d'utiliser nos marques, logos ou éléments de marque.",
    "q.terms.s6.h2": "6. Exclusion de garanties",
    "q.terms.s6.p1":
      "L'application est fournie « en l'état » et « selon disponibilité », sans garantie d'aucune sorte, expresse ou implicite, y compris les garanties implicites de qualité marchande, d'adéquation à un usage particulier et d'absence de contrefaçon.",
    "q.terms.s6.p2":
      "Nous ne garantissons pas que l'application fonctionnera sans interruption ni erreur, ni que les chiffres affichés seront exacts à chaque instant. Rien dans ces Conditions n'exclut ni ne limite une garantie ou un droit qui ne peut être exclu par la législation applicable sur la protection des consommateurs, y compris la garantie légale de conformité en droit français et européen.",
    "q.terms.s7.h2": "7. Limitation de responsabilité",
    "q.terms.s7.p1":
      "Dans la mesure maximale permise par la loi, nous ne sommes pas responsables des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs résultant de ton utilisation de l'application ou de l'impossibilité de l'utiliser.",
    "q.terms.s7.p2":
      "Notre responsabilité totale envers toi pour toute réclamation liée à ces Conditions ou à l'application ne dépassera pas le montant que tu as payé pour l'application. Rien dans ces Conditions ne limite la responsabilité en cas de décès ou de dommage corporel, de fraude, de faute lourde ou intentionnelle, ni toute autre responsabilité qui ne peut être limitée par la loi.",
    "q.terms.s8.h2": "8. Confidentialité",
    "q.terms.s8.p1":
      "Ton utilisation de l'application est aussi régie par notre {privacy}, incorporée à ces Conditions par référence.",
    "q.terms.s8.link": "Politique de confidentialité",
    "q.terms.s9.h2": "9. Modifications de l'application et des Conditions",
    "q.terms.s9.p1":
      "Nous nous réservons le droit de modifier ou d'interrompre l'application (en tout ou partie) à tout moment. Nous pouvons aussi mettre à jour ces Conditions. Les Conditions mises à jour seront publiées sur cette page avec une date révisée. Continuer à utiliser l'application après les modifications vaut acceptation des Conditions mises à jour.",
    "q.terms.s10.h2": "10. Conditions de l'App Store d'Apple",
    "q.terms.s10.p1":
      "Ces Conditions sont conclues entre toi et Vantoro Studio uniquement, et non avec Apple Inc. (« Apple »). Vantoro Studio, et non Apple, est seul responsable de l'application et de son contenu.",
    "q.terms.s10.p2":
      "Ton utilisation de l'application est aussi soumise au contrat de licence d'utilisateur final d'Apple pour les applications sous licence (l'« EULA d'Apple »), disponible sur apple.com/legal/internet-services/itunes/dev/stdeula. En cas de conflit entre ces Conditions et l'EULA d'Apple, l'EULA d'Apple prévaut dans la mesure du conflit.",
    "q.terms.s10.p3":
      "Apple n'a aucune obligation de fournir de maintenance ni de support pour l'application. Le support est assuré par nos soins via la page Assistance de ce site.",
    "q.terms.s10.p4":
      "Si l'application ne respecte pas une garantie applicable, tu peux en informer Apple, qui te remboursera le prix d'achat. Dans la mesure maximale permise par la loi, Apple n'a aucune autre obligation de garantie concernant l'application. Entre toi et nous, nous sommes responsables de toute réclamation relative à l'application, y compris les réclamations en responsabilité du fait des produits, les réclamations selon lesquelles l'application ne respecte pas une exigence légale ou réglementaire, les réclamations de protection des consommateurs et les réclamations pour contrefaçon.",
    "q.terms.s10.p5":
      "Apple et ses filiales sont des tiers bénéficiaires de ces Conditions. Dès que tu acceptes ces Conditions, Apple a le droit de les faire appliquer à ton encontre en tant que tiers bénéficiaire. Tu confirmes ne pas te trouver dans un pays soumis à un embargo du gouvernement des États-Unis ou désigné comme « soutenant le terrorisme », et ne figurer sur aucune liste de parties interdites ou restreintes du gouvernement des États-Unis.",
    "q.terms.s11.h2": "11. Droit applicable",
    "q.terms.s11.p1":
      "Ces Conditions sont régies par le droit français, sans égard à ses règles de conflit de lois. Tout litige relatif à ces Conditions relève de la compétence exclusive des tribunaux français. Si tu es consommateur, cela ne te prive pas des dispositions impératives de protection des consommateurs de ton pays de résidence, et tu peux aussi saisir les tribunaux de ton pays de résidence. Avant d'aller en justice, nous t'encourageons à nous contacter pour tenter de résoudre le différend à l'amiable.",
    "q.terms.s12.h2": "12. Contact",
    "q.terms.s12.p1":
      "Pour toute question sur ces Conditions, écris-nous : help@vantoro.studio",
    "q.terms.s12.p2":
      "Quotient est éditée par Vantoro Studio, exploitée par Kévin Bourdouleix, entrepreneur individuel, France — SIREN 912714128.",
  },
};
