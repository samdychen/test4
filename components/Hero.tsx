
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://picsum.photos/seed/naturehero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-tight">
          Rediscover the Wild
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto font-light">
          Your journey into the heart of nature begins here. Explore, connect, and be inspired.
        </p>
        <a 
          href="#features" 
          className="bg-mint-green text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-pine-green transition-transform duration-300 transform hover:scale-105 inline-block"
        >
          Start Exploring
        </a>
      </div>
    </section>
  );
};

export default Hero;
