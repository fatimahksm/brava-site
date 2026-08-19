export type ServiceKey = "websites" | "digitalMenus" | "webApps" | "customSolutions";

export type SiteCopy = {
  nav: {
    services: string;
    about: string;
    why: string;
    process: string;
    faq: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    visualLabel: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: Record<ServiceKey, { title: string; description: string }>;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    accent: string;
  };
  why: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; description: string }>;
  };
  process: {
    eyebrow: string;
    title: string;
    items: Array<{ step: string; title: string; description: string }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  frontsey: {
    label: string;
    title: string;
    description: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    name: string;
    contact: string;
    service: string;
    message: string;
    selectPlaceholder: string;
    submit: string;
    whatsapp: string;
    email: string;
    instagram: string;
    serviceLabels: Record<ServiceKey, string>;
    whatsappTemplate: (values: {
      name: string;
      contact: string;
      service: string;
      message: string;
    }) => string;
  };
  finalCta: {
    title: string;
    description: string;
    button: string;
  };
  footer: {
    rights: string;
  };
};
