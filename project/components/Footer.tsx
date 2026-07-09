// // import Link from 'next/link';
// // import { Phone, Mail, MapPin, Linkedin, ChevronRight } from 'lucide-react';
// // import { companyInfo } from '@/lib/data';
// // import Image from 'next/image';

// // const footerLinks = {
// //   company: [
// //     { href: '/about', label: 'About Us' },
// //     { href: '/about#history', label: 'Our History' },
// //     { href: '/about#leadership', label: 'Leadership Team' },
// //     { href: '/about#values', label: 'Corporate Values' },
// //     { href: '/about#certifications', label: 'Certifications' },
// //   ],
// //   services: [
// //     { href: '/services', label: 'Engineering Consultancy' },
// //     { href: '/services', label: 'Infrastructure Development' },
// //     { href: '/services', label: 'Project Management' },
// //     { href: '/services', label: 'Industrial Construction' },
// //     { href: '/services', label: 'MEP Solutions' },
// //   ],
// //   projects: [
// //     { href: '/projects', label: 'Government Projects' },
// //     { href: '/projects', label: 'Infrastructure Projects' },
// //     { href: '/projects', label: 'Industrial Projects' },
// //     { href: '/projects', label: 'Utilities Projects' },
// //     { href: '/projects', label: 'All Projects' },
// //   ],
// //   quickLinks: [
// //     { href: '/careers', label: 'Careers' },
// //     { href: '/contact', label: 'Contact Us' },
// //     { href: '/projects', label: 'Project Portfolio' },
// //     { href: '/contact', label: 'Request a Quote' },
// //     { href: '/about', label: 'Company Profile' },
// //   ],
// // };

// // export function Footer() {
// //   return (
// //     <footer className="bg-white text-gray-800">
// //       <div className="max-w-7xl mx-auto px-4 py-16">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
// //           {/* Company Info */}
// //           <div className="lg:col-span-2">
// //             <div className="flex items-center gap-3 mb-6 ">
// //               {/* <div className="w-12 h-12 bg-white flex items-center justify-center">
// //                 <span className="text-[#0B2E59] font-bold text-xl font-[Merriweather]">B</span>
// //               </div> */}
// //               <div>
// //                 {/* <div className="font-bold text-lg leading-tight font-[Merriweather]">Bharat Engineering</div>
// //                 <div className="text-gray-400 text-xs tracking-wider uppercase">& Infrastructure Limited</div> */}
// //               </div>
// //                <Image src="/images/logo1.png" alt='LOGO' height={140} width={140}/>
// //             </div>
// //             <p className="text-gray-800 text-sm leading-relaxed mb-6 max-w-sm">
// //               Leading engineering, infrastructure and project execution partner serving government and private sectors across India for over 20 years.
// //             </p>
// //             <div className="space-y-3 text-sm">
// //               <div className="flex items-start gap-3 text-gray-800">
// //                 <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#C8A14A]" />
// //                 <span>{companyInfo.address}</span>
// //               </div>
// //               <div className="flex items-center gap-3 text-gray-800">
// //                 <Phone className="h-4 w-4 shrink-0 text-[#C8A14A]" />
// //                 <span>{companyInfo.phone}</span>
// //               </div>
// //               <div className="flex items-center gap-3 text-gray-800">
// //                 <Mail className="h-4 w-4 shrink-0 text-[#C8A14A]" />
// //                 <span>{companyInfo.email}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Company Links */}
// //           <div>
// //             <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#C8A14A]">Company</h4>
// //             <ul className="space-y-2">
// //               {footerLinks.company.map((link) => (
// //                 <li key={link.href + link.label}>
// //                   <Link href={link.href} className="text-gray-800 text-sm hover:text-[#C8A14A] transition-colors flex items-center gap-1">
// //                     <ChevronRight className="h-3 w-3" />
// //                     {link.label}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Services Links */}
// //           <div>
// //             <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#C8A14A]">Services</h4>
// //             <ul className="space-y-2">
// //               {footerLinks.services.map((link, i) => (
// //                 <li key={i}>
// //                   <Link href={link.href} className="text-gray-800 text-sm hover:text-[#C8A14A] transition-colors flex items-center gap-1">
// //                     <ChevronRight className="h-3 w-3" />
// //                     {link.label}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Quick Links */}
// //           <div>
// //             <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#C8A14A]">Quick Links</h4>
// //             <ul className="space-y-2">
// //               {footerLinks.quickLinks.map((link, i) => (
// //                 <li key={i}>
// //                   <Link href={link.href} className="text-gray-800 text-sm hover:text-[#C8A14A] transition-colors flex items-center gap-1">
// //                     <ChevronRight className="h-3 w-3" />
// //                     {link.label}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Bottom Bar */}
// //       <div className="border-t border-white/10">
// //         <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
// //           <p className="text-gray-800 text-sm">
// //             &copy; {new Date().getFullYear()} Bharat Engineering & Infrastructure Limited. All rights reserved.
// //           </p>
// //           <div className="flex items-center gap-6 text-gray-800">
// //             <Link href="#" className="text-gray-800 text-sm hover:text-white transition-colors">Privacy Policy</Link>
// //             <Link href="#" className="text-gray-800 text-sm hover:text-white transition-colors">Terms of Service</Link>
// //             <Link href="#" className="text-gray-800 text-sm hover:text-white transition-colors">Sitemap</Link>
// //             <a href={companyInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C8A14A] transition-colors">
// //               <Linkedin className="h-4 w-4" />
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// import Link from 'next/link';
// import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
// import { companyInfo } from '@/lib/data';
// import Image from 'next/image';

// const footerLinks = {
//   company: [
//     { href: '/about', label: 'About Us' },
//     { href: '/about#history', label: 'Our History' },
//     { href: '/about#leadership', label: 'Leadership Team' },
//     { href: '/about#values', label: 'Corporate Values' },
//     { href: '/about#certifications', label: 'Certifications' },
//   ],
//   services: [
//     { href: '/services', label: 'Engineering Consultancy' },
//     { href: '/services', label: 'Infrastructure Development' },
//     { href: '/services', label: 'Project Management' },
//     { href: '/services', label: 'Industrial Construction' },
//     { href: '/services', label: 'MEP Solutions' },
//   ],
//   projects: [
//     { href: '/projects', label: 'Government Projects' },
//     { href: '/projects', label: 'Infrastructure Projects' },
//     { href: '/projects', label: 'Industrial Projects' },
//     { href: '/projects', label: 'Utilities Projects' },
//     { href: '/projects', label: 'All Projects' },
//   ],
//   quickLinks: [
//     { href: '/careers', label: 'Careers' },
//     { href: '/contact', label: 'Contact Us' },
//     { href: '/projects', label: 'Project Portfolio' },
//     { href: '/contact', label: 'Request a Quote' },
//     { href: '/about', label: 'Company Profile' },
//   ],
// };

// // सोशल आइकन्स का डेटा उनके ओरिजिनल कलर्स के साथ
// const socialPlatforms = [
//   {
//     name: 'Facebook',
//     href: 'https://facebook.com',
//     icon: (
//       <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
//         <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//       </svg>
//     ),
//     color: 'text-[#1877F2] hover:opacity-80 transition-opacity'
//   },
//   {
//     name: 'X (Twitter)',
//     href: 'https://x.com',
//     icon: (
//       <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
//         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//       </svg>
//     ),
//     color: 'text-[#000000] hover:opacity-70 transition-opacity'
//   },
//   {
//     name: 'Instagram',
//     href: 'https://instagram.com',
//     icon: (
//       <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
//         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
//       </svg>
//     ),
//     color: 'text-[#E1306C] hover:opacity-80 transition-opacity'
//   },
//   {
//     name: 'LinkedIn',
//     href: companyInfo.linkedin || 'https://linkedin.com',
//     icon: (
//       <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
//         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//       </svg>
//     ),
//     color: 'text-[#0077B5] hover:opacity-80 transition-opacity'
//   }
// ];

// export function Footer() {
//   return (
//     <footer className="bg-white text-gray-800 border-t border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
//           {/* Company Info */}
//           <div className="lg:col-span-2">
//             <div className="flex items-center gap-3 mb-6 ">
//               <Image src="/images/logo1.png" alt='LOGO' height={140} width={140}/>
//             </div>
//             <p className="text-gray-800 text-sm leading-relaxed mb-6 max-w-sm">
//               Leading engineering, infrastructure and project execution partner serving government and private sectors across India for over 20 years.
//             </p>
//             <div className="space-y-3 text-sm">
//               <div className="flex items-start gap-3 text-gray-800">
//                 <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#C8A14A]" />
//                 <span>{companyInfo.address}</span>
//               </div>
//               <div className="flex items-center gap-3 text-gray-800">
//                 <Phone className="h-4 w-4 shrink-0 text-[#C8A14A]" />
//                 <span>{companyInfo.phone}</span>
//               </div>
//               <div className="flex items-center gap-3 text-gray-800">
//                 <Mail className="h-4 w-4 shrink-0 text-[#C8A14A]" />
//                 <span>{companyInfo.email}</span>
//               </div>
//             </div>
//           </div>

//           {/* Company Links */}
//           <div>
//             <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#C8A14A]">Company</h4>
//             <ul className="space-y-2">
//               {footerLinks.company.map((link) => (
//                 <li key={link.href + link.label}>
//                   <Link href={link.href} className="text-gray-800 text-sm hover:text-[#C8A14A] transition-colors flex items-center gap-1">
//                     <ChevronRight className="h-3 w-3" />
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services Links */}
//           <div>
//             <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#C8A14A]">Services</h4>
//             <ul className="space-y-2">
//               {footerLinks.services.map((link, i) => (
//                 <li key={i}>
//                   <Link href={link.href} className="text-gray-800 text-sm hover:text-[#C8A14A] transition-colors flex items-center gap-1">
//                     <ChevronRight className="h-3 w-3" />
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#C8A14A]">Quick Links</h4>
//             <ul className="space-y-2">
//               {footerLinks.quickLinks.map((link, i) => (
//                 <li key={i}>
//                   <Link href={link.href} className="text-gray-800 text-sm hover:text-[#C8A14A] transition-colors flex items-center gap-1">
//                     <ChevronRight className="h-3 w-3" />
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-200 bg-gray-50/50">
//         <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-gray-600 text-sm">
//             &copy; {new Date().getFullYear()} Bharat Engineering & Infrastructure Limited. All rights reserved.
//           </p>
//           <div className="flex items-center gap-6 text-gray-600">
//             <Link href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Privacy Policy</Link>
//             <Link href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Terms of Service</Link>
//             <Link href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Sitemap</Link>
            
//             {/* सोशल मीडिया आइकन्स की नयी लिस्ट (Actual Colors के साथ) */}
//             <div className="flex items-center gap-4 border-l border-gray-300 pl-4">
//               {socialPlatforms.map((platform) => (
//                 <a
//                   key={platform.name}
//                   href={platform.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={platform.name}
//                   className={platform.color}
//                 >
//                   {platform.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


"use client"
import Link from 'next/link';
import { Phone, Mail, MapPin, ChevronRight, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import { companyInfo } from '@/lib/data';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BASE_URL } from '@/utils/baseUrl';

const footerLinks = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/about#history', label: 'Our History' },
    { href: '/about#leadership', label: 'Leadership Team' },
    { href: '/about#values', label: 'Corporate Values' },
    { href: '/about#certifications', label: 'Certifications' },
  ],
  services: [
    { href: '/services', label: 'Engineering Consultancy' },
    { href: '/services', label: 'Infrastructure Development' },
    { href: '/services', label: 'Project Management' },
    { href: '/services', label: 'Industrial Construction' },
    { href: '/services', label: 'MEP Solutions' },
  ],
  projects: [
    { href: '/projects', label: 'Government Projects' },
    { href: '/projects', label: 'Infrastructure Projects' },
    { href: '/projects', label: 'Industrial Projects' },
    { href: '/projects', label: 'Utilities Projects' },
    { href: '/projects', label: 'All Projects' },
  ],
  quickLinks: [
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/projects', label: 'Project Portfolio' },
    { href: '/contact', label: 'Request a Quote' },
    { href: '/about', label: 'Company Profile' },
  ],
};

// सोशल आइकन्स का डेटा उनके ओरिजिनल कलर्स के साथ
const socialPlatforms = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
    color: 'text-[#1877F2] hover:opacity-80 transition-opacity'
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com',
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: 'text-[#000000] hover:opacity-70 transition-opacity'
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    color: 'text-[#E1306C] hover:opacity-80 transition-opacity'
  },
  {
    name: 'LinkedIn',
    href: companyInfo.linkedin || 'https://linkedin.com',
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    color: 'text-[#0077B5] hover:opacity-80 transition-opacity'
  }
];

export function Footer() {
  const [socialLinks, setSocialLinks] = useState({
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",
  youtube: "",
});

  useEffect(() => {
  const fetchSocialLinks = async () => {
    try {
      const res = await fetch(`${BASE_URL}/social-links`, {
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success && data.data) {
        setSocialLinks(data.data);
      }
    } catch (err) {
      console.error("Failed to fetch social links", err);
    }
  };

  fetchSocialLinks();
}, []);

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Company Info - Full width on mobile, spans 2 columns on lg */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/images/logo1.png" alt='LOGO' height={90} width={90} className="w-40" />
            </div>
            <p className="text-gray-800 text-sm leading-relaxed mb-6 max-w-sm">
              Leading engineering, infrastructure and project execution partner serving government and private sectors across India for over 30+ years.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-gray-800">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#EA4922]" />
                <span className="text-sm">{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <Phone className="h-4 w-4 shrink-0 text-[#EA4922]" />
                <span className="text-sm">{companyInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <Mail className="h-4 w-4 shrink-0 text-[#EA4922]" />
                <span className="text-sm truncate">{companyInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Company Links - 2 columns on mobile, single on tablet+ */}
          <div className="sm:col-span-1">
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-[#0B2E59]">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-gray-800 text-sm hover:text-[#EA4922] transition-colors flex items-center gap-1">
                    <ChevronRight className="h-3 w-3 shrink-0" />
                    <span className="text-sm">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="sm:col-span-1">
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-[#0B2E59]">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-800 text-sm hover:text-[#EA4922] transition-colors flex items-center gap-1">
                    <ChevronRight className="h-3 w-3 shrink-0" />
                    <span className="text-sm">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - Full width on mobile, spans last column on lg */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-[#0B2E59]">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-800 text-sm hover:text-[#EA4922] transition-colors flex items-center gap-1">
                    <ChevronRight className="h-3 w-3 shrink-0" />
                    <span className="text-sm">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Fully Responsive */}
      <div className="border-t border-gray-200 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Copyright - Full width on mobile, auto on larger */}
            <p className="text-gray-600 text-xs sm:text-sm text-center sm:text-left w-full sm:w-auto">
              &copy; {new Date().getFullYear()} Sikka Engineering Company Pvt. Limited. All rights reserved.
            </p>
            
            {/* Links & Social - Stack on mobile, row on larger */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Link href="/privacy" className="text-gray-600 text-xs sm:text-sm hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-300 hidden sm:inline">|</span>
                <Link href="/terms" className="text-gray-600 text-xs sm:text-sm hover:text-gray-900 transition-colors">
                  Terms
                </Link>
                <span className="text-gray-300 hidden sm:inline">|</span>
                <Link href="#" className="text-gray-600 text-xs sm:text-sm hover:text-gray-900 transition-colors">
                  Sitemap
                </Link>
              </div>
              
              {/* Social Icons - Always visible, responsive sizing */}
              <div className="flex items-center gap-3 sm:gap-4 border-t sm:border-t-0 sm:border-l border-gray-200 pt-3 sm:pt-0 sm:pl-4 w-full sm:w-auto justify-center">
                {/* {socialPlatforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform.name}
                    className={`${platform.color} transform hover:scale-110 transition-all duration-200`}
                  >
                    {platform.icon}
                  </a>
                ))} */}
                {socialLinks.facebook && (
  <a
    href={socialLinks.facebook}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Facebook  className="w-5 h-5" />
  </a>
)}

{socialLinks.instagram && (
  <a
    href={socialLinks.instagram}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Instagram className="w-5 h-5" />
  </a>
)}

{socialLinks.youtube && (
  <a
    href={socialLinks.youtube}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Youtube className="w-5 h-5" />
  </a>
)}

{socialLinks.linkedin && (
  <a
    href={socialLinks.linkedin}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="w-5 h-5" />
  </a>
)}

{socialLinks.twitter && (
  <a
    href={socialLinks.twitter}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Twitter className="w-5 h-5" />
  </a>
)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}