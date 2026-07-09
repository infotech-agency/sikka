// // 'use client';

// // export function ContactForm() {
// //   return (
// //     <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //         <div>
// //           <label className="block text-sm font-medium text-[#374151] mb-1">Full Name</label>
// //           <input
// //             type="text"
// //             placeholder="Enter your name"
// //             className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none"
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-medium text-[#374151] mb-1">Email</label>
// //           <input
// //             type="email"
// //             placeholder="Enter your email"
// //             className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none"
// //           />
// //         </div>
// //       </div>
// //       <div>
// //         <label className="block text-sm font-medium text-[#374151] mb-1">Phone</label>
// //         <input
// //           type="tel"
// //           placeholder="Enter your phone number"
// //           className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none"
// //         />
// //       </div>
// //       <div>
// //         <label className="block text-sm font-medium text-[#374151] mb-1">Message</label>
// //         <textarea
// //           rows={4}
// //           placeholder="Describe your project or inquiry"
// //           className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none resize-none"
// //         />
// //       </div>
// //       <button
// //         type="submit"
// //         className="w-full bg-[#EA4922] text-white py-3 text-sm font-semibold hover:bg-[#1B4D8C] transition-colors"
// //       >
// //         Submit Inquiry
// //       </button>
// //     </form>
// //   );
// // }

// 'use client';

// import { BASE_URL } from "@/utils/baseUrl";


// export function ContactForm() {
//   const handleSubmit = async()=>{

//   }
//   return (
//     <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div>
//           {/* Label ko clean generic classes di hain */}
//           <label className="block text-sm font-semibold text-slate-700 mb-1">
//             Full Name
//           </label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             /* FIXED: Borders aur text focus elements ab design palette follow karenge */
//             className="w-full px-4 py-3 border border-input text-slate-900 text-sm focus:border-[#0B2E59] focus:ring-1 focus:ring-[#0B2E59] focus:outline-none rounded-sm transition-all"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-slate-700 mb-1">
//             Email
//           </label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full px-4 py-3 border border-input text-slate-900 text-sm focus:border-[#0B2E59] focus:ring-1 focus:ring-[#0B2E59] focus:outline-none rounded-sm transition-all"
//           />
//         </div>
//       </div>
//       <div>
//         <label className="block text-sm font-semibold text-slate-700 mb-1">
//           Phone
//         </label>
//         <input
//           type="tel"
//           placeholder="Enter your phone number"
//           className="w-full px-4 py-3 border border-input text-slate-900 text-sm focus:border-[#0B2E59] focus:ring-1 focus:ring-[#0B2E59] focus:outline-none rounded-sm transition-all"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-semibold text-slate-700 mb-1">
//           Message
//         </label>
//         <textarea
//           rows={4}
//           placeholder="Describe your project or inquiry"
//           className="w-full px-4 py-3 border border-input text-slate-900 text-sm focus:border-[#0B2E59] focus:ring-1 focus:ring-[#0B2E59] focus:outline-none resize-none rounded-sm transition-all"
//         />
//       </div>
      
//       {/* BUTTON FIXED: Orangey Red main state, aur hover par Deep Sapphire (#0B2E59) setup kiya hai */}
//       <button
//         type="submit"
//         className="w-full bg-[#EA4922] text-white py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#0B2E59] transition-colors rounded-sm shadow-sm"
//       >
//         Submit Inquiry
//       </button>
//     </form>
//   );
// }

'use client';

import { BASE_URL } from "@/utils/baseUrl";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
  };
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors when user starts typing
    if (error) setError(null);
    if (success) setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: 'Contact Form Inquiry', // You can make this dynamic if needed
          message: formData.message
        }),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit inquiry');
      }

      if (data.success) {
        setSuccess(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        // Optionally show success message
        console.log('Inquiry submitted:', data);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Success Message */}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-sm">
          ✓ Your inquiry has been submitted successfully! We'll get back to you soon.
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm">
          ⚠ {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full px-4 py-3 border border-input text-slate-900 text-sm focus:border-[#0B2E59] focus:ring-1 focus:ring-[#0B2E59] focus:outline-none rounded-sm transition-all"
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 border border-input text-slate-900 text-sm focus:border-[#0B2E59] focus:ring-1 focus:ring-[#0B2E59] focus:outline-none rounded-sm transition-all"
            disabled={isLoading}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
          className="w-full px-4 py-3 border border-input text-slate-900 text-sm focus:border-[#0B2E59] focus:ring-1 focus:ring-[#0B2E59] focus:outline-none rounded-sm transition-all"
          disabled={isLoading}
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your project or inquiry"
          required
          className="w-full px-4 py-3 border border-input text-slate-900 text-sm focus:border-[#0B2E59] focus:ring-1 focus:ring-[#0B2E59] focus:outline-none resize-none rounded-sm transition-all"
          disabled={isLoading}
        />
      </div>
      
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#EA4922] text-white py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#0B2E59] transition-colors rounded-sm shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Submitting...' : 'Submit Inquiry'}
      </button>
    </form>
  );
}