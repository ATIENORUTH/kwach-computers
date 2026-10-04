import { primaryPhone, site, type PhoneNumber } from '../config/site';

const digitsOnly = (value: string) => value.replace(/\D/g, '');

/** Builds a WhatsApp click-to-chat link in the official wa.me format. */
export function whatsappLink(message: string = site.whatsappGreeting, phone: PhoneNumber = primaryPhone) {
  return `https://wa.me/${digitsOnly(phone.international)}?text=${encodeURIComponent(message)}`;
}

export function telLink(phone: PhoneNumber = primaryPhone) {
  return `tel:${phone.international}`;
}

export function mailLink(subject = 'Enquiry from website', body?: string) {
  const params = new URLSearchParams({ subject });
  if (body) params.set('body', body);
  return `mailto:${site.email}?${params.toString().replace(/\+/g, '%20')}`;
}
