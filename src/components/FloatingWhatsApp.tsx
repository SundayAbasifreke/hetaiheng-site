import { MessageCircle } from 'lucide-react';
import { hospital } from '@/data/content';

export function FloatingWhatsApp() {
  return (
    <a
      href={hospital.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-success-500 p-4 text-white shadow-lg transition-all duration-300 hover:bg-success-600 hover:shadow-xl"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[140px] group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
