export const CONTACT_CONFIG = {
  // Coloca aquí tu número internacional de WhatsApp con código de país (ejemplo: 584121234567 o 573001234567)
  whatsappNumber: '573019314319',
  defaultMessage: 'Hola, me gustaría conversar sobre cómo optimizar los procesos y la rentabilidad de mi negocio.',
  packMessage: 'Hola, me interesa consultar el Pack 72h (Landing Page + Sistema de Captación a WhatsApp) para mi negocio.',
  githubUrl: 'https://github.com/JercolTechnologies',
};

export const getWhatsAppUrl = (customMessage?: string) => {
  const msg = encodeURIComponent(customMessage || CONTACT_CONFIG.defaultMessage);
  return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${msg}`;
};
