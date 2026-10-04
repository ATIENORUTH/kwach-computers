import { useEffect, useState } from 'react';
import { whatsappLink } from '../lib/links';
import { cn } from '../lib/cn';
import { WhatsAppIcon } from './BrandIcons';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with KWACH_001 COMPUTERS on WhatsApp"
      className={cn(
        'fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition duration-300 hover:scale-105 hover:bg-whatsapp-dark sm:bottom-6 sm:right-6',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
      tabIndex={visible ? 0 : -1}
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
