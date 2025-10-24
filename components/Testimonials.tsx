
import React from 'react';

const TestimonialCard: React.FC<{ quote: string; name: string; title: string; imgSrc: string }> = ({ quote, name, title, imgSrc }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
    <img src={imgSrc} alt={name} className="w-20 h-20 rounded-full mb-6 object-cover" />
    <p className="text-stone-gray italic mb-6">"{quote}"</p>
    <div className="mt-auto">
        <h4 className="text-xl font-bold text-forest-green">{name}</h4>
        <p className="text-sm text-mint-green">{title}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-green mb-4">What Our Explorers Say</h2>
          <p className="text-lg text-stone-gray max-w-3xl mx-auto">
            Real stories from people who have rediscovered their connection with nature through Terra.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <TestimonialCard 
            quote="An absolutely life-changing experience. The guided hike was breathtaking, and I learned so much about the local ecosystem."
            name="Sarah Johnson"
            title="Avid Hiker"
            imgSrc="https://picsum.photos/seed/person1/200/200"
          />
          <TestimonialCard 
            quote="Terra helped me find the most serene and beautiful spots I never would have discovered on my own. Highly recommended!"
            name="Michael Chen"
            title="Nature Photographer"
            imgSrc="https://picsum.photos/seed/person2/200/200"
          />
          <TestimonialCard 
            quote="The focus on sustainability is what sets Terra apart. It feels good to travel knowing you're making a positive impact."
            name="Emily Rodriguez"
            title="Eco-conscious Traveler"
            imgSrc="https://picsum.photos/seed/person3/200/200"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
