import React from 'react';

// Define the interface for our grid items
interface BusinessItem {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
}

export const BusinessSpheres: React.FC = () => {
  // Mock data representing the 5 business categories
  // Replace these URLs with your actual image paths
  const businessItems: BusinessItem[] = [
    {
      id: 1,
      title: 'Construction',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80', 
      link: '#',
    },
    {
      id: 2,
      title: 'Energy',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1679917152396-4b18accacb9d?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '#',
    },
    {
      id: 3,
      title: 'Hi-tech Manufacturing',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      link: '#',
    },
    {
      id: 4,
      title: 'Services',
      imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80',
      link: '#',
    },
    {
      id: 5,
      title: 'Allied Businesses',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      link: '#',
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Left Intro Card */}
        <div className="flex flex-col justify-center pr-4 mb-6 lg:mb-0">
          <h2 className="text-2xl md:text-3xl font-black text-[#0B2E59] tracking-tight leading-tight uppercase mb-6">
            From Megastructures to <br className="hidden md:inline" /> Microchips
          </h2>
          <p className="text-[#374151] text-sm md:text-base font-normal leading-relaxed mb-8">
            L&T leads in nearly every sphere of business it operates in. Serving customers in more than 50 countries, across various industries. Explore our offerings by Industry or by Business.
          </p>
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#1B4D8C] text-[#1B4D8C] font-semibold text-sm rounded-full hover:bg-[#1B4D8C] hover:text-white transition-colors duration-300 group"
            >
              Know More
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Dynamic Image Grid Items */}
        {businessItems.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="group relative h-[280px] w-full overflow-hidden rounded-sm block cursor-pointer shadow-sm"
          >
            {/* Background Image */}
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
            />

            {/* Dark Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Bottom Content Row */}
            <div className="absolute bottom-0 inset-x-0 p-6 flex justify-between items-center">
              <h3 className="text-white font-sans text-lg font-semibold tracking-wide">
                {item.title}
              </h3>
              
              {/* White Circular Arrow Button */}
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0B2E59] transform group-hover:scale-110 transition-transform duration-300 shadow-md">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </a>
        ))}

      </div>
    </section>
  );
};

export default BusinessSpheres;