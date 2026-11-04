import { copy } from "./copy";

export type Lang = "en" | "fr";

const legal: Record<Lang, Record<string, string>> = {
  en: {
    // Footer links, support, legal
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.support": "Support",
    // Support page
    "support.page.h1": "FlickFlush Support",
    "support.page.sub": "Need help with FlickFlush? You're in the right place.",
    "support.contact.h2": "Contact us",
    "support.contact.p1": "The fastest way to reach us is by email. We usually reply within 48 hours.",
    "support.contact.p2": "To help us answer faster, include your iOS version, your iPhone model and a short description of the problem (screenshots are welcome).",
    "support.faq.h2": "Frequently asked questions",
    "support.faq.q1": "Does FlickFlush delete my photos right away?",
    "support.faq.a1": "No. Photos you swipe to trash are moved to iOS's \"Recently Deleted\" album, where you can recover them for 30 days.",
    "support.faq.q2": "Are my photos uploaded anywhere?",
    "support.faq.a2": "No. All sorting and duplicate detection happens locally on your device. Your photos never leave your iPhone.",
    "support.faq.q3": "FlickFlush can't see my photos. What should I do?",
    "support.faq.a3": "Open iOS Settings → FlickFlush → Photos and allow access to your photo library (Full Access is needed to scan your whole library).",
    "support.faq.q4": "How do I cancel my subscription?",
    "support.faq.a4": "Subscriptions are managed by Apple. Open Settings → [your name] → Subscriptions, select FlickFlush and tap Cancel Subscription.",
    "support.faq.q5": "How do I get a refund?",
    "support.faq.a5": "Refunds are handled by Apple. Visit reportaproblem.apple.com, sign in and select the purchase you want to report.",
    "support.faq.q6": "I bought premium but it's not unlocked.",
    "support.faq.a6": "Use the Restore Purchases option in the app. If the problem persists, email us and we'll sort it out.",
    "support.legal.h2": "Legal",
    // Privacy page
    "privacy.page.h1": "Privacy Policy",
    "privacy.page.updated": "Last updated: November 4, 2026",
    "privacy.tldr":
      "FlickFlush does not collect, store, or transmit any of your personal data or photos. Everything happens on your device. No account, no server, no cloud.",
    "privacy.s1.h2": "1. Who we are",
    "privacy.s1.p1":
      'FlickFlush ("the App", "we", "our") is a photo library management app for iOS. The App is operated as an independent developer product.',
    "privacy.s1.p2":
      "If you have any questions about this Privacy Policy, contact us at: help@vantoro.studio",
    "privacy.s2.h2": "2. Data we do NOT collect",
    "privacy.s2.p1":
      "FlickFlush is designed from the ground up to operate entirely on your device. We do not collect, process, or transmit:",
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
      "No account or sign-up is required to use FlickFlush. We have no user database.",
    "privacy.s3.h2": "3. Photo library access",
    "privacy.s3.p1":
      "FlickFlush requests access to your photo library solely to display and manage photos within the App on your device. Your photos are never uploaded to any server, shared with any third party, or transmitted over the internet.",
    "privacy.s3.p2":
      "All processing (sorting, duplicate detection, session statistics) is performed locally on your device using on-device APIs. You can revoke photo library access at any time in iOS Settings → Privacy & Security → Photos.",
    "privacy.s4.h2": "4. Subscription and payments",
    "privacy.s4.p1":
      "FlickFlush may offer optional premium features through in-app purchases or subscriptions managed entirely by Apple via the App Store. We do not process, store, or have access to your payment information.",
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
      "FlickFlush is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child under 13 has provided personal information to us, please contact us immediately at help@vantoro.studio.",
    "privacy.s7.h2": "7. Changes to this policy",
    "privacy.s7.p1":
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the App after changes constitutes acceptance of the updated policy.",
    "privacy.s8.h2": "8. Contact",
    "privacy.s8.p1":
      "For any privacy-related questions or requests, contact us at: help@vantoro.studio",
    // Terms page
    "terms.page.h1": "Terms of Use",
    "terms.page.updated": "Last updated: October 9, 2026",
    "terms.s1.h2": "1. Acceptance of terms",
    "terms.s1.p1":
      'By downloading, installing, or using FlickFlush ("the App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, do not use the App.',
    "terms.s1.p2":
      "These Terms apply to all users of the App, including users of any free or premium features. You must be at least 13 years old to use the App. If you are under the age of majority in your country, you confirm that a parent or guardian has agreed to these Terms on your behalf.",
    "terms.s2.h2": "2. Description of the App",
    "terms.s2.p1":
      "FlickFlush is a photo library management application for iOS that allows you to review, organise, and delete photos from your device. The App operates entirely on-device — no photos, videos, or personal data are uploaded to any server.",
    "terms.s3.h2": "3. Subscriptions and in-app purchases",
    "terms.s3.p1":
      "FlickFlush may offer optional premium features through auto-renewable subscriptions or one-time in-app purchases managed by Apple via the App Store. The price, duration and content of each subscription are shown in the App before you confirm your purchase.",
    "terms.s3.sub1":
      "Auto-renewable subscriptions automatically renew at the end of each subscription period unless cancelled at least 24 hours before the renewal date. Payment is charged to your Apple ID account at confirmation of purchase and upon each renewal.",
    "terms.s3.p2":
      "You can manage and cancel your subscription at any time in your Apple ID account settings (Settings → [your name] → Subscriptions). Cancellation takes effect at the end of the current billing period — you retain access to premium features until then.",
    "terms.s3.p3":
      "Refunds. All purchases are final and non-refundable, except as required by applicable law or as determined by Apple's refund policy. To request a refund, contact Apple Support directly at reportaproblem.apple.com. If you are a consumer in the European Union, you may have a legal right of withdrawal; by starting to use a digital feature immediately after your purchase, you ask for it to be supplied immediately and acknowledge that you may lose this right once it has begun, to the extent permitted by law.",
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
      "You are solely responsible for all actions taken within the App, including the deletion of photos. FlickFlush moves deleted photos to your iOS Recently Deleted album (standard iOS behaviour), giving you a recovery window before permanent deletion. We are not responsible for any data loss resulting from your use of the App.",
    "terms.s5.p2":
      "You are responsible for maintaining appropriate backups of your photo library before using FlickFlush.",
    "terms.s6.h2": "6. Intellectual property",
    "terms.s6.p1":
      "The App, including all content, features, and functionality, is owned by the developer and protected by applicable intellectual property laws. The FlickFlush name, logo, and related marks are proprietary. Nothing in these Terms grants you any right to use our trademarks, logos, or brand assets.",
    "terms.s7.h2": "7. Disclaimer of warranties",
    "terms.s7.p1":
      'The App is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
    "terms.s7.p2":
      "We do not warrant that the App will be uninterrupted, error-free, or free of viruses or other harmful components. Nothing in these Terms excludes or limits any warranty or right that cannot be excluded under applicable consumer protection law, including the legal guarantee of conformity under French and EU law.",
    "terms.s8.h2": "8. Limitation of liability",
    "terms.s8.p1":
      "To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data, loss of profits, or any other losses arising from your use of or inability to use the App.",
    "terms.s8.p2":
      "Our total liability to you for any claims arising from these Terms or the App shall not exceed the amount you paid us in the twelve months preceding the claim. Nothing in these Terms limits liability for death or personal injury, fraud, gross negligence or wilful misconduct, or any other liability that cannot be limited by law.",
    "terms.s9.h2": "9. Privacy",
    "terms.s9.p1":
      "Your use of the App is also governed by our {privacy}, which is incorporated into these Terms by reference. By using the App, you consent to the data practices described in the Privacy Policy.",
    "terms.s9.link": "Privacy Policy",
    "terms.s10.h2": "10. Changes to the App and Terms",
    "terms.s10.p1":
      "We reserve the right to modify or discontinue the App (or any part of it) at any time, with or without notice. We may also update these Terms from time to time. The updated Terms will be posted on this page with a revised date. If a change is material, we will let you know in the App or on this page. Continued use of the App after changes constitutes acceptance of the updated Terms.",
    "terms.sapple.h2": "11. Apple App Store terms",
    "terms.sapple.p1":
      'These Terms are between you and Vantoro Studio only, and not with Apple Inc. ("Apple"). Vantoro Studio, not Apple, is solely responsible for the App and its content.',
    "terms.sapple.p2":
      'Your use of the App is also subject to Apple\'s Licensed Application End User License Agreement (the "Apple EULA"), available at apple.com/legal/internet-services/itunes/dev/stdeula. If these Terms conflict with the Apple EULA, the Apple EULA prevails to the extent of the conflict.',
    "terms.sapple.p3":
      "Apple has no obligation to provide any maintenance or support services for the App. Support is provided by us through the Support page of this website.",
    "terms.sapple.p4":
      "If the App fails to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any). To the maximum extent permitted by law, Apple has no other warranty obligation with respect to the App. As between you and us, we are responsible for any claims relating to the App, including product liability claims, claims that the App fails to comply with a legal or regulatory requirement, consumer protection claims, and intellectual property infringement claims.",
    "terms.sapple.p5":
      "Apple and its subsidiaries are third-party beneficiaries of these Terms. Once you accept these Terms, Apple has the right to enforce them against you as a third-party beneficiary. You confirm that you are not located in a country subject to a U.S. Government embargo or designated as a \"terrorist supporting\" country, and that you are not on any U.S. Government list of prohibited or restricted parties.",
    "terms.s11.h2": "12. Governing law",
    "terms.s11.p1":
      "These Terms are governed by and construed in accordance with the laws of France, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of France. If you are a consumer, this does not deprive you of the mandatory consumer protection provisions of your country of residence, and you may also bring a claim before the courts of your country of residence. Before going to court, we encourage you to contact us so we can try to resolve the issue amicably.",
    "terms.s12.h2": "13. Contact",
    "terms.s12.p1":
      "For any questions about these Terms, contact us at: help@vantoro.studio",
    "terms.s12.p2":
      "FlickFlush is published by Vantoro Studio, operated by Kévin Bourdouleix, sole proprietor (entrepreneur individuel), France — SIREN 912714128.",
  },
  fr: {
    // Footer links, support, legal
    "footer.privacy": "Politique de confidentialité",
    "footer.terms": "Conditions d'utilisation",
    "footer.support": "Assistance",
    // Support page
    "support.page.h1": "Assistance FlickFlush",
    "support.page.sub": "Besoin d'aide avec FlickFlush ? Tu es au bon endroit.",
    "support.contact.h2": "Nous contacter",
    "support.contact.p1": "Le plus rapide est de nous écrire par e-mail. Nous répondons généralement sous 48 heures.",
    "support.contact.p2": "Pour nous aider à répondre plus vite, indique ta version d'iOS, ton modèle d'iPhone et une courte description du problème (les captures d'écran sont bienvenues).",
    "support.faq.h2": "Questions fréquentes",
    "support.faq.q1": "FlickFlush supprime-t-il mes photos immédiatement ?",
    "support.faq.a1": "Non. Les photos que tu mets à la corbeille sont déplacées dans l'album « Supprimés récemment » d'iOS, où tu peux les récupérer pendant 30 jours.",
    "support.faq.q2": "Mes photos sont-elles envoyées quelque part ?",
    "support.faq.a2": "Non. Le tri et la détection des doublons se font entièrement sur ton appareil. Tes photos ne quittent jamais ton iPhone.",
    "support.faq.q3": "FlickFlush ne voit pas mes photos. Que faire ?",
    "support.faq.a3": "Ouvre Réglages iOS → FlickFlush → Photos et autorise l'accès à ta photothèque (l'accès complet est nécessaire pour analyser toute ta photothèque).",
    "support.faq.q4": "Comment résilier mon abonnement ?",
    "support.faq.a4": "Les abonnements sont gérés par Apple. Ouvre Réglages → [ton nom] → Abonnements, sélectionne FlickFlush puis touche Annuler l'abonnement.",
    "support.faq.q5": "Comment obtenir un remboursement ?",
    "support.faq.a5": "Les remboursements sont gérés par Apple. Rends-toi sur reportaproblem.apple.com, connecte-toi et sélectionne l'achat concerné.",
    "support.faq.q6": "J'ai acheté le premium mais il n'est pas débloqué.",
    "support.faq.a6": "Utilise l'option « Restaurer les achats » dans l'app. Si le problème persiste, écris-nous et nous réglerons ça.",
    "support.legal.h2": "Informations légales",
    // Privacy page
    "privacy.page.h1": "Politique de confidentialité",
    "privacy.page.updated": "Dernière mise à jour : 4 novembre 2026",
    "privacy.tldr":
      "FlickFlush ne collecte, ne stocke ni ne transmet aucune de tes données personnelles ou photos. Tout se passe sur ton appareil. Pas de compte, pas de serveur, pas de cloud.",
    "privacy.s1.h2": "1. Qui sommes-nous",
    "privacy.s1.p1":
      "FlickFlush est une application de gestion de photothèque pour iOS. L'application est opérée en tant que produit développeur indépendant.",
    "privacy.s1.p2":
      "Pour toute question sur cette politique, contact : help@vantoro.studio",
    "privacy.s2.h2": "2. Données que nous NE collectons PAS",
    "privacy.s2.p1":
      "FlickFlush est conçu pour fonctionner entièrement sur ton appareil. Nous ne collectons, traitons ni transmettons :",
    "privacy.s2.li1": "Tes photos, vidéos ou tout autre média",
    "privacy.s2.li2": "Ton nom, adresse email ou toute information personnelle",
    "privacy.s2.li3": "Tes données de localisation",
    "privacy.s2.li4": "Tes habitudes d'utilisation ou activité de session",
    "privacy.s2.li5": "Les identifiants de l'appareil",
    "privacy.s2.li6":
      "Les journaux de crash (au-delà de ce qu'Apple collecte via l'App Store)",
    "privacy.s2.p2":
      "Aucun compte n'est requis pour utiliser FlickFlush. Nous n'avons pas de base de données utilisateurs.",
    "privacy.s3.h2": "3. Accès à la photothèque",
    "privacy.s3.p1":
      "FlickFlush demande l'accès à ta photothèque uniquement pour afficher et gérer les photos sur ton appareil. Tes photos ne sont jamais uploadées sur un serveur, partagées avec des tiers, ni transmises sur internet.",
    "privacy.s3.p2":
      "Tout le traitement est effectué localement sur ton appareil. Tu peux révoquer l'accès à la photothèque à tout moment dans Réglages iOS → Confidentialité & sécurité → Photos.",
    "privacy.s4.h2": "4. Abonnements et paiements",
    "privacy.s4.p1":
      "FlickFlush peut proposer des fonctionnalités premium via des achats intégrés gérés par Apple. Nous n'avons pas accès à tes informations de paiement.",
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
      "FlickFlush ne s'adresse pas aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants. Si tu penses qu'un enfant de moins de 13 ans nous a fourni des informations, contacte-nous immédiatement à help@vantoro.studio.",
    "privacy.s7.h2": "7. Modifications",
    "privacy.s7.p1":
      "Nous pouvons mettre à jour cette politique. Les modifications seront publiées sur cette page.",
    "privacy.s8.h2": "8. Contact",
    "privacy.s8.p1":
      "Pour toute question relative à la confidentialité, contacte-nous : help@vantoro.studio",
    // Terms page
    "terms.page.h1": "Conditions d'utilisation",
    "terms.page.updated": "Dernière mise à jour : 9 octobre 2026",
    "terms.s1.h2": "1. Acceptation des conditions",
    "terms.s1.p1":
      "En téléchargeant, installant ou utilisant FlickFlush, tu acceptes ces Conditions d'utilisation. Si tu n'es pas d'accord, n'utilise pas l'application.",
    "terms.s1.p2":
      "Ces Conditions s'appliquent à tous les utilisateurs de l'application, y compris les utilisateurs des fonctionnalités gratuites ou premium. Tu dois avoir au moins 13 ans pour utiliser l'application. Si tu n'as pas atteint l'âge de la majorité dans ton pays, tu confirmes qu'un parent ou un représentant légal a accepté ces Conditions en ton nom.",
    "terms.s2.h2": "2. Description de l'application",
    "terms.s2.p1":
      "FlickFlush est une application de gestion de photothèque iOS qui te permet de réviser, organiser et supprimer des photos sur ton appareil. L'application fonctionne entièrement sur l'appareil — aucune photo ni donnée personnelle n'est uploadée sur un serveur.",
    "terms.s3.h2": "3. Abonnements et achats intégrés",
    "terms.s3.p1":
      "FlickFlush peut proposer des fonctionnalités premium via des abonnements à renouvellement automatique ou des achats intégrés gérés par Apple via l'App Store. Le prix, la durée et le contenu de chaque abonnement sont affichés dans l'application avant que tu confirmes ton achat.",
    "terms.s3.sub1":
      "Les abonnements à renouvellement automatique se renouvellent automatiquement à la fin de chaque période sauf annulation au moins 24 heures avant la date de renouvellement.",
    "terms.s3.p2":
      "Tu peux gérer et annuler ton abonnement dans les réglages de ton identifiant Apple. L'annulation prend effet à la fin de la période de facturation en cours.",
    "terms.s3.p3":
      "Remboursements. Tous les achats sont définitifs et non remboursables, sauf disposition légale contraire. Pour demander un remboursement, contacte le support Apple sur reportaproblem.apple.com. Si tu es un consommateur dans l'Union européenne, tu peux disposer d'un droit de rétractation légal ; en commençant à utiliser une fonctionnalité numérique immédiatement après ton achat, tu demandes qu'elle te soit fournie immédiatement et tu reconnais que tu peux perdre ce droit une fois la fourniture commencée, dans la mesure permise par la loi.",
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
      "Tu es seul responsable de toutes les actions effectuées dans l'application, y compris la suppression de photos. FlickFlush déplace les photos supprimées dans l'album \"Récemment supprimés\" d'iOS.",
    "terms.s5.p2":
      "Tu es responsable de maintenir des sauvegardes appropriées de ta photothèque avant d'utiliser FlickFlush.",
    "terms.s6.h2": "6. Propriété intellectuelle",
    "terms.s6.p1":
      "L'application est la propriété du développeur et protégée par les lois applicables. Le nom FlickFlush, le logo et les marques associées sont propriétaires.",
    "terms.s7.h2": "7. Exclusion de garanties",
    "terms.s7.p1":
      'L\'application est fournie "telle quelle" et "telle que disponible" sans garanties d\'aucune sorte.',
    "terms.s7.p2":
      "Nous ne garantissons pas que l'application sera ininterrompue, sans erreur ou exempte de virus. Aucune stipulation de ces Conditions n'exclut ni ne limite les garanties ou droits qui ne peuvent être exclus en vertu du droit de la consommation applicable, notamment la garantie légale de conformité prévue par le droit français et européen.",
    "terms.s8.h2": "8. Limitation de responsabilité",
    "terms.s8.p1":
      "Dans la mesure maximale permise par la loi applicable, nous ne serons pas responsables des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs.",
    "terms.s8.p2":
      "Notre responsabilité totale envers toi ne dépassera pas le montant que tu nous as payé au cours des douze mois précédant la réclamation. Aucune stipulation de ces Conditions ne limite la responsabilité en cas de décès ou de dommage corporel, de fraude, de faute lourde ou intentionnelle, ni toute autre responsabilité qui ne peut être limitée par la loi.",
    "terms.s9.h2": "9. Confidentialité",
    "terms.s9.p1":
      "Ton utilisation est également régie par notre {privacy}, incorporée par référence à ces Conditions.",
    "terms.s9.link": "Politique de confidentialité",
    "terms.s10.h2": "10. Modifications",
    "terms.s10.p1":
      "Nous nous réservons le droit de modifier ou d'interrompre l'application à tout moment. Si une modification est importante, nous t'en informerons dans l'application ou sur cette page. L'utilisation continue de l'application après les modifications vaut acceptation.",
    "terms.sapple.h2": "11. Conditions de l'App Store d'Apple",
    "terms.sapple.p1":
      "Ces Conditions sont conclues entre toi et Vantoro Studio uniquement, et non avec Apple Inc. (« Apple »). Vantoro Studio, et non Apple, est seul responsable de l'application et de son contenu.",
    "terms.sapple.p2":
      "Ton utilisation de l'application est également soumise au contrat de licence d'utilisateur final d'Apple pour les applications sous licence (l'« EULA Apple »), disponible sur apple.com/legal/internet-services/itunes/dev/stdeula. En cas de contradiction entre ces Conditions et l'EULA Apple, l'EULA Apple prévaut dans la mesure de la contradiction.",
    "terms.sapple.p3":
      "Apple n'a aucune obligation de fournir de maintenance ou d'assistance pour l'application. L'assistance est assurée par nos soins via la page Assistance de ce site.",
    "terms.sapple.p4":
      "Si l'application n'est pas conforme à une garantie applicable, tu peux en informer Apple, qui te remboursera le prix d'achat (le cas échéant). Dans la mesure maximale permise par la loi, Apple n'a aucune autre obligation de garantie concernant l'application. Entre toi et nous, nous sommes responsables de toute réclamation relative à l'application, notamment les réclamations en matière de responsabilité du fait des produits, de non-respect d'une exigence légale ou réglementaire, de protection des consommateurs et de contrefaçon de propriété intellectuelle.",
    "terms.sapple.p5":
      "Apple et ses filiales sont des tiers bénéficiaires de ces Conditions. Dès que tu acceptes ces Conditions, Apple a le droit de les faire appliquer à ton encontre en tant que tiers bénéficiaire. Tu confirmes que tu ne te trouves pas dans un pays soumis à un embargo du gouvernement américain ou désigné comme « soutenant le terrorisme », et que tu ne figures sur aucune liste américaine de parties interdites ou restreintes.",
    "terms.s11.h2": "12. Droit applicable",
    "terms.s11.p1":
      "Ces conditions sont régies par le droit français. Tout litige sera soumis à la juridiction exclusive des tribunaux français. Si tu es un consommateur, cela ne te prive pas des dispositions impératives de protection des consommateurs de ton pays de résidence, et tu peux aussi saisir les tribunaux de ton pays de résidence. Avant toute action en justice, nous t'encourageons à nous contacter afin de tenter de résoudre le problème à l'amiable.",
    "terms.s12.h2": "13. Contact",
    "terms.s12.p1":
      "Pour toute question sur ces Conditions, contacte-nous : help@vantoro.studio",
    "terms.s12.p2":
      "FlickFlush est édité par Vantoro Studio, exploité par Kévin Bourdouleix, entrepreneur individuel, France — SIREN 912714128.",
  },
};


export const translations: Record<Lang, Record<string, string>> = {
  en: { ...legal.en, ...copy.en },
  fr: { ...legal.fr, ...copy.fr },
};
