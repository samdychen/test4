
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-off-white text-stone-gray font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
