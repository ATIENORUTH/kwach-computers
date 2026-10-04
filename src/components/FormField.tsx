import type { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  errorId: string;
  required?: boolean;
  hint?: string;
  className?: string;
  children: ReactNode;
}

export default function FormField({ label, htmlFor, error, errorId, required, hint, className, children }: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 flex items-center justify-between text-sm font-medium text-navy-900">
        <span>
          {label}
          {required && <span className="text-red-500"> *</span>}
        </span>
        {hint && <span className="text-xs font-normal text-slate-400">{hint}</span>}
      </label>
      {children}
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
