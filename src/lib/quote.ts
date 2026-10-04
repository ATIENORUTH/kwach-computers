import type { NeedOption } from '../data/contact';

export const QUOTE_EVENT = 'kwach:quote';

export interface QuoteDetail {
  need: NeedOption;
  message?: string;
}

/** Scrolls to the contact form and pre-fills it with the selected need. */
export function requestQuote(detail: QuoteDetail) {
  window.dispatchEvent(new CustomEvent<QuoteDetail>(QUOTE_EVENT, { detail }));
  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
