
import React from 'react';
import { CheckCircle, Users, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SellingPoints = () => {
  const points = [
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Expert-Led Training",
      description: "Learn from certified fitness professionals with years of experience. Our trainers provide detailed guidance and modifications for every fitness level.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Certified personal trainers",
        "Customized workout plans",
        "Progress tracking",
        "24/7 support"
      ]
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Flexible Schedule",
      description: "Work out anytime, anywhere with our comprehensive library of on-demand videos. Perfect for busy schedules and different time zones.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "On-demand access",
        "Mobile-friendly",
        "Offline downloads",
        "Multi-device sync"
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {points.map((point, index) => (
          <div key={index} className={`mb-20 ${index === points.length - 1 ? 'mb-0' : ''}`}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  {point.icon}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {point.title}
                  </h2>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {point.description}
                </p>
                
                <ul className="space-y-3">
                  {point.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="gradient-bg px-8 py-3 text-lg">
                  Learn More
                </Button>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={point.image} 
                    alt={point.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SellingPoints;
