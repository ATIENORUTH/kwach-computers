/**
 * Business details used across the whole site.
 * Edit this file to update phone numbers, email, socials, etc.
 */

export interface PhoneNumber {
  /** How the number is shown on the site */
  display: string;
  /** International format, digits only after the "+" (used for tel: and wa.me links) */
  international: string;
}

export const site = {
  name: 'Kwach Computers',
  handle: 'KWACH_001',
  tagline: 'Powering your digital world',
  strapline: 'Computers • Accessories • Repairs • IT Solutions',
  values: ['Fast', 'Reliable', 'Affordable'],
  url: 'https://kwachcomputers.com',

  /** First number is treated as the main number for buttons. */
  phones: [
    { display: '0785 859 442', international: '+254785859442' },
    { display: '0115 552 044', international: '+254115552044' },
  ] satisfies PhoneNumber[],

  email: 'kwachcomputers@gmail.com',

  // TODO: update with your shop location and real opening hours.
  location: 'Kenya — visits by appointment',
  hours: 'Mon – Sat, 8:00 AM – 7:00 PM',

  /** Default text pre-filled when someone taps a WhatsApp button. */
  whatsappGreeting: "Hi Kwach Computers, I'd like to make an enquiry.",

  /** WhatsApp channel (from the QR code on the flyer). */
  whatsappChannel: 'https://whatsapp.com/channel/0029VbBREb23rZZUpcNx761Y',

  // TODO: replace with your real social media profile links.
  socials: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    tiktok: 'https://www.tiktok.com/',
  },
} as const;

export const primaryPhone = site.phones[0];
