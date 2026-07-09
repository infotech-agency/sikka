// // 'use client';

// // import { FileUp } from 'lucide-react';
// // import { jobs } from '@/lib/data';

// // export function CareersForm() {
// //   return (
// //     <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// //         <div>
// //           <label className="block text-sm font-medium text-[#374151] mb-2">Full Name *</label>
// //           <input
// //             type="text"
// //             required
// //             placeholder="Enter your full name"
// //             className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white"
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-medium text-[#374151] mb-2">Email Address *</label>
// //           <input
// //             type="email"
// //             required
// //             placeholder="Enter your email"
// //             className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white"
// //           />
// //         </div>
// //       </div>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// //         <div>
// //           <label className="block text-sm font-medium text-[#374151] mb-2">Phone Number *</label>
// //           <input
// //             type="tel"
// //             required
// //             placeholder="Enter your phone number"
// //             className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white"
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-medium text-[#374151] mb-2">Position Applied For *</label>
// //           <select
// //             required
// //             className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white"
// //           >
// //             <option value="">Select a position</option>
// //             {jobs.map((job) => (
// //               <option key={job.id} value={job.id}>{job.title}</option>
// //             ))}
// //           </select>
// //         </div>
// //       </div>
// //       <div>
// //         <label className="block text-sm font-medium text-[#374151] mb-2">Years of Experience</label>
// //         <input
// //           type="text"
// //           placeholder="e.g., 5 years"
// //           className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white"
// //         />
// //       </div>
// //       <div>
// //         <label className="block text-sm font-medium text-[#374151] mb-2">Cover Letter</label>
// //         <textarea
// //           rows={4}
// //           placeholder="Tell us about yourself and why you want to join Bharat E&IL"
// //           className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none resize-none bg-white"
// //         />
// //       </div>
// //       <div>
// //         <label className="block text-sm font-medium text-[#374151] mb-2">Resume / CV *</label>
// //         <div className="border-2 border-dashed border-gray-300 p-8 text-center hover:border-[#0B2E59] transition-colors cursor-pointer bg-white">
// //           <FileUp className="h-8 w-8 text-[#C8A14A] mx-auto mb-3" />
// //           <p className="text-sm text-[#374151] mb-1">Drag and drop your resume here, or click to browse</p>
// //           <p className="text-xs text-gray-400">PDF, DOC, DOCX up to 5MB</p>
// //         </div>
// //       </div>
// //       <button
// //         type="submit"
// //         className="w-full bg-[#0B2E59] text-white py-3 text-sm font-semibold hover:bg-[#1B4D8C] transition-colors"
// //       >
// //         Submit Application
// //       </button>
// //     </form>
// //   );
// // }


// 'use client';

// import { FileUp } from 'lucide-react';
// import { jobs } from '@/lib/data';

// import { useState, useRef, FormEvent, ChangeEvent } from 'react';
// import { BASE_URL } from '@/utils/baseUrl';

// interface FormData {
//   fullName: string;
//   email: string;
//   phoneNumber: string;
//   positionAppliedFor: string;
//   yearsOfExperience: string;
//   coverLetter: string;
// }

// export function CareersForm() {
//   const [formData, setFormData] = useState<FormData>({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     positionAppliedFor: '',
//     yearsOfExperience: '',
//     coverLetter: '',
//   });
//   const [resumeFile, setResumeFile] = useState<File | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
//     type: null,
//     message: '',
//   });
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       // Validate file size (5MB limit)
//       if (file.size > 5 * 1024 * 1024) {
//         setSubmitStatus({
//           type: 'error',
//           message: 'File size exceeds 5MB limit. Please compress your file.',
//         });
//         return;
//       }
      
//       setResumeFile(file);
//       setSubmitStatus({ type: null, message: '' });
//     }
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files?.[0];
//     if (file) {
//       if (file.size > 5 * 1024 * 1024) {
//         setSubmitStatus({
//           type: 'error',
//           message: 'File size exceeds 5MB limit. Please compress your file.',
//         });
//         return;
//       }
//       setResumeFile(file);
//       setSubmitStatus({ type: null, message: '' });
//     }
//   };

//   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
    
//     // Validate required fields
//     if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.positionAppliedFor) {
//       setSubmitStatus({
//         type: 'error',
//         message: 'Please fill in all required fields.',
//       });
//       return;
//     }
    
//     if (!resumeFile) {
//       setSubmitStatus({
//         type: 'error',
//         message: 'Please upload your resume.',
//       });
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus({ type: null, message: '' });

//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('fullName', formData.fullName);
//       formDataToSend.append('email', formData.email);
//       formDataToSend.append('phoneNumber', formData.phoneNumber);
//       formDataToSend.append('positionAppliedFor', formData.positionAppliedFor);
//       formDataToSend.append('yearsOfExperience', formData.yearsOfExperience || '');
//       formDataToSend.append('coverLetter', formData.coverLetter || '');
//       formDataToSend.append('resume', resumeFile);

//       const response = await fetch(`${BASE_URL}/careers/apply`, {
//         method: 'POST',
//         body: formDataToSend,
//       });
      
//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Failed to submit application');
//       }
//       console.log('Response Status:', response.status);
//     console.log('Response OK:', response.ok);
//     console.log('Response Data:', data);
//       setSubmitStatus({
//         type: 'success',
//         message: 'Application submitted successfully! We will contact you soon.',
//       });
      
//       // Reset form on success
//       setFormData({
//         fullName: '',
//         email: '',
//         phoneNumber: '',
//         positionAppliedFor: '',
//         yearsOfExperience: '',
//         coverLetter: '',
//       });
//       setResumeFile(null);
//       if (fileInputRef.current) {
//         fileInputRef.current.value = '';
//       }

//     } catch (error) {
//       console.error('Submission error:', error);
//       setSubmitStatus({
//         type: 'error',
//         message: error instanceof Error ? error.message : 'Failed to submit application. Please try again.',
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form className="space-y-6" onSubmit={handleSubmit}>
//       {submitStatus.type && (
//         <div className={`p-4 rounded-md ${
//           submitStatus.type === 'success' ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'
//         }`}>
//           {submitStatus.message}
//         </div>
//       )}
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-medium text-[#374151] mb-2">Full Name *</label>
//           <input
//             type="text"
//             name="fullName"
//             required
//             value={formData.fullName}
//             onChange={handleInputChange}
//             placeholder="Enter your full name"
//             className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-[#374151] mb-2">Email Address *</label>
//           <input
//             type="email"
//             name="email"
//             required
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Enter your email"
//             className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white"
//           />
//         </div>
//       </div>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-medium text-[#374151] mb-2">Phone Number *</label>
//           <input
//             type="tel"
//             name="phoneNumber"
//             required
//             value={formData.phoneNumber}
//             onChange={handleInputChange}
//             placeholder="Enter your phone number"
//             className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-[#374151] mb-2">Position Applied For *</label>
//           <select
//             name="positionAppliedFor"
//             required
//             value={formData.positionAppliedFor}
//             onChange={handleInputChange}
//             className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white"
//           >
//             <option value="">Select a position</option>
//             {jobs.map((job) => (
//               <option key={job.id} value={job.title}>{job.title}</option>
//             ))}
//           </select>
//         </div>
//       </div>
      
//       <div>
//         <label className="block text-sm font-medium text-[#374151] mb-2">Years of Experience</label>
//         <input
//           type="text"
//           name="yearsOfExperience"
//           value={formData.yearsOfExperience}
//           onChange={handleInputChange}
//           placeholder="e.g., 5 years"
//           className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white"
//         />
//       </div>
      
//       <div>
//         <label className="block text-sm font-medium text-[#374151] mb-2">Cover Letter</label>
//         <textarea
//           rows={4}
//           name="coverLetter"
//           value={formData.coverLetter}
//           onChange={handleInputChange}
//           placeholder="Tell us about yourself and why you want to join Bharat E&IL"
//           className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none resize-none bg-white"
//         />
//       </div>
      
//       <div>
//         <label className="block text-sm font-medium text-[#374151] mb-2">Resume / CV *</label>
//         <div 
//           className="border-2 border-dashed border-gray-300 p-8 text-center hover:border-[#0B2E59] transition-colors cursor-pointer bg-white"
//           onClick={() => fileInputRef.current?.click()}
//           onDrop={handleDrop}
//           onDragOver={handleDragOver}
//         >
//           <FileUp className="h-8 w-8 text-[#C8A14A] mx-auto mb-3" />
//           <input
//             type="file"
//             ref={fileInputRef}
//             onChange={handleFileChange}
//             accept=".pdf,.doc,.docx"
//             className="hidden"
//           />
//           {resumeFile ? (
//             <p className="text-sm text-[#0B2E59] font-medium">{resumeFile.name}</p>
//           ) : (
//             <>
//               <p className="text-sm text-[#374151] mb-1">Drag and drop your resume here, or click to browse</p>
//               <p className="text-xs text-gray-400">PDF, DOC, DOCX up to 5MB</p>
//             </>
//           )}
//         </div>
//       </div>
      
//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className={`w-full bg-[#0B2E59] text-white py-3 text-sm font-semibold transition-colors ${
//           isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#1B4D8C]'
//         }`}
//       >
//         {isSubmitting ? 'Submitting...' : 'Submit Application'}
//       </button>
//     </form>
//   );
// }


'use client';

import { FileUp } from 'lucide-react';
import { jobs } from '@/lib/data';
import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { BASE_URL } from '@/utils/baseUrl';



export function CareersForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    positionAppliedFor: '',
    yearsOfExperience: '',
    coverLetter: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setSubmitStatus({
          type: 'error',
          message: 'File size exceeds 5MB limit. Please compress your file.',
        });
        return;
      }
      setResumeFile(file);
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setSubmitStatus({
          type: 'error',
          message: 'File size exceeds 5MB limit. Please compress your file.',
        });
        return;
      }
      setResumeFile(file);
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.positionAppliedFor) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      });
      return;
    }

    if (!resumeFile) {
      setSubmitStatus({
        type: 'error',
        message: 'Please upload your resume.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      formDataToSend.append('positionAppliedFor', formData.positionAppliedFor);
      formDataToSend.append('yearsOfExperience', formData.yearsOfExperience || '');
      formDataToSend.append('coverLetter', formData.coverLetter || '');
      formDataToSend.append('resume', resumeFile);

      console.log('🚀 Sending request to:', `${BASE_URL}/careers/apply`);
      
      const response = await fetch(`${BASE_URL}/careers/apply`, {
        method: 'POST',
        body: formDataToSend,
      });

      console.log('📡 Response status:', response.status);
      console.log('📡 Response ok:', response.ok);

      // First get the response as text
      const responseText = await response.text();
      console.log('📝 Raw response:', responseText);

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('❌ Failed to parse JSON:', parseError);
        throw new Error('Invalid response from server');
      }

      if (!response.ok) {
        // Check if it's a validation error from multer or express-validator
        if (data.errors && Array.isArray(data.errors)) {
          const errorMessages = data.errors.map((err: any) => err.msg).join(', ');
          throw new Error(`Validation Error: ${errorMessages}`);
        }
        throw new Error(data.message || `Server error: ${response.status}`);
      }

      setSubmitStatus({
        type: 'success',
        message: '✅ Application submitted successfully! We will contact you soon.',
      });
      
      // Reset form on success
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        positionAppliedFor: '',
        yearsOfExperience: '',
        coverLetter: '',
      });
      setResumeFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

    } catch (error) {
      console.error('❌ Submission error:', error);
      
      let errorMessage = 'Failed to submit application. ';
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        errorMessage += 'Cannot connect to server. Please check if the backend is running.';
      } else if (error instanceof Error) {
        errorMessage += error.message;
      }
      
      setSubmitStatus({
        type: 'error',
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {submitStatus.type && (
        <div className={`p-4 rounded-md ${
          submitStatus.type === 'success' ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'
        }`}>
          {submitStatus.message}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-2">Full Name *</label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-2">Phone Number *</label>
          <input
            type="tel"
            name="phoneNumber"
            required
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-2">Position Applied For *</label>
          <select
            name="positionAppliedFor"
            required
            value={formData.positionAppliedFor}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white"
          >
            <option value="">Select a position</option>
            {jobs.map((job) => (
              <option key={job.id} value={job.title}>{job.title}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-[#374151] mb-2">Years of Experience</label>
        <input
          type="text"
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={handleInputChange}
          placeholder="e.g., 5 years"
          className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none bg-white"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-[#374151] mb-2">Cover Letter</label>
        <textarea
          rows={4}
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleInputChange}
          placeholder="Tell us about yourself and why you want to join Bharat E&IL"
          className="w-full px-4 py-3 border border-gray-300 text-sm focus:border-[#0B2E59] focus:outline-none resize-none bg-white"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-[#374151] mb-2">Resume / CV *</label>
        <div 
          className="border-2 border-dashed border-gray-300 p-8 text-center hover:border-[#0B2E59] transition-colors cursor-pointer bg-white"
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <FileUp className="h-8 w-8 text-[#C8A14A] mx-auto mb-3" />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            className="hidden"
          />
          {resumeFile ? (
            <p className="text-sm text-[#0B2E59] font-medium">{resumeFile.name}</p>
          ) : (
            <>
              <p className="text-sm text-[#374151] mb-1">Drag and drop your resume here, or click to browse</p>
              <p className="text-xs text-gray-400">PDF, DOC, DOCX up to 5MB</p>
            </>
          )}
        </div>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-[#0B2E59] text-white py-3 text-sm font-semibold transition-colors ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#1B4D8C]'
        }`}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
}