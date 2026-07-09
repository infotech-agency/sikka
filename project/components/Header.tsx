// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Menu, X, Phone, Mail, MapPin, Linkedin, ChevronRight } from 'lucide-react';
// import { companyInfo } from '@/lib/data';
// import { cn } from '@/lib/utils';
// import Image from 'next/image';

// const navLinks = [
//   { href: '/', label: 'Home' },
//   { href: '/about', label: 'About' },
//   { href: '/services', label: 'Services' },
//   { href: '', label: 'Projects' },
//   { href: '', label: 'Careers' },
//   { href: '', label: 'Contact' },
// ];

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className="w-full">
//       {/* Top Bar */}
//       <div className="bg-[#0B2E59] text-white py-2 px-4">
//         <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs">
//           <div className="flex items-center gap-6">
//             <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-1.5 hover:text-[#C8A14A] transition-colors">
//               <Phone className="h-3 w-3" />
//               <span>{companyInfo.phone}</span>
//             </a>
//             <a href={`mailto:${companyInfo.email}`} className="hidden sm:flex items-center gap-1.5 hover:text-[#C8A14A] transition-colors">
//               <Mail className="h-3 w-3" />
//               <span>{companyInfo.email}</span>
//             </a>
//           </div>
//           <div className="flex items-center gap-6">
//             <span className="hidden md:flex items-center gap-1.5">
//               <MapPin className="h-3 w-3" />
//               <span className="truncate max-w-xs">{companyInfo.address}</span>
//             </span>
//             <a href={companyInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#C8A14A] transition-colors">
//               <Linkedin className="h-3 w-3" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className={cn(
//         'bg-white border-b border-gray-200 transition-all duration-300',
//         isScrolled && 'fixed top-0 left-0 right-0 z-50 shadow-md'
//       )}>
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <Link href="/" className="flex items-center gap-3">
//               {/* <div className="w-10 h-10 bg-[#0B2E59] flex items-center justify-center">
//                 <span className="text-white font-bold text-lg font-[Merriweather]">B</span>
//               </div> */}
//               <div className="hidden sm:block">
//                 {/* <div className="text-[#0B2E59] font-bold text-sm leading-tight font-[Merriweather]">Bharat Engineering</div>
//                 <div className="text-[#374151] text-[10px] tracking-wider uppercase">& Infrastructure Limited</div> */}
               
//               </div>
//                <Image src="/images/logo1.png" alt='LOGO' height={140} width={140}/>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center gap-1">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={cn(
//                     'px-3 py-2 text-sm font-medium transition-colors',
//                     pathname === link.href
//                       ? 'text-[#0B2E59] border-b-2 border-[#EA4922]'
//                       : 'text-[#374151] hover:text-[#0B2E59]'
//                   )}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </nav>

//             {/* CTA Button */}
//             <div className="hidden lg:block">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 bg-[#0B2E59] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#1B4D8C] transition-colors"
//               >
//                 Get Consultation
//                 <ChevronRight className="h-4 w-4" />
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="lg:hidden p-2 text-[#0B2E59]"
//             >
//               {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden bg-white border-t border-gray-200">
//             <nav className="flex flex-col p-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className={cn(
//                     'px-4 py-3 text-sm font-medium border-b border-gray-100',
//                     pathname === link.href
//                       ? 'text-[#0B2E59] bg-[#F8FAFC]'
//                       : 'text-[#374151]'
//                   )}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//               <Link
//                 href="/contact"
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="mt-4 inline-flex items-center justify-center gap-2 bg-[#0B2E59] text-white px-5 py-3 text-sm font-semibold"
//               >
//                 Get Consultation
//                 <ChevronRight className="h-4 w-4" />
//               </Link>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Menu, X, Phone, Mail, MapPin, Linkedin, ChevronRight, ChevronDown } from 'lucide-react';
// import { companyInfo } from '@/lib/data';
// import { cn } from '@/lib/utils';
// import Image from 'next/image';

// const navLinks = [
//   { href: '/', label: 'Home' },
//   { href: '/services', label: 'Services' },
//   { href: '/projects', label: 'Projects' }, // Empty string ko fix kiya hai
// ];

// const companyDropdownLinks = [
//   { href: '/about', label: 'About Us' },
//   { href: '/careers', label: 'Careers' },
// ];

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
//   const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);
  
//   const pathname = usePathname();
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Check if current route is inside Company dropdown
//   const isCompanyActive = companyDropdownLinks.some(link => pathname === link.href);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };
    
//     // Close dropdown when clicking outside
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsCompanyDropdownOpen(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     document.addEventListener('mousedown', handleClickOutside);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <header className="w-full">
//       {/* Top Bar */}
//       <div className="bg-[#0B2E59] text-white py-2 px-4">
//         <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs">
//           <div className="flex items-center gap-6">
//             <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-1.5 hover:text-[#C8A14A] transition-colors">
//               <Phone className="h-3 w-3" />
//               <span>{companyInfo.phone}</span>
//             </a>
//             <a href={`mailto:${companyInfo.email}`} className="hidden sm:flex items-center gap-1.5 hover:text-[#C8A14A] transition-colors">
//               <Mail className="h-3 w-3" />
//               <span>{companyInfo.email}</span>
//             </a>
//           </div>
//           <div className="flex items-center gap-6">
//             <span className="hidden md:flex items-center gap-1.5">
//               <MapPin className="h-3 w-3" />
//               <span className="truncate max-w-xs">{companyInfo.address}</span>
//             </span>
//             <a href={companyInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#C8A14A] transition-colors">
//               <Linkedin className="h-3 w-3" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className={cn(
//         'bg-white border-b border-gray-200 transition-all duration-300',
//         isScrolled && 'fixed top-0 left-0 right-0 z-50 shadow-md'
//       )}>
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <Link href="/" className="flex items-center gap-3">
//                <Image src="/images/logo1.png" alt='LOGO' height={140} width={140}/>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center gap-1 h-full">
//               {/* Home & Other Links */}
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={cn(
//                     'px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent',
//                     pathname === link.href
//                       ? 'text-[#0B2E59] border-[#EA4922]'
//                       : 'text-[#374151] hover:text-[#0B2E59]'
//                   )}
//                 >
//                   {link.label}
//                 </Link>
//               ))}

//               {/* Beautiful Company Dropdown */}
//               <div 
//                 className="relative h-full flex items-center" 
//                 ref={dropdownRef}
//                 onMouseEnter={() => setIsCompanyDropdownOpen(true)}
//                 onMouseLeave={() => setIsCompanyDropdownOpen(false)}
//               >
//                 <button
//                   className={cn(
//                     'px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 border-b-2 border-transparent',
//                     isCompanyActive 
//                       ? 'text-[#0B2E59] border-[#EA4922]' 
//                       : 'text-[#374151] hover:text-[#0B2E59]'
//                   )}
//                 >
//                   Company
//                   <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isCompanyDropdownOpen && "rotate-180")} />
//                 </button>

//                 {/* Dropdown Menu Overlay */}
//                 {isCompanyDropdownOpen && (
//                   <div className="absolute top-[100%] left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-b-md py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
//                     {companyDropdownLinks.map((subLink) => (
//                       <Link
//                         key={subLink.href}
//                         href={subLink.href}
//                         className={cn(
//                           'block px-4 py-2.5 text-sm transition-colors',
//                           pathname === subLink.href
//                             ? 'text-[#0B2E59] bg-gray-50 font-semibold'
//                             : 'text-[#374151] hover:bg-gray-50 hover:text-[#0B2E59]'
//                         )}
//                       >
//                         {subLink.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Contact Link */}
//               <Link
//                 href="/contact"
//                 className={cn(
//                   'px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent',
//                   pathname === '/contact'
//                     ? 'text-[#0B2E59] border-[#EA4922]'
//                     : 'text-[#374151] hover:text-[#0B2E59]'
//                 )}
//               >
//                 Contact
//               </Link>
//             </nav>

//             {/* CTA Button */}
//             <div className="hidden lg:block">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 bg-[#0B2E59] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#1B4D8C] transition-colors"
//               >
//                 Get Consultation
//                 <ChevronRight className="h-4 w-4" />
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="lg:hidden p-2 text-[#0B2E59]"
//             >
//               {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-80px)] overflow-y-auto">
//             <nav className="flex flex-col p-4">
//               {/* Regular Mobile Links */}
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className={cn(
//                     'px-4 py-3 text-sm font-medium border-b border-gray-100',
//                     pathname === link.href ? 'text-[#0B2E59] bg-[#F8FAFC]' : 'text-[#374151]'
//                   )}
//                 >
//                   {link.label}
//                 </Link>
//               ))}

//               {/* Mobile Accordion for Company */}
//               <div className="border-b border-gray-100">
//                 <button
//                   onClick={() => setIsMobileCompanyOpen(!isMobileCompanyOpen)}
//                   className={cn(
//                     "w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-left",
//                     isCompanyActive ? "text-[#0B2E59]" : "text-[#374151]"
//                   )}
//                 >
//                   <span>Company</span>
//                   <ChevronDown className={cn("h-4 w-4 transition-transform", isMobileCompanyOpen && "rotate-180")} />
//                 </button>
                
//                 {isMobileCompanyOpen && (
//                   <div className="bg-gray-50 pl-4 transition-all">
//                     {companyDropdownLinks.map((subLink) => (
//                       <Link
//                         key={subLink.href}
//                         href={subLink.href}
//                         onClick={() => setIsMobileMenuOpen(false)}
//                         className={cn(
//                           'block px-4 py-3 text-sm font-medium border-b border-gray-200/50 last:border-none',
//                           pathname === subLink.href ? 'text-[#0B2E59] font-bold' : 'text-[#4B5563]'
//                         )}
//                       >
//                         {subLink.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Contact Link */}
//               <Link
//                 href="/contact"
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className={cn(
//                   'px-4 py-3 text-sm font-medium border-b border-gray-100',
//                   pathname === '/contact' ? 'text-[#0B2E59] bg-[#F8FAFC]' : 'text-[#374151]'
//                 )}
//               >
//                 Contact
//               </Link>

//               <Link
//                 href="/contact"
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="mt-4 inline-flex items-center justify-center gap-2 bg-[#0B2E59] text-white px-5 py-3 text-sm font-semibold"
//               >
//                 Get Consultation
//                 <ChevronRight className="h-4 w-4" />
//               </Link>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Menu, X, Phone, Mail, MapPin, Linkedin, ChevronRight, ChevronDown, Contact } from 'lucide-react';
// import { companyInfo } from '@/lib/data';
// import { cn } from '@/lib/utils';
// import Image from 'next/image';
// import { ContactPageForm } from './ContactPageForm';

// const navLinks = [
//   { href: '/', label: 'Home' },
//   { href: '/services', label: 'Services' },
//   { href: '/projects', label: 'Projects' },
// ];

// const companyDropdownLinks = [
//   { href: '/about', label: 'About Us' },
//   { href: '/careers', label: 'Careers' },
// ];

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
//   const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);
  
//   const pathname = usePathname();
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Check if current route is inside Company dropdown
//   const isCompanyActive = companyDropdownLinks.some(link => pathname === link.href);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };
    
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsCompanyDropdownOpen(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     document.addEventListener('mousedown', handleClickOutside);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <header className="w-full">
//       {/* Top Bar */}
//       <div className="bg-[#0B2E59] text-white py-2 px-4">
//         <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs">
//           <div className="flex items-center gap-6">
//             <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-1.5 hover:text-[#C8A14A] transition-colors">
//               <Phone className="h-3 w-3" />
//               <span>{companyInfo.phone}</span>
//             </a>
//             <a href={`mailto:${companyInfo.email}`} className="hidden sm:flex items-center gap-1.5 hover:text-[#C8A14A] transition-colors">
//               <Mail className="h-3 w-3" />
//               <span>{companyInfo.email}</span>
//             </a>
//           </div>
          
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className={cn(
//         'bg-white border-b border-gray-200 transition-all duration-300',
//         isScrolled && 'fixed top-0 left-0 right-0 z-50 shadow-md'
//       )}>
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             {/* <Link href="/" className="flex items-center gap-3">
//                <Image src="/images/logo1.png" alt='LOGO' height={140} width={140}/>
//             </Link> */}
//             <Link href="/" className="flex items-center justify-start shrink-0">
//   <div className="relative w-[200px] min-w-[80px] h-auto aspect-[200/50] lg:w-[220px]">
//     <Image 
//       src="/images/logo1.png" 
//       alt="Sikka Engineering Company Logo" 
//       fill
//       priority
//       sizes="(max-width: 1024px) 200px, 250px"
//       className="object-contain"
//     />
//   </div>
// </Link>
//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center gap-1 h-full">
//               {/* 1. Home Link */}
//               <Link
//                 href="/"
//                 className={cn(
//                   'px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent',
//                   pathname === '/'
//                     ? 'text-[#0B2E59] border-[#EA4922]'
//                     : 'text-[#374151] hover:text-[#0B2E59]'
//                 )}
//               >
//                 Home
//               </Link>

//               {/* 2. Company Dropdown (Now right after Home) */}
//               <div 
//                 className="relative h-full flex items-center" 
//                 ref={dropdownRef}
//                 onMouseEnter={() => setIsCompanyDropdownOpen(true)}
//                 onMouseLeave={() => setIsCompanyDropdownOpen(false)}
//               >
//                 <button
//                   className={cn(
//                     'px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 border-b-2 border-transparent',
//                     isCompanyActive 
//                       ? 'text-[#0B2E59] border-[#EA4922]' 
//                       : 'text-[#374151] hover:text-[#0B2E59]'
//                   )}
//                 >
//                   Company
//                   <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isCompanyDropdownOpen && "rotate-180")} />
//                 </button>

//                 {/* Dropdown Menu Overlay */}
//                 {isCompanyDropdownOpen && (
//                   <div className="absolute top-[100%] left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-b-md py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
//                     {companyDropdownLinks.map((subLink) => (
//                       <Link
//                         key={subLink.href}
//                         href={subLink.href}
//                         className={cn(
//                           'block px-4 py-2.5 text-sm transition-colors',
//                           pathname === subLink.href
//                             ? 'text-[#0B2E59] bg-gray-50 font-semibold'
//                             : 'text-[#374151] hover:bg-gray-50 hover:text-[#0B2E59]'
//                         )}
//                       >
//                         {subLink.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* 3. Services & Projects Links */}
//               {navLinks.slice(1).map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={cn(
//                     'px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent',
//                     pathname === link.href
//                       ? 'text-[#0B2E59] border-[#EA4922]'
//                       : 'text-[#374151] hover:text-[#0B2E59]'
//                   )}
//                 >
//                   {link.label}
//                 </Link>
//               ))}

//               {/* 4. Contact Link */}
//               {/* <Link
//                 href="/contact"
//                 className={cn(
//                   'px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent',
//                   pathname === '/contact'
//                     ? 'text-[#0B2E59] border-[#EA4922]'
//                     : 'text-[#374151] hover:text-[#0B2E59]'
//                 )}
//               >
//                 Contact
//               </Link> */}
//             </nav>

//             {/* CTA Button */}
//             <div className="hidden lg:block">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 bg-[#0B2E59] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#1B4D8C] transition-colors"
//               >
              
//                 <Contact className="h-4 w-4" />
//                  Contact Us
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="lg:hidden p-2 text-[#0B2E59]"
//             >
//               {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-80px)] overflow-y-auto">
//             <nav className="flex flex-col p-4">
//               {/* Mobile Home Link */}
//               <Link
//                 href="/"
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className={cn(
//                   'px-4 py-3 text-sm font-medium border-b border-gray-100',
//                   pathname === '/' ? 'text-[#0B2E59] bg-[#F8FAFC]' : 'text-[#374151]'
//                 )}
//               >
//                 Home
//               </Link>

//               {/* Mobile Accordion for Company (Now after Home) */}
//               <div className="border-b border-gray-100">
//                 <button
//                   onClick={() => setIsMobileCompanyOpen(!isMobileCompanyOpen)}
//                   className={cn(
//                     "w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-left",
//                     isCompanyActive ? "text-[#0B2E59]" : "text-[#374151]"
//                   )}
//                 >
//                   <span>Company</span>
//                   <ChevronDown className={cn("h-4 w-4 transition-transform", isMobileCompanyOpen && "rotate-180")} />
//                 </button>
                
//                 {isMobileCompanyOpen && (
//                   <div className="bg-gray-50 pl-4 transition-all">
//                     {companyDropdownLinks.map((subLink) => (
//                       <Link
//                         key={subLink.href}
//                         href={subLink.href}
//                         onClick={() => setIsMobileMenuOpen(false)}
//                         className={cn(
//                           'block px-4 py-3 text-sm font-medium border-b border-gray-200/50 last:border-none',
//                           pathname === subLink.href ? 'text-[#0B2E59] font-bold' : 'text-[#4B5563]'
//                         )}
//                       >
//                         {subLink.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Other Mobile Links (Services & Projects) */}
//               {navLinks.slice(1).map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className={cn(
//                     'px-4 py-3 text-sm font-medium border-b border-gray-100',
//                     pathname === link.href ? 'text-[#0B2E59] bg-[#F8FAFC]' : 'text-[#374151]'
//                   )}
//                 >
//                   {link.label}
//                 </Link>
//               ))}

//               {/* Contact Link */}
//               {/* <Link
//                 href="/contact"
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className={cn(
//                   'px-4 py-3 text-sm font-medium border-b border-gray-100',
//                   pathname === '/contact' ? 'text-[#0B2E59] bg-[#F8FAFC]' : 'text-[#374151]'
//                 )}
//               >
//                 Contact
//               </Link> */}

//               <Link
//                 href="/contact"
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="mt-4 inline-flex items-center justify-center gap-2 bg-[#0B2E59] text-white px-5 py-3 text-sm font-semibold"
//               >
//                 Contact US
//                 <Contact className="h-4 w-4" />
//               </Link>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, MapPin, Linkedin, ChevronRight, ChevronDown, Contact } from 'lucide-react';
import { companyInfo } from '@/lib/data';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ContactPageForm } from './ContactPageForm';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
   { href: '/contact', label: 'Contact Us' },
];

const companyDropdownLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/careers', label: 'Careers' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isCompanyActive = companyDropdownLinks.some(link => pathname === link.href);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCompanyDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Lock body scroll when contact modal is open
  useEffect(() => {
    if (isContactModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isContactModalOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsContactModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#0B2E59] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-1.5 hover:text-[#C8A14A] transition-colors">
              <Phone className="h-3 w-3" />
              <span>{companyInfo.phone}</span>
            </a>
            <a href={`mailto:${companyInfo.email}`} className="hidden sm:flex items-center gap-1.5 hover:text-[#C8A14A] transition-colors">
              <Mail className="h-3 w-3" />
              <span>{companyInfo.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={cn(
        'bg-white border-b border-gray-200 transition-all duration-300',
        isScrolled && 'fixed top-0 left-0 right-0 z-50 shadow-md'
      )}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center justify-start shrink-0">
              <div className="relative w-[200px] min-w-[80px] h-auto aspect-[200/50] lg:w-[220px]">
                <Image
                  src="/images/logo1.png"
                  alt="Sikka Engineering Company Logo"
                  fill
                  priority
                  sizes="(max-width: 1024px) 200px, 250px"
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 h-full">
              <Link
                href="/"
                className={cn(
                  'px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent',
                  pathname === '/'
                    ? 'text-[#0B2E59] border-[#EA4922]'
                    : 'text-[#374151] hover:text-[#0B2E59]'
                )}
              >
                Home
              </Link>

              {/* Company Dropdown */}
              <div
                className="relative h-full flex items-center"
                ref={dropdownRef}
                onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                onMouseLeave={() => setIsCompanyDropdownOpen(false)}
              >
                <button
                  className={cn(
                    'px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 border-b-2 border-transparent',
                    isCompanyActive
                      ? 'text-[#0B2E59] border-[#EA4922]'
                      : 'text-[#374151] hover:text-[#0B2E59]'
                  )}
                >
                  Company
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isCompanyDropdownOpen && "rotate-180")} />
                </button>

                {isCompanyDropdownOpen && (
                  <div className="absolute top-[100%] left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-b-md py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {companyDropdownLinks.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className={cn(
                          'block px-4 py-2.5 text-sm transition-colors',
                          pathname === subLink.href
                            ? 'text-[#0B2E59] bg-gray-50 font-semibold'
                            : 'text-[#374151] hover:bg-gray-50 hover:text-[#0B2E59]'
                        )}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services & Projects */}
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent',
                    pathname === link.href
                      ? 'text-[#0B2E59] border-[#EA4922]'
                      : 'text-[#374151] hover:text-[#0B2E59]'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button — now opens modal instead of navigating */}
            <div className="hidden lg:block">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#0B2E59] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#1B4D8C] transition-colors"
              >
                {/* <Contact className="h-4 w-4" /> */}
                Enquiry Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#0B2E59]"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="flex flex-col p-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'px-4 py-3 text-sm font-medium border-b border-gray-100',
                  pathname === '/' ? 'text-[#0B2E59] bg-[#F8FAFC]' : 'text-[#374151]'
                )}
              >
                Home
              </Link>

              <div className="border-b border-gray-100">
                <button
                  onClick={() => setIsMobileCompanyOpen(!isMobileCompanyOpen)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-left",
                    isCompanyActive ? "text-[#0B2E59]" : "text-[#374151]"
                  )}
                >
                  <span>Company</span>
                  <ChevronDown className={cn("h-4 w-4 transition-transform", isMobileCompanyOpen && "rotate-180")} />
                </button>

                {isMobileCompanyOpen && (
                  <div className="bg-gray-50 pl-4 transition-all">
                    {companyDropdownLinks.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          'block px-4 py-3 text-sm font-medium border-b border-gray-200/50 last:border-none',
                          pathname === subLink.href ? 'text-[#0B2E59] font-bold' : 'text-[#4B5563]'
                        )}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'px-4 py-3 text-sm font-medium border-b border-gray-100',
                    pathname === link.href ? 'text-[#0B2E59] bg-[#F8FAFC]' : 'text-[#374151]'
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* Contact button — opens modal, closes mobile menu first */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsContactModalOpen(true);
                }}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-[#0B2E59] text-white px-5 py-3 text-sm font-semibold"
              >
                Contact US
                <Contact className="h-4 w-4" />
              </button>
            </nav>
          </div>
        )}
      </div>

      {/* Contact Form Modal */}
      {isContactModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setIsContactModalOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Close contact form"
            >
              <X className="h-5 w-5 text-[#0B2E59]" />
            </button>

            <div className="p-6 sm:p-8">
              <ContactPageForm onClose={() => setIsContactModalOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}