import { useId, useState, type ChangeEvent, type FormEvent } from 'react';
import { needOptions, type NeedOption } from '../data/contact';
import { cn } from '../lib/cn';
import { whatsappLink } from '../lib/links';
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
    'Hi KWACH_001 COMPUTERS,',
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
  const uid = useId();

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as keyof FormValues]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }

    window.open(whatsappLink(toWhatsAppMessage(values)), '_blank', 'noopener,noreferrer');
  };

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
    <div id="contact-form" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-lift sm:p-8 lg:p-10">
        <form onSubmit={onSubmit} noValidate aria-label="Contact KWACH_001 COMPUTERS on WhatsApp">
          <h3 className="text-2xl font-bold text-navy-950">Send an enquiry</h3>
          <p className="mt-2 text-slate-600">Your message will open in WhatsApp for you to send.</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <FormField label="Full name" htmlFor={`${uid}-name`} error={errors.name} errorId={`${uid}-name-error`} required>
              <input {...field('name')} type="text" autoComplete="name" placeholder="Your name" />
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
              <textarea {...field('message')} rows={5} placeholder="Write your enquiry…" className={cn(field('message').className, 'resize-y')} />
            </FormField>
          </div>

          <button
            type="submit"
            className="btn-primary mt-8 w-full py-3.5 sm:w-auto sm:px-8"
          >
            <WhatsAppIcon size={18} aria-hidden="true" />
            Send via WhatsApp
          </button>
        </form>
    </div>
  );
}
