
import React from 'react';
import { MountainIcon } from './icons/MountainIcon';
import { LeafIcon } from './icons/LeafIcon';
import { CompassIcon } from './icons/CompassIcon';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-pale-green text-forest-green mx-auto mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-forest-green mb-3">{title}</h3>
    <p className="text-stone-gray leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-green mb-4">What We Offer</h2>
          <p className="text-lg text-stone-gray max-w-3xl mx-auto">
            We provide everything you need to embark on unforgettable adventures and reconnect with the natural world.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <FeatureCard 
            icon={<MountainIcon />} 
            title="Breathtaking Trails" 
            description="Discover curated trails for all skill levels, from serene forest walks to challenging mountain peaks." 
          />
          <FeatureCard 
            icon={<LeafIcon />} 
            title="Sustainable Travel" 
            description="Learn how to explore responsibly. We promote eco-friendly practices to preserve nature for generations to come." 
          />
          <FeatureCard 
            icon={<CompassIcon />} 
            title="Expert Guides" 
            description="Connect with experienced guides who will enrich your journey with their knowledge of local flora and fauna." 
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
