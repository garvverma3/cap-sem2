
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your
              <span className="text-primary"> Fitness Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Discover expertly crafted workout tutorials, personalized fitness plans, 
              and achieve your health goals with our comprehensive exercise library.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-bg text-lg px-8 py-3">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-12"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-12"
              />
              <Textarea
                name="message"
                placeholder="Tell us about your fitness goals..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="resize-none"
              />
              <Button type="submit" className="w-full h-12 gradient-bg text-lg">
                Send Message
              </Button>
            </form>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Join over 10,000+ people who transformed their lives with us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
