// 'use client';

// import { Send } from 'lucide-react';

// export function ContactPageForm() {
//   return (
//     <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//         <div>
//           <label className="block text-sm font-medium text-[#374151] mb-2">Full Name *</label>
//           <input
//             type="text"
//             required
//             placeholder="Your name"
//             className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-[#374151] mb-2">Email *</label>
//           <input
//             type="email"
//             required
//             placeholder="Your email"
//             className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white"
//           />
//         </div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//         <div>
//           <label className="block text-sm font-medium text-[#374151] mb-2">Phone</label>
//           <input
//             type="tel"
//             placeholder="Your phone number"
//             className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-[#374151] mb-2">Subject</label>
//           <select className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white">
//             <option value="">Select subject</option>
//             <option value="project-inquiry">Project Inquiry</option>
//             <option value="tender">Tender Information</option>
//             <option value="career">Career Opportunity</option>
//             <option value="partnership">Partnership</option>
//             <option value="general">General Inquiry</option>
//           </select>
//         </div>
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-[#374151] mb-2">Message *</label>
//         <textarea
//           rows={5}
//           required
//           placeholder="Your message"
//           className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none resize-none bg-white"
//         />
//       </div>
//       <button
//         type="submit"
//         className="inline-flex items-center gap-2 bg-[#0B2E59] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1B4D8C] transition-colors"
//       >
//         <Send className="h-4 w-4" />
//         Send Message
//       </button>
//     </form>
//   );
// }


'use client';

import { Send } from 'lucide-react';
import { useState } from 'react';
import { BASE_URL } from "@/utils/baseUrl";

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

export function ContactPageForm() {
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
    // Clear messages when user starts typing
    if (error) setError(null);
    if (success) setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trim all values for validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    // Check for empty required fields
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError('Please fill in all required fields (Name, Email, and Message)');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Log the request payload for debugging
      const payload = {
        name: trimmedName,
        email: trimmedEmail,
        phone: formData.phone.trim() || '',
        subject: 'Contact Page Inquiry',
        message: trimmedMessage
      };
      
      console.log('Sending payload:', payload);

      const response = await fetch(`${BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Get the response text first for debugging
      const responseText = await response.text();
      console.log('Raw response:', responseText);

      // Try to parse JSON
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Failed to parse JSON:', parseError);
        throw new Error(`Server returned invalid response: ${responseText.substring(0, 100)}`);
      }

      if (!response.ok) {
        throw new Error(data.message || data.error || `Server error: ${response.status}`);
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
        console.log('Inquiry submitted successfully:', data);
      } else {
        throw new Error(data.message || data.error || 'Submission failed');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {/* Success Message */}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3">
          ✓ Your inquiry has been submitted successfully! We'll get back to you soon.
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3">
          ⚠ {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            disabled={isLoading}
            className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email"
            disabled={isLoading}
            className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            disabled={isLoading}
            className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
        <div>
          {/* Removed dropdown - keeping empty div for grid layout */}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-[#374151] mb-2">Message *</label>
        <textarea
          rows={5}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Your message"
          disabled={isLoading}
          className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none resize-none bg-white disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex w-full items-center gap-2 bg-[#0B2E59] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1B4D8C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="h-4 w-4" />
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}