import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function HeroSection() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="relative pt-20 w-full py-14 md:py-18 lg:py-26 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-blue-500/20 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-purple-500/20 to-transparent"></div>
      </div>

      {/* Container for centering content */}
      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        {/* Removed grid, now stacking content directly */}
        {/* Wrapper for stacked content with vertical spacing and centering */}
        <div className="w-full flex flex-col items-center space-y-12"> {/* Added flex-col items-center and space-y for vertical gap */}

          {/* Text Content Block - Centered and max-width */}
          <div className="max-w-3xl mx-auto text-center space-y-6"> {/* Centered block, limited max-width, centered text */}
            {/* Heading - Increased font size */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              Create Stunning <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Fashion Ads</span> with Just a Prompt
            </h1>
            {/* Paragraph - Added mx-auto to center if max-width is used */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto"> {/* Added mx-auto */}
              Upload your product image, describe the vibe, and let our AI handle the rest.
            </p>

            {/* Button Wrapper - Centered horizontally */}
            <a href="/signup">
            <div className="flex justify-center pt-8"> {/* Use justify-center to center the button */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-lg shadow-blue-500/20 dark:shadow-blue-800/30 transition-all duration-300 transform hover:scale-105"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Get Started {isHovering ? "→" : ""}
              </Button>
            </div>
            </a>
          </div>

          {/* Swiper Carousel Block - Centered and max-width */}
          <div className="w-full max-w-2xl mx-auto aspect-video relative overflow-hidden rounded-2xl shadow-2xl shadow-gray-400/20 dark:shadow-black/40 bg-white dark:bg-gray-800"> {/* Centered block, limited max-width, aspect ratio */}
            {/* Swiper Carousel Block - Centered and max-width */}
          {/* Swiper Carousel Block - Centered and max-w */}
          <div className="w-full max-w-5xl mx-auto relative overflow-hidden rounded-2xl shadow-2xl shadow-gray-400/20 dark:shadow-black/40 bg-white dark:bg-gray-800"> {/* Removed aspect-video class */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={30}
              effect={"fade"}
              navigation={false}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="w-full h-full" // w-full and h-full here are important {/* Moved comment here */}
            >
              {/* Swiper Slides */}
              <SwiperSlide>
                {/* object-contain is correct for no cropping */}
                <img src="../assets/fashion-5.webp" alt="Fashion Ad 1" className="w-full h-full object-contain" /> {/* w-full h-full and object-contain are key */}
              </SwiperSlide>
              <SwiperSlide>
                {/* object-contain is correct for no cropping */}
                <img src="../assets/fashion-6.jpg" alt="Fashion Ad 2" className="w-full h-full object-contain" /> {/* w-full h-full and object-contain are key */}
              </SwiperSlide>
              <SwiperSlide>
                {/* object-contain is correct for no cropping */}
                <img src="../assets/fashion-7.avif" alt="Fashion Ad 3" className="w-full h-full object-contain" /> {/* w-full h-full and object-contain are key */}
              </SwiperSlide>
              <SwiperSlide>
                {/* object-contain is correct for no cropping */}
                <img src="../assets/fashion-3 copy.jpg" alt="Fashion Ad 4" className="w-full h-full object-contain" /> {/* w-full h-full and object-contain are key */}
              </SwiperSlide>
              {/* Add more SwiperSlide components for additional images */}
            </Swiper>

          </div>

            {/* Decorative Elements (positioned relative to the carousel block) */}
            <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-xl z-[2]"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-xl z-[2]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;