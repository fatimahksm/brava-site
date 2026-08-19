import type { SiteCopy } from "@/types/content";

export const fr: SiteCopy = {
  nav: {
    services: "Services",
    about: "À propos",
    why: "Pourquoi BRAVA",
    process: "Processus",
    faq: "FAQ",
    contact: "Contact",
    cta: "Parlez-nous de votre idée",
  },
  hero: {
    eyebrow: "BRAVA | Tech Solutions",
    title: "Nous transformons les idées en expériences digitales qui font avancer les entreprises.",
    description:
      "Sites web, menus digitaux et applications web sur mesure pour les entreprises qui veulent renforcer leur présence en ligne.",
    primaryCta: "Parlez-nous de votre idée",
    secondaryCta: "Découvrir nos solutions",
    visualLabel: "Pensé. Construit. Prêt pour le web.",
  },
  services: {
    eyebrow: "Ce que nous créons",
    title: "Des solutions web ciblées, construites autour de vos vrais besoins.",
    description:
      "Du site vitrine clair à l’expérience web sur mesure, chaque projet commence par l’objectif, pas par un modèle imposé.",
    items: {
      websites: { title: "Sites web", description: "Des sites rapides et responsive, conçus autour de votre marque, de votre message et de vos objectifs." },
      digitalMenus: { title: "Menus digitaux", description: "Des menus pensés pour mobile, faciles à partager, simples à utiliser et agréables pour vos clients." },
      webApps: { title: "Applications web", description: "Des applications interactives construites autour de vrais workflows, utilisateurs et besoins métier." },
      customSolutions: { title: "Solutions web sur mesure", description: "Quand un site standard ne suffit pas, nous construisons une solution adaptée au problème à résoudre." },
    },
  },
  about: {
    eyebrow: "À propos de BRAVA",
    title: "Une marque tech dédiée à des expériences web modernes et claires.",
    body:
      "BRAVA crée des solutions web pratiques et soignées pour les entreprises au Liban. Nous combinons design clair, développement réfléchi et communication directe pour transformer les idées en expériences digitales agréables à utiliser.",
    accent: "Des idées claires. Une exécution propre. Pensé pour durer.",
  },
  why: {
    eyebrow: "Pourquoi BRAVA",
    title: "Moins de bruit. Plus d’attention à chaque détail.",
    items: [
      { title: "Construit autour de votre objectif", description: "Nous partons du résultat attendu, puis nous concevons le design et le développement autour de cet objectif." },
      { title: "Pensé pour tous les écrans", description: "Chaque expérience reste claire et naturelle sur mobile, tablette et ordinateur." },
      { title: "Un code propre et maintenable", description: "La structure compte. Nous pensons aux futures évolutions, mises à jour et à la maintenance dès le départ." },
      { title: "Un support après le lancement", description: "Nous restons disponibles pour les corrections, mises à jour et améliorations lorsque le projet en a besoin." },
    ],
  },
  process: {
    eyebrow: "Notre processus",
    title: "Des étapes simples, de l’idée au lancement.",
    items: [
      { step: "01", title: "Parlez-nous de votre idée", description: "Nous clarifions l’objectif, le public et ce que le projet doit accomplir." },
      { step: "02", title: "Planifier", description: "Nous définissons la structure, le périmètre et la direction avant de commencer le développement." },
      { step: "03", title: "Construire", description: "Nous concevons et développons l’expérience avec clarté, responsive design et qualité." },
      { step: "04", title: "Lancer", description: "Nous vérifions, affinons et préparons la version finale pour sa mise en ligne." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Quelques questions que nos clients posent souvent.",
    items: [
      { question: "Combien de temps prend un projet ?", answer: "Cela dépend du périmètre. Une fois vos besoins compris, nous définissons un délai clair avant de commencer." },
      { question: "Mon site sera-t-il adapté au mobile ?", answer: "Oui. Le responsive design fait partie du projet dès le départ, ce n’est pas une option ajoutée à la fin." },
      { question: "Proposez-vous un support après le lancement ?", answer: "Oui. Les corrections, mises à jour et améliorations futures peuvent être prises en charge selon les besoins du projet." },
    ],
  },
  frontsey: {
    label: "Un produit BRAVA · Bientôt disponible",
    title: "Frontsey",
    description:
      "Une façon plus simple de créer et lancer des expériences digitales. Frontsey est conçu pour faciliter la création, la personnalisation et la publication de sites et d’expériences web prêtes à l’emploi.",
  },
  contact: {
    eyebrow: "Parlons-en",
    title: "Vous avez une idée ? Dites-nous ce que vous voulez construire.",
    description: "Partagez les informations essentielles et continuons directement la discussion sur WhatsApp.",
    name: "Nom",
    contact: "E-mail ou téléphone",
    service: "Quel service vous intéresse ?",
    message: "Parlez-nous brièvement de votre idée",
    selectPlaceholder: "Choisir un service",
    submit: "Continuer sur WhatsApp",
    whatsapp: "WhatsApp",
    email: "E-mail",
    instagram: "Instagram",
    serviceLabels: {
      websites: "Site web",
      digitalMenus: "Menu digital",
      webApps: "Application web",
      customSolutions: "Solution web sur mesure",
    },
    whatsappTemplate:
      "Bonjour BRAVA, je m'appelle {name}.\nJe suis intéressé(e) par : {service}.\nMon contact : {contact}.\n\nIdée du projet :\n{message}",
  },
  finalCta: {
    title: "Votre idée mérite mieux qu’un simple brouillon.",
    description: "Transformons-la en une expérience digitale utile, mémorable et crédible.",
    button: "Parler à BRAVA",
  },
  footer: {
    rights: "Tous droits réservés.",
  },
};
