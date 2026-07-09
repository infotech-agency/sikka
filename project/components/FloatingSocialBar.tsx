'use client';

import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  {
    name: 'Facebook',
    icon: <Facebook className="h-5 w-5" />,
    url: 'https://facebook.com',
    color: 'border-[#3b5998] text-[#3b5998] hover:bg-[#3b5998]',
  },
  {
    name: 'X',
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    url: 'https://x.com',
    color: 'border-[#000000] text-[#000000] hover:bg-[#000000]',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="h-5 w-5" />,
    url: 'https://linkedin.com',
    color: 'border-[#0077b5] text-[#0077b5] hover:bg-[#0077b5]',
  },
  {
    name: 'Instagram',
    icon: <Instagram className="h-5 w-5" />,
    url: 'https://instagram.com',
    color: 'border-[#e1306c] text-[#e1306c] hover:bg-[#e1306c]',
  },
//   {
//     name: 'YouTube',
//     icon: <Youtube className="h-5 w-5" />,
//     url: 'https://youtube.com',
//     color: 'border-[#ff0000] text-[#ff0000] hover:bg-[#ff0000]',
//   },
];

export function FloatingSocialBar() {
  return (
    <div 
      className="fixed z-50 transition-all duration-300 ease-in-out
        /* Desktop: Fixed on Left Side, partially tucked away, fully pops out on hover */
        md:left-0 md:top-1/3 md:-translate-x-3 md:hover:translate-x-0 md:bottom-auto md:w-auto
        /* Mobile: Drops down to a fixed bottom navigation strip */
        bottom-0 left-0 w-full md:h-auto bg-white/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-t border-gray-200 md:border-none py-3 md:py-0 px-4 md:px-0"
    >
      <div className="flex md:flex-col justify-around md:justify-start items-center gap-4 bg-white md:shadow-lg md:border md:border-gray-100 md:rounded-r-2xl md:p-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow us on ${social.name}`}
            className={`
              w-10 h-10 md:w-12 md:h-12 
              flex items-center justify-center 
              rounded-full border-2 
              transition-all duration-300 transform hover:scale-110 hover:text-white
              ${social.color}
            `}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}