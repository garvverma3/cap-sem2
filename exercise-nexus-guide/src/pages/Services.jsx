import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Play, Clock, Star, ChevronDown, ChevronUp } from 'lucide-react';
import Carousel from '@/components/Carousel';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const workoutCategories = [
    {
      id: 1,
      title: "HIIT Workouts",
      description: "High-intensity interval training for maximum calorie burn",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      duration: "20-45 min",
      level: "Beginner to Advanced",
      exercises: 12,
      details: "Our HIIT workouts combine short bursts of intense exercise with brief recovery periods. Perfect for burning calories, improving cardiovascular health, and building endurance in minimal time.",
      playlist: "https://youtu.be/jpizoUy4K9s?si=vuxIZ4BHveB4tfzj"
    },
    {
      id: 2,
      title: "Yoga & Flexibility",
      description: "Improve flexibility, balance, and mental wellness",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      duration: "30-60 min",
      level: "All Levels",
      exercises: 15,
      details: "From gentle Hatha to dynamic Vinyasa flows, our yoga programs help improve flexibility, reduce stress, and enhance mind-body connection through ancient practices adapted for modern life.",
      playlist: "https://youtube.com/playlist?list=PLui6Eyny-UzwZs3GBQeOoAp31-_IBq4Ky&si=aca1wy7i8WoAwmBw"
    },
    {
      id: 3,
      title: "Strength Training",
      description: "Build muscle and increase overall strength",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      duration: "45-60 min",
      level: "Intermediate to Advanced",
      exercises: 18,
      details: "Progressive strength training programs using bodyweight, dumbbells, and resistance bands. Build lean muscle, increase bone density, and boost metabolism with proper form and technique.",
      playlist: "https://youtube.com/playlist?list=PL2ov72VWpiOpGxN4biXsJz9i9hBBgdeO4&si=nz2gTlfKloYOpniF"
    },
    {
      id: 4,
      title: "Cardio Dance",
      description: "Fun, energetic dance workouts that get your heart pumping",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      duration: "30-45 min",
      level: "Beginner to Intermediate",
      exercises: 10,
      details: "High-energy dance routines combining popular moves with cardio intervals. Burn calories while having fun with music-driven workouts that feel more like a party than exercise.",
      playlist: "https://youtube.com/playlist?list=PLN99XDk2SYr7YFHIVmTffejyRZliMGGIM&si=nrcM6InCHr7btR6O"
    }
  ];

  const faqs = [
    {
      question: "Do I need any equipment to get started?",
      answer: "Most of our workouts can be done with just your body weight. For some programs, basic equipment like dumbbells or resistance bands may be helpful, but we always provide alternative exercises for equipment-free options."
    },
    {
      question: "Are the workouts suitable for beginners?",
      answer: "Absolutely! We offer modifications for every fitness level. Each workout includes beginner, intermediate, and advanced variations, so you can progress at your own pace."
    },
    {
      question: "How often should I work out?",
      answer: "We recommend 3-5 workouts per week, allowing for rest days between intense sessions. Listen to your body and adjust based on your fitness level and recovery needs."
    },
    {
      question: "Can I download workouts for offline use?",
      answer: "Yes! Premium members can download workouts to their devices for offline access, perfect for when you're traveling or don't have reliable internet connection."
    },
    {
      question: "Do you offer nutrition guidance?",
      answer: "While our primary focus is fitness training, we do provide general nutrition tips and meal planning guides as part of our comprehensive wellness approach."
    }
  ];

  const CategoryCard = ({ category }) => (
    <div 
      className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 ${
        selectedCategory?.id === category.id ? 'ring-2 ring-primary' : ''
      }`}
      onClick={() => setSelectedCategory(selectedCategory?.id === category.id ? null : category)}
    >
      <div className="relative">
        <img 
          src={category.image} 
          alt={category.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded-full text-sm font-medium">
          {category.exercises} exercises
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{category.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4" />
            <span>{category.level}</span>
          </div>
        </div>
        
        <Button className="w-full gradient-bg">
          {selectedCategory?.id === category.id ? 'Selected' : 'Select Category'}
        </Button>
      </div>
    </div>
  );

  const FAQItem = ({ faq, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <span className="font-medium text-left">{faq.question}</span>
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </CollapsibleTrigger>
        <CollapsibleContent className="px-4 pb-4">
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </CollapsibleContent>
      </Collapsible>
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Our Workouts
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Choose from our comprehensive library of workout programs designed by fitness experts
          </p>
        </div>
      </section>

      {/* Workout Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Workout Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select a category to learn more about our specialized programs
            </p>
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {workoutCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          <div className="md:hidden mb-12">
            <Carousel showDots={true}>
              {workoutCategories.map((category) => (
                <div key={category.id} className="px-4">
                  <CategoryCard category={category} />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Selected Category Details */}
          {selectedCategory && (
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src={selectedCategory.image} 
                    alt={selectedCategory.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedCategory.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{selectedCategory.details}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">Duration: {selectedCategory.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">Level: {selectedCategory.level}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Play className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">{selectedCategory.exercises} Exercises Available</span>
                    </div>
                  </div>

                  <Button
                    className="gradient-bg px-8 py-3"
                    onClick={() => window.open(selectedCategory.playlist, '_blank')}
                  >
                    Start {selectedCategory.title}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our workout programs
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
