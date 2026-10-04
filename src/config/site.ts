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
  name: 'KWACH_001 COMPUTERS',
  handle: 'KWACH_001',
  tagline: 'Powering your digital world',

  /** First number is treated as the main number for buttons. */
  phones: [
    { display: '0785859442', international: '+254785859442' },
    { display: '0115552044', international: '+254115552044' },
  ] satisfies PhoneNumber[],

  email: 'kwachcomputers@gmail.com',

  /** Default text pre-filled when someone taps a WhatsApp button. */
  whatsappGreeting: "Hi KWACH_001 COMPUTERS, I'd like to ask about your products.",

  socials: {
    instagram: 'https://www.instagram.com/kwach_001_computers/',
    tiktok: 'https://www.tiktok.com/@kwach_001.computers',
  },
} as const;

export const primaryPhone = site.phones[0];
