import type { Lang } from "./translations";

export const copy: Record<Lang, Record<string, string>> = {
  en: {
    // Chrome
    "nav.home": "Vantoro Studio",
    "nav.flickflush": "FlickFlush",
    "nav.support": "Support",
    "nav.keep": "Keep",
    "nav.favorite": "Favorite",
    "nav.dupes": "Duplicates",
    "nav.bin": "Bin",
    "nav.private": "Privacy",
    "nav.menu": "Main navigation",
    "nav.lang": "Language",
    "footer.tag": "Independent iOS apps, made in France.",
    "footer.copy": "© 2026 Vantoro Studio. All rights reserved.",
    "footer.apps": "Apps",
    "footer.help": "Help & legal",
    "footer.contact": "Contact",
    "soon.label": "Coming soon on the App Store",
    "soon.android": "Android: coming soon.",

    // Sorting demo
    "bin.keep": "Keep",
    "bin.fav": "Favorite",
    "bin.bin": "Bin",
    "demo.label": "Sorting demo",
    "demo.hint": "Drag the photo to a bin, or tap a bin.",
    "demo.note": "Demo with sample photos.",
    "demo.undo": "Undo",
    "demo.replay": "Play again",
    "demo.done.title": "Session complete",
    "demo.done.body":
      "{n} photos sorted. In the app, nothing is deleted until you confirm.",
    "demo.moved": "Moved to {bin}.",
    "demo.alt.dune": "A pale yellow flower in beach grass",
    "demo.alt.lake": "Autumn hills reflected in a calm lake",
    "demo.alt.falls": "A waterfall pouring over a mossy cliff",

    // Home
    "home.title.1": "Every photo",
    "home.title.2": "has a bin.",
    "home.sub":
      "FlickFlush sorts your camera roll one swipe at a time. Keep it, favorite it, or bin it. Everything stays on your iPhone.",
    "home.cta": "Discover FlickFlush",
    "home.app.title": "FlickFlush",
    "home.app.desc":
      "Clean your photo library with a flick. The fastest way to declutter your camera roll: swipe, sort, done.",
    "home.app.link": "See how it works",
    "home.studio.title": "A small studio. One app at a time.",
    "home.studio.body":
      "Vantoro Studio is an independent iOS studio based in France. We make focused apps: fewer features, more craft.",
    "home.studio.contact": "Say hello",

    // FlickFlush hero
    "ff.title.1": "Your camera roll,",
    "ff.title.2": "finally sorted.",
    "ff.sub":
      "Swipe through your photos one by one. Keep what matters, bin the rest, and nothing is deleted until you say so.",

    // Keep
    "keep.title": "Keep. Bin. One swipe.",
    "keep.desc":
      "One swipe per photo: right to keep, left to bin. Quick, satisfying, and every swipe can be undone.",
    "keep.b1.h": "Swipe left: bin",
    "keep.b1.p":
      "The photo goes to the review basket. Nothing is deleted until you confirm.",
    "keep.b2.h": "Swipe right: keep",
    "keep.b2.p": "Move on instantly. No friction, no regret.",
    "keep.b3.h": "Undo any swipe",
    "keep.b3.p": "Tap undo and your last decision reverses.",
    "keep.alt.bin": "Swiping a photo left to bin it",
    "keep.alt.keep": "Swiping a photo right to keep it",

    // Favorite
    "fav.title": "Favorite. Or file it.",
    "fav.desc":
      "Not every photo is a yes or no. Heart your best shots, or send them to an album without leaving the swipe.",
    "fav.b1.h": "Swipe up: favorite",
    "fav.b1.p": "Add your best photos to Favorites in one motion.",
    "fav.b2.h": "Pick any album",
    "fav.b2.p":
      "A bottom sheet lists all your albums. Tap one to file the photo there.",
    "fav.b3.h": "Create an album on the spot",
    "fav.b3.p": "Name a new album right there, then assign the photo to it.",
    "fav.alt.fav": "Swiping a photo up to add it to Favorites",
    "fav.alt.album": "The album sheet opened over a photo",

    // Duplicates
    "dupes.title": "Keep the best. Bin the rest.",
    "dupes.desc":
      "FlickFlush groups near-identical photos, burst series and screenshots. Keep the best one, delete the rest in a single tap.",
    "dupes.b1.h": "Best quality spotted",
    "dupes.b1.p":
      "The sharpest photo in each group is badged. Confirm and move on.",
    "dupes.b2.h": "Delete all or keep all",
    "dupes.b2.p":
      "One button clears the whole group, another keeps everything.",
    "dupes.b3.h": "Group after group",
    "dupes.b3.p": "Bursts, similar shots and screenshots, presented one group at a time.",
    "dupes.alt": "A group of two similar lake photos, the best one badged",

    // Modes
    "modes.title": "Three ways to start.",
    "modes.desc":
      "Pick a mode on the home screen and start sorting in seconds.",
    "mode1.title": "Quick clean",
    "mode1.desc":
      "Swipe through your whole library in chronological order. The fastest way to make a dent.",
    "mode2.title": "Duplicates",
    "mode2.desc":
      "Near-identical photos, bursts and screenshots, grouped for fast review.",
    "mode3.title": "By album",
    "mode3.desc":
      "Target one album at a time: your last trip, your screenshots. Clean surgically, not blindly.",
    "modes.alt": "The FlickFlush home screen with its three modes and daily stats",

    // Bin / review
    "trash.title": "See what you freed.",
    "trash.desc":
      "Every session ends with a recap: photos swiped, kept, favorited, and space freed. Before anything goes for good, review the basket and rescue any slip.",
    "trash.b1.h": "Review before you delete",
    "trash.b1.p":
      "Photos go to a review basket first. Scroll, rescue mistakes, then confirm.",
    "trash.b2.h": "Storage reclaimed",
    "trash.b2.p": "The exact amount freed, no guessing.",
    "trash.b3.h": "Full session recap",
    "trash.b3.p": "Deleted, kept, favorited, duration: the whole picture.",
    "trash.alt.basket": "The trash review basket with one photo to confirm",
    "trash.alt.recap": "The session complete screen with a recap",

    // Privacy
    "priv.title": "100% local. Zero servers.",
    "priv.desc":
      "Your photos never leave your phone. No account, no upload, no cloud. What happens on your device stays on your device.",
    "priv.b1.h": "No upload",
    "priv.b1.p": "FlickFlush never sends a photo or its metadata to a server.",
    "priv.b2.h": "No account",
    "priv.b2.p": "Open the app and start swiping. No sign-up, no tracking.",
    "priv.b3.h": "No connection needed",
    "priv.b3.p": "Sorting works without an internet connection.",
    "priv.link": "Read the privacy policy",

    // CTA
    "cta.title.1": "Stop scrolling.",
    "cta.title.2": "Start sorting.",
    "cta.sub":
      "Your photo library is waiting. FlickFlush is coming soon to the App Store.",

    // Legal pages
    "legal.contact": "Contact: help@vantoro.studio",
    "legal.back": "Back to FlickFlush",
    "support.mail": "Email us",
    "support.reply": "We usually reply within 48 hours.",
    "legal.toc": "On this page",
  },
  fr: {
    "nav.home": "Vantoro Studio",
    "nav.flickflush": "FlickFlush",
    "nav.support": "Assistance",
    "nav.keep": "Garder",
    "nav.favorite": "Favori",
    "nav.dupes": "Doublons",
    "nav.bin": "Corbeille",
    "nav.private": "Confidentialité",
    "nav.menu": "Navigation principale",
    "nav.lang": "Langue",
    "footer.tag": "Apps iOS indépendantes, faites en France.",
    "footer.copy": "© 2026 Vantoro Studio. Tous droits réservés.",
    "footer.apps": "Apps",
    "footer.help": "Aide et mentions légales",
    "footer.contact": "Contact",
    "soon.label": "Bientôt sur l'App Store",
    "soon.android": "Android : bientôt.",

    "bin.keep": "Garder",
    "bin.fav": "Favori",
    "bin.bin": "Corbeille",
    "demo.label": "Démo de tri",
    "demo.hint": "Glisse la photo vers un bac, ou touche un bac.",
    "demo.note": "Démo avec des photos d'exemple.",
    "demo.undo": "Annuler",
    "demo.replay": "Rejouer",
    "demo.done.title": "Session terminée",
    "demo.done.body":
      "{n} photos triées. Dans l'app, rien n'est supprimé avant ta confirmation.",
    "demo.moved": "Envoyée dans « {bin} ».",
    "demo.alt.dune": "Une fleur jaune pâle dans les herbes de la dune",
    "demo.alt.lake": "Des collines d'automne reflétées dans un lac calme",
    "demo.alt.falls": "Une cascade tombant d'une falaise couverte de mousse",

    "home.title.1": "Chaque photo",
    "home.title.2": "a son bac.",
    "home.sub":
      "FlickFlush trie ta photothèque d'un swipe à la fois. Garde-la, mets-la en favori ou jette-la. Tout reste sur ton iPhone.",
    "home.cta": "Découvrir FlickFlush",
    "home.app.title": "FlickFlush",
    "home.app.desc":
      "Nettoie ta photothèque d'un geste. La façon la plus rapide de désencombrer ta pellicule : swipe, trie, terminé.",
    "home.app.link": "Voir comment ça marche",
    "home.studio.title": "Un petit studio. Une app à la fois.",
    "home.studio.body":
      "Vantoro Studio est un studio indépendant d'apps iOS basé en France. Des apps ciblées : moins de fonctions, plus de soin.",
    "home.studio.contact": "Écrire au studio",

    "ff.title.1": "Ta photothèque,",
    "ff.title.2": "enfin triée.",
    "ff.sub":
      "Fais défiler tes photos une par une. Garde ce qui compte, jette le reste, et rien n'est supprimé avant ton feu vert.",

    "keep.title": "Garder. Jeter. Un swipe.",
    "keep.desc":
      "Un swipe par photo : à droite pour garder, à gauche pour jeter. Rapide, satisfaisant, et chaque swipe peut être annulé.",
    "keep.b1.h": "Swipe gauche : corbeille",
    "keep.b1.p":
      "La photo part dans le panier de révision. Rien n'est supprimé avant confirmation.",
    "keep.b2.h": "Swipe droite : garder",
    "keep.b2.p": "Passe à la suite. Zéro friction, zéro regret.",
    "keep.b3.h": "Annule n'importe quel swipe",
    "keep.b3.p": "Appuie sur annuler et ta dernière décision s'inverse.",
    "keep.alt.bin": "Une photo glissée vers la gauche pour la jeter",
    "keep.alt.keep": "Une photo glissée vers la droite pour la garder",

    "fav.title": "Favori. Ou range-la.",
    "fav.desc":
      "Chaque photo n'est pas un oui ou un non. Mets tes meilleurs clichés en favori, ou envoie-les dans un album sans quitter le swipe.",
    "fav.b1.h": "Swipe haut : favori",
    "fav.b1.p": "Ajoute tes meilleures photos aux Favoris d'un seul geste.",
    "fav.b2.h": "Choisis un album",
    "fav.b2.p":
      "Un panneau liste tous tes albums. Appuie sur l'un d'eux pour y ranger la photo.",
    "fav.b3.h": "Crée un album sur le moment",
    "fav.b3.p": "Nomme un nouvel album, puis assigne-lui la photo.",
    "fav.alt.fav": "Une photo glissée vers le haut pour la mettre en favori",
    "fav.alt.album": "Le panneau d'albums ouvert sur une photo",

    "dupes.title": "Garde la meilleure. Jette le reste.",
    "dupes.desc":
      "FlickFlush regroupe les photos quasi identiques, les rafales et les captures d'écran. Garde la meilleure, supprime le reste d'un seul tap.",
    "dupes.b1.h": "Meilleure qualité repérée",
    "dupes.b1.p":
      "La photo la plus nette de chaque groupe est badgée. Confirme et passe à la suite.",
    "dupes.b2.h": "Tout supprimer ou tout garder",
    "dupes.b2.p":
      "Un bouton vide tout le groupe, un autre garde tout.",
    "dupes.b3.h": "Groupe après groupe",
    "dupes.b3.p": "Rafales, clichés similaires et captures, présentés un groupe à la fois.",
    "dupes.alt": "Un groupe de deux photos de lac similaires, la meilleure badgée",

    "modes.title": "Trois façons de commencer.",
    "modes.desc":
      "Choisis un mode sur l'écran d'accueil et commence à trier en quelques secondes.",
    "mode1.title": "Nettoyage rapide",
    "mode1.desc":
      "Fais défiler toute ta photothèque par ordre chronologique. La façon la plus rapide de faire de la place.",
    "mode2.title": "Doublons",
    "mode2.desc":
      "Photos quasi identiques, rafales et captures d'écran, regroupées pour une révision rapide.",
    "mode3.title": "Par album",
    "mode3.desc":
      "Cible un album à la fois : ton dernier voyage, tes captures d'écran. Nettoie avec précision, pas à l'aveugle.",
    "modes.alt": "L'écran d'accueil de FlickFlush avec ses trois modes et ses stats du jour",

    "trash.title": "Vois ce que tu as libéré.",
    "trash.desc":
      "Chaque session se termine par un récap : photos triées, gardées, mises en favori, et espace libéré. Avant que quoi que ce soit parte pour de bon, relis le panier et rattrape les erreurs.",
    "trash.b1.h": "Relis avant de supprimer",
    "trash.b1.p":
      "Les photos vont d'abord dans un panier de révision. Fais défiler, rattrape les erreurs, puis confirme.",
    "trash.b2.h": "Espace récupéré",
    "trash.b2.p": "Le volume exact libéré, sans estimation.",
    "trash.b3.h": "Récap de session",
    "trash.b3.p": "Supprimées, gardées, favorites, durée : tout le tableau.",
    "trash.alt.basket": "Le panier de révision avec une photo à confirmer",
    "trash.alt.recap": "L'écran de fin de session avec son récap",

    "priv.title": "100% local. Zéro serveur.",
    "priv.desc":
      "Tes photos ne quittent jamais ton téléphone. Pas de compte, pas d'envoi, pas de cloud. Ce qui se passe sur ton appareil reste sur ton appareil.",
    "priv.b1.h": "Aucun envoi",
    "priv.b1.p": "FlickFlush n'envoie jamais une photo ni ses métadonnées à un serveur.",
    "priv.b2.h": "Aucun compte",
    "priv.b2.p": "Ouvre l'app et commence à swiper. Ni inscription, ni suivi.",
    "priv.b3.h": "Aucune connexion requise",
    "priv.b3.p": "Le tri fonctionne sans connexion internet.",
    "priv.link": "Lire la politique de confidentialité",

    "cta.title.1": "Stop de scroller.",
    "cta.title.2": "Commence à trier.",
    "cta.sub":
      "Ta photothèque t'attend. FlickFlush arrive bientôt sur l'App Store.",

    "legal.contact": "Contact : help@vantoro.studio",
    "legal.back": "Retour à FlickFlush",
    "support.mail": "Nous écrire",
    "support.reply": "Nous répondons en général sous 48 heures.",
    "legal.toc": "Sur cette page",
  },
};
