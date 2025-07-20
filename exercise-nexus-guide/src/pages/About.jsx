
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Target, Award, Calendar } from 'lucide-react';
import Carousel from '@/components/Carousel';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c867?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Former Olympic athlete with 15+ years in fitness industry. Passionate about making fitness accessible to everyone."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Head Trainer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Certified personal trainer and nutritionist. Specializes in strength training and body transformation programs."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Yoga Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Certified yoga instructor with expertise in Vinyasa, Hatha, and meditation practices for mind-body wellness."
    }
  ];

  const milestones = [
    { year: "2020", event: "FitTutorial Founded", description: "Started with a vision to democratize fitness education" },
    { year: "2021", event: "1,000 Members", description: "Reached our first major milestone with growing community" },
    { year: "2022", event: "Mobile App Launch", description: "Expanded to mobile platforms for better accessibility" },
    { year: "2023", event: "10,000+ Members", description: "Built a thriving community of fitness enthusiasts" },
    { year: "2024", event: "Global Expansion", description: "Serving members across 50+ countries worldwide" }
  ];

  const TeamCard = ({ member }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg text-center max-w-sm mx-auto">
      <img 
        src={member.image} 
        alt={member.name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
      <p className="text-primary font-medium mb-3">{member.role}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About FitTutorial
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We're on a mission to make fitness education accessible, enjoyable, and effective for everyone, everywhere.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a simple idea to a global fitness community
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                <div className="flex-1">
                  <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To democratize fitness education by providing high-quality, accessible workout tutorials 
                and training programs that empower people to achieve their health and wellness goals, 
                regardless of their location, experience level, or budget.
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Award className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become the world's leading platform for fitness education, creating a global community 
                where everyone has the tools, knowledge, and support they need to live their healthiest, 
                most active life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Team</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate fitness professionals dedicated to your success
            </p>
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          <div className="md:hidden">
            <Carousel showDots={true} autoPlay={true} interval={4000}>
              {teamMembers.map((member) => (
                <div key={member.id} className="px-4">
                  <TeamCard member={member} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
