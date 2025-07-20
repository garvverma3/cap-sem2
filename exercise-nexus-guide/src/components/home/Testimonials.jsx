
import React from 'react';
import { Star, Quote } from 'lucide-react';
import Carousel from '@/components/Carousel';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c867?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review: "FitTutorial completely transformed my approach to fitness. The workouts are challenging yet achievable, and the trainers provide excellent guidance. I've lost 15 pounds and gained so much confidence!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Busy Professional",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review: "As someone with a hectic schedule, the flexibility of on-demand workouts is perfect. I can fit in a quick 20-minute session during lunch breaks. The quality of instruction is top-notch."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Yoga Instructor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review: "The variety of workouts available is incredible. From yoga to HIIT to strength training, there's something for everyone. The community aspect and progress tracking keep me motivated daily."
    },
    {
      id: 4,
      name: "David Kim",
      role: "Former Athlete",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review: "After my sports career ended, I struggled to maintain my fitness. FitTutorial helped me rediscover my passion for working out. The expert guidance and structured programs are exceptional."
    }
  ];

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-md mx-auto">
      <Quote className="w-8 h-8 text-primary mx-auto mb-4" />
      
      <div className="flex justify-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      <p className="text-gray-600 mb-6 italic leading-relaxed">
        "{testimonial.review}"
      </p>
      
      <div className="flex items-center justify-center space-x-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="text-left">
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Members Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied members who have transformed their lives with FitTutorial
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="md:hidden">
          <Carousel showDots={true} autoPlay={true} interval={4000}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
