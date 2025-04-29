import React from 'react';
import { Button } from "@/Components/ui/button";
import { FaBeer as Icon } from 'react-icons/fa';

function AboutSection() {
  return (
    <section className="relative pt-55 w-full py-14 md:py-18 lg:py-26 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden font-inter">
      <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl">

        {/* Hero/Introduction Section */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            <span className="text-blue-600">Reimagining</span> Fashion Advertising with <span className="text-violet-600">AI</span>
          </h2>
          <p className="text-3xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            At <span className="font-bold text text-yellow-500 dark:text-blue-400">AdVance</span>, we're reimagining how fashion brands create advertisements.
          </p>
        </div>

        {/* Problem & Solution Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20">
          <div className="md:col-span-1">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              <span className="text-violet-600">Out with the Old, In with the New</span>
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
              Gone are the days of expensive photoshoots, long production timelines, and creative bottlenecks.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">
              Our platform empowers fashion businesses to generate stunning, on-brand image and video ads in minutes, not weeks — using the power of AI.
            </p>
          </div>
          <div className="md:col-span-1">
            <img src="/assets/fashion-8.png" alt="AI Ad Generation Visual" className="w-full h-auto rounded-lg shadow-lg dark:shadow-xl" />
          </div>
        </div>

        {/* Values & Community Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20">
          <div className="md:col-span-1">
            <img src="/assets/community.webp" alt="AI Community Visual" className="w-full h-auto rounded-lg shadow-lg dark:shadow-xl" />
          </div>
          <div className="md:col-span-1">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              <span className="text-violet-600">Beyond Automation</span>: Creativity, Collaboration, Community
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
              But we’re not just about automation. We're about creative freedom, collaboration, and community.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">
              Whether you're a boutique label or an enterprise brand, our tools scale to match your ambition.
            </p>
          </div>
        </div>

        {/* Problem & Solution Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20">
        <div className="md:col-span-1">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            <span className="text-violet-600">Empower Your Tools With Us</span>
            </h3>

            <p className="text-xl text-gray-700 dark:text-gray-300 font-medium mb-4">
            We offer a powerful API for our <strong>AI-Powered Content Moderation System</strong> — designed to help your tools stay compliant with advertising standards and ethical guidelines.
            </p>
            
        </div>

        <div className="md:col-span-1">
            <img
            src="/assets/api-user.jpg"
            alt="API User"
            className="w-full h-auto rounded-lg shadow-lg dark:shadow-xl"
            />
        </div>
        </div>



        {/* Call to Action Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 font-medium">
            Join the next generation of fashion marketers — and let your creativity flow faster than ever before.
          </p>
          <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white text-lg font-semibold px-8 py-4 rounded shadow-md">
            Get Started with AdVance
          </Button>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
