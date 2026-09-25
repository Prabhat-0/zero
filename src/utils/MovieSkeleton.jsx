import React from 'react';

const MovieSkeleton = () => {
  // Generates an array containing exactly 20 empty placeholders
  const skeletonCards = Array.from({ length: 20 });

  return (
    <section className="w-full p-6 md:p-12 bg-transparent">
      
      <div className="w-56 h-10 bg-white/10 rounded-lg animate-pulse mb-8" />

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {skeletonCards.map((_, index) => (
          <div 
            key={index} 
            className="w-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="w-full h-80 bg-white/10 animate-pulse" />
           
            <div className="p-4 flex flex-col gap-3">
              <div className="w-[85%] h-5 bg-white/10 rounded animate-pulse" />
              <div className="flex justify-between items-center mt-1">
                <div className="w-12 h-4 bg-white/10 rounded animate-pulse" />
                <div className="w-16 h-5 bg-white/10 rounded animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieSkeleton;
