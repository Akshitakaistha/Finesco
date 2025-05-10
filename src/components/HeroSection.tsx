
import React from 'react';
import FallingDollars from './FallingDollars';

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white bg-black overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1611221808514-07b8bd7c1c4a?auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-indigo-950/80 to-black/80" />
      </div>

      {/* Falling Dollars Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FallingDollars />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide leading-tight text-white drop-shadow-2xl">
          From Insight to Impact – <br />
          That’s the <span className="text-indigo-400">Finesco</span> Way
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Empowering your growth with <span className="text-indigo-300 font-semibold">Investments</span>,
          <span className="text-indigo-300 font-semibold"> Insights</span>, and
          <span className="text-indigo-300 font-semibold"> Industry-Ready Learning</span>.
        </p>

        {/* Animated Keywords */}
        <div className="mt-6 text-lg text-indigo-400 font-bold uppercase tracking-wider animate-pulse">
          Invest • Learn • Grow
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://calendly.com/bavneet-taneja/30min"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-indigo-700 transition-all"
          >
            Get Started
          </a>
          <a
            href="#products"
            className="bg-white text-indigo-700 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-gray-400 transition-all"
          >
            Explore Products
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <a
          href="#info-boxes"
          className="text-white opacity-75 hover:opacity-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;


