import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { needOptions, type NeedOption } from '../data/contact';
import { cn } from '../lib/cn';
import { whatsappLink } from '../lib/links';
import { QUOTE_EVENT, type QuoteDetail } from '../lib/quote';
import { WhatsAppIcon } from './BrandIcons';
import FormField from './FormField';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  need: NeedOption | '';
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: '', phone: '', email: '', need: '', message: '' };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.';
  const digits = values.phone.replace(/\D/g, '');
  if (digits.length < 9 || digits.length > 13) errors.phone = 'Please enter a valid phone number, e.g. 0712 345 678.';
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email address.';
  if (!values.need) errors.need = 'Please choose what you need.';
  if (values.message.trim().length < 5) errors.message = 'Please add a short message.';
  return errors;
}

function toWhatsAppMessage(v: FormValues) {
  return [
    'Hi Kwach Computers,',
    '',
    `Name: ${v.name}`,
    `Phone: ${v.phone}`,
    v.email && `Email: ${v.email}`,
    `I need: ${v.need}`,
    '',
    v.message,
  ]
    .filter((line) => line !== '')
    .join('\n');
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [submitted, setSubmitted] = useState<FormValues | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const uid = useId();

  // Pre-fill the form when a "Ask for a Quote" button elsewhere on the page is clicked.
  useEffect(() => {
    const onQuote = (e: Event) => {
      const { need, message } = (e as CustomEvent<QuoteDetail>).detail;
      setStatus('idle');
      setValues((v) => ({ ...v, need, message: v.message || message || '' }));
      setErrors((err) => ({ ...err, need: undefined }));
      window.setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 600);
    };
    window.addEventListener(QUOTE_EVENT, onQuote);
    return () => window.removeEventListener(QUOTE_EVENT, onQuote);
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as keyof FormValues]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }

    setStatus('submitting');

    // TODO: Connect a backend or form service here.
    // Options: Netlify Forms, Formspree, EmailJS, or your own API endpoint. Example:
    //   await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    //     body: JSON.stringify(values),
    //   });
    await new Promise((resolve) => setTimeout(resolve, 700));

    setSubmitted(values);
    setStatus('success');
    setValues(initialValues);
  };

  useEffect(() => {
    if (status === 'success') cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [status]);

  const field = (name: keyof FormValues) => ({
    id: `${uid}-${name}`,
    name,
    value: values[name],
    onChange,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${uid}-${name}-error` : undefined,
    className: cn('input', errors[name] && 'border-red-400 focus:border-red-500 focus:ring-red-500/15'),
  });

  return (
    <div ref={cardRef} id="contact-form" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-lift sm:p-8 lg:p-10">
      {status === 'success' && submitted ? (
        <div className="flex min-h-[420px] flex-col items-center justify-center text-center" role="status">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
            <CheckCircle2 size={34} aria-hidden="true" />
          </span>
          <h3 className="mt-6 text-2xl font-bold text-navy-950">Thanks, {submitted.name.split(' ')[0]}!</h3>
          <p className="mt-3 max-w-sm text-slate-600">
            We&apos;ve received your request. For the fastest response, you can also send it straight to us on WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(toWhatsAppMessage(submitted))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-6"
            >
              <WhatsAppIcon size={18} />
              Send via WhatsApp
            </a>
            <button type="button" onClick={() => setStatus('idle')} className="btn border border-slate-300 px-6 text-navy-900 hover:bg-slate-50">
              Send another request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate aria-label="Request a quote">
          <h3 className="text-2xl font-bold text-navy-950">Request a quote</h3>
          <p className="mt-2 text-slate-600">Fill in your details and we&apos;ll get back to you shortly.</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <FormField label="Full name" htmlFor={`${uid}-name`} error={errors.name} errorId={`${uid}-name-error`} required>
              <input {...field('name')} ref={nameRef} type="text" autoComplete="name" placeholder="e.g. Jane Wanjiku" />
            </FormField>
            <FormField label="Phone number" htmlFor={`${uid}-phone`} error={errors.phone} errorId={`${uid}-phone-error`} required>
              <input {...field('phone')} type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. 0712 345 678" />
            </FormField>
            <FormField label="Email" htmlFor={`${uid}-email`} error={errors.email} errorId={`${uid}-email-error`} hint="Optional">
              <input {...field('email')} type="email" autoComplete="email" placeholder="you@example.com" />
            </FormField>
            <FormField label="What do you need?" htmlFor={`${uid}-need`} error={errors.need} errorId={`${uid}-need-error`} required>
              <select {...field('need')} className={cn(field('need').className, !values.need && 'text-slate-400')}>
                <option value="" disabled>
                  Select an option
                </option>
                {needOptions.map((option) => (
                  <option key={option} value={option} className="text-navy-900">
                    {option}
                  </option>
                ))}
              </select>
            </FormField>
            <FormField
              label="Message"
              htmlFor={`${uid}-message`}
              error={errors.message}
              errorId={`${uid}-message-error`}
              required
              className="sm:col-span-2"
            >
              <textarea
                {...field('message')}
                rows={5}
                placeholder="Tell us about the device, budget or problem…"
                className={cn(field('message').className, 'resize-y')}
              />
            </FormField>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-primary mt-8 w-full py-3.5 disabled:opacity-70 sm:w-auto sm:px-8"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                Sending…
              </>
            ) : (
              <>
                <Send size={18} aria-hidden="true" />
                Submit Request
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
