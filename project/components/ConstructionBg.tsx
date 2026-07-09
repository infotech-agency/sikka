// 'use client';

// import React, { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const sliderImages = [
//   'https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   'https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?q=80&w=1046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   'https://images.unsplash.com/photo-1545186070-de624ed19875?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// ];

// const ConstructionBg = () => {
//   const [current, setCurrent] = useState(0);

//   const goNext = useCallback(() => {
//     setCurrent((prev) => (prev + 1) % sliderImages.length);
//   }, []);

//   const goPrev = () => {
//     setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
//   };

//   useEffect(() => {
//     const timer = setInterval(goNext, 4000);
//     return () => clearInterval(timer);
//   }, [goNext]);

//   return (
//     <section className="relative w-full min-h-[60vh] md:min-h-screen overflow-hidden">
//       {/* Fixed background — same as before */}
//       <div
//         className="absolute inset-0 bg-center bg-cover bg-no-repeat"
//         style={{
//           backgroundImage: "url('https://images.jdmagicbox.com/v2/comp/navi_mumbai/a9/022pxx22.xx22.220521091933.c2a9/catalogue/bg-shirke-construction-taloja-navi-mumbai-construction-companies-wD1HbG8afV.jpg')",
//         }}
//       />
//       <div className="absolute inset-0 bg-[#0B2E59]/70" />

//       {/* Center content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] md:min-h-screen px-4 py-12">
//         {/* Heading above the slider */}
//         <div className="text-center text-white mb-8">
//           <div className="flex items-center justify-center gap-2 mb-3">
//             <div className="h-px w-8 bg-[#EA4922]" />
//             <span className="text-[#EA4922] text-xs md:text-sm font-semibold uppercase tracking-wider">
//               Our Work
//             </span>
//             <div className="h-px w-8 bg-[#EA4922]" />
//           </div>
//           <h2 className="text-2xl md:text-4xl font-bold">
//             A Glimpse of Our Engineering Work
//           </h2>
//           <p className="mt-3 text-sm md:text-base text-gray-200 max-w-xl mx-auto">
//             From foundation to completion — see how we bring infrastructure projects to life across India.
//           </p>
//         </div>

//         {/* Slider */}
//         <div className="relative w-full max-w-3xl">
//           <div className="relative w-full h-[260px] sm:h-[360px] md:h-[480px] overflow-hidden rounded-lg shadow-2xl border border-white/10">
//             {sliderImages.map((src, index) => (
//               <div
//                 key={src}
//                 className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//                   index === current ? 'opacity-100' : 'opacity-0'
//                 }`}
//               >
//                 <Image
//                   src={src}
//                   alt={`Slide ${index + 1}`}
//                   fill
//                   className="object-cover"
//                   priority={index === 0}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Arrows */}
//           <button
//             onClick={goPrev}
//             aria-label="Previous slide"
//             className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
//           >
//             <ChevronLeft className="h-5 w-5" />
//           </button>
//           <button
//             onClick={goNext}
//             aria-label="Next slide"
//             className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
//           >
//             <ChevronRight className="h-5 w-5" />
//           </button>

//           {/* Dots */}
//           <div className="flex items-center justify-center gap-2 mt-4">
//             {sliderImages.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrent(index)}
//                 aria-label={`Go to slide ${index + 1}`}
//                 className={`h-2 rounded-full transition-all ${
//                   index === current ? 'w-6 bg-[#EA4922]' : 'w-2 bg-white/50 hover:bg-white/80'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConstructionBg;

// 'use client';

// import React, { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { BASE_URL } from '@/utils/baseUrl';
// import axios from "axios";

// const API = `${BASE_URL}/images`;

// const ConstructionBg = () => {
//   const [sliderImages, setSliderImages] = useState<string[]>([]);
//   const [current, setCurrent] = useState(0);

//   const fetchImages = async () => {
//     try {
//       const { data } = await axios.get(API);
//       console.log("data",data)

//       // API Response => { success:true, data:[{image:"..."}, ...] }
//       setSliderImages(data.data.map((item: any) => item.image));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const goNext = useCallback(() => {
//     if (!sliderImages.length) return;
//     setCurrent((prev) => (prev + 1) % sliderImages.length);
//   }, [sliderImages]);

//   const goPrev = () => {
//     if (!sliderImages.length) return;
//     setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
//   };

//   useEffect(() => {
//     if (sliderImages.length <= 1) return;

//     const timer = setInterval(goNext, 4000);

//     return () => clearInterval(timer);
//   }, [goNext, sliderImages]);

//   if (!sliderImages.length) return null;

//   return (
//     <section className="relative w-full min-h-[60vh] md:min-h-screen overflow-hidden">
//       <div
//         className="absolute inset-0 bg-center bg-cover bg-no-repeat"
//         style={{
//           backgroundImage:
//             "url('https://images.jdmagicbox.com/v2/comp/navi_mumbai/a9/022pxx22.xx22.220521091933.c2a9/catalogue/bg-shirke-construction-taloja-navi-mumbai-construction-companies-wD1HbG8afV.jpg')",
//         }}
//       />

//       <div className="absolute inset-0 bg-[#0B2E59]/70" />

//       <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] md:min-h-screen px-4 py-12">
//         {/* Heading */}

//         <div className="text-center text-white mb-8">
//           <div className="flex items-center justify-center gap-2 mb-3">
//             <div className="h-px w-8 bg-[#EA4922]" />
//             <span className="text-[#EA4922] text-xs md:text-sm font-semibold uppercase tracking-wider">
//               Our Work
//             </span>
//             <div className="h-px w-8 bg-[#EA4922]" />
//           </div>

//           <h2 className="text-2xl md:text-4xl font-bold">
//             A Glimpse of Our Engineering Work
//           </h2>

//           <p className="mt-3 text-sm md:text-base text-gray-200 max-w-xl mx-auto">
//             From foundation to completion — see how we bring infrastructure
//             projects to life across India.
//           </p>
//         </div>

//         {/* Slider */}

//         <div className="relative w-full max-w-3xl">
//           <div className="relative w-full h-[260px] sm:h-[360px] md:h-[480px] overflow-hidden rounded-lg shadow-2xl border border-white/10">
//             {sliderImages.map((src, index) => (
//               <div
//                 key={index}
//                 className={`absolute inset-0 transition-opacity duration-700 ${
//                   current === index ? 'opacity-100' : 'opacity-0'
//                 }`}
//               >
//                 <Image
//                   src={src}
//                   alt={`Slide ${index + 1}`}
//                   fill
//                   className="object-cover"
//                   priority={index === 0}
//                 />
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={goPrev}
//             className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full"
//           >
//             <ChevronLeft />
//           </button>

//           <button
//             onClick={goNext}
//             className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full"
//           >
//             <ChevronRight />
//           </button>

//           <div className="flex justify-center gap-2 mt-5">
//             {sliderImages.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrent(index)}
//                 className={`h-2 rounded-full transition-all ${
//                   current === index
//                     ? 'w-6 bg-[#EA4922]'
//                     : 'w-2 bg-white/50'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConstructionBg;

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BASE_URL } from '@/utils/baseUrl';
import axios from 'axios';

const API = `${BASE_URL}/images`;

const ConstructionBg = () => {
  const [sliderImages, setSliderImages] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await axios.get(API);
      console.log('images api response', data);

      // API Response => { success:true, data:[{image:"..."}, ...] }
      if (data?.success && Array.isArray(data.data)) {
        setSliderImages(data.data.map((item: any) => item.image).filter(Boolean));
      } else {
        setError('Unexpected response shape from /images');
      }
    } catch (err: any) {
      // Log the real reason (CORS, 404, network, etc.) instead of hiding it
      console.error('Error fetching slider images:', err?.response?.status, err?.message);
      setError(err?.response ? `API error: ${err.response.status}` : 'Network error while fetching images');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const goNext = useCallback(() => {
    if (!sliderImages.length) return;
    setCurrent((prev) => (prev + 1) % sliderImages.length);
  }, [sliderImages]);

  const goPrev = () => {
    if (!sliderImages.length) return;
    setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  useEffect(() => {
    if (sliderImages.length <= 1) return;
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [goNext, sliderImages]);

  return (
    <section className="relative w-full min-h-[60vh] md:min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.jdmagicbox.com/v2/comp/navi_mumbai/a9/022pxx22.xx22.220521091933.c2a9/catalogue/bg-shirke-construction-taloja-navi-mumbai-construction-companies-wD1HbG8afV.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-[#0B2E59]/70" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] md:min-h-screen px-4 py-12">
        {/* Heading */}
        <div className="text-center text-white mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-[#EA4922]" />
            <span className="text-[#EA4922] text-xs md:text-sm font-semibold uppercase tracking-wider">
              Our Work
            </span>
            <div className="h-px w-8 bg-[#EA4922]" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold">
            A Glimpse of Our Engineering Work
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-200 max-w-xl mx-auto">
            From foundation to completion — see how we bring infrastructure
            projects to life across India.
          </p>
        </div>

        {/* Slider */}
        <div className="relative w-full max-w-3xl">
          <div className="relative w-full h-[260px] sm:h-[360px] md:h-[480px] overflow-hidden rounded-lg shadow-2xl border border-white/10 bg-black/20">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-r-transparent" />
              </div>
            ) : error ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                <p className="text-white/90 text-sm">{error}</p>
                <button
                  onClick={fetchImages}
                  className="text-xs font-semibold bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : sliderImages.length === 0 ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/70 text-sm">No images available</p>
              </div>
            ) : (
              sliderImages.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    current === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {/* Plain img tag: avoids next/image "domain not configured"
                      crashes when the API returns hosts (e.g. Cloudinary)
                      that aren't whitelisted in next.config.js */}
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))
            )}
          </div>

          {sliderImages.length > 1 && (
            <>
              <button
                onClick={goPrev}
                aria-label="Previous slide"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="text-white" />
              </button>

              <button
                onClick={goNext}
                aria-label="Next slide"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
              >
                <ChevronRight className="text-white" />
              </button>

              <div className="flex justify-center gap-2 mt-5">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      current === index ? 'w-6 bg-[#EA4922]' : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConstructionBg;