
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section 
      className="py-24 bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: "url('https://picsum.photos/seed/ctabg/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-forest-green opacity-80"></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest travel guides, sustainable tips, and exclusive offers.
        </p>
        <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Your email address"
            className="w-full px-6 py-3 rounded-full text-stone-gray focus:outline-none focus:ring-2 focus:ring-mint-green"
          />
          <button 
            type="submit" 
            className="bg-mint-green text-white font-bold py-3 px-8 rounded-full hover:bg-pine-green transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTASection;
