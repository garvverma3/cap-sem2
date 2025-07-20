
import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Carousel from '@/components/Carousel';

const FeaturedWorkouts = () => {
  const workouts = [
    {
      id: 1,
      title: "Full Body HIIT Workout",
      description: "High-intensity interval training for maximum calorie burn and muscle building.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      duration: "30 min",
      participants: "2.5k",
      rating: 4.8
    },
    {
      id: 2,
      title: "Yoga Flow for Beginners",
      description: "Gentle yoga sequences to improve flexibility and reduce stress.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      duration: "45 min",
      participants: "1.8k",
      rating: 4.9
    },
    {
      id: 3,
      title: "Strength Training Basics",
      description: "Build muscle and increase strength with fundamental exercises.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      duration: "40 min",
      participants: "3.2k",
      rating: 4.7
    },
    {
      id: 4,
      title: "Cardio Dance Workout",
      description: "Fun and energetic dance routines that will get your heart pumping.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      duration: "35 min",
      participants: "1.9k",
      rating: 4.6
    }
  ];

  const WorkoutCard = ({ workout }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
      <div className="relative">
        <img 
          src={workout.image} 
          alt={workout.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded-full text-sm font-medium">
          {workout.duration}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{workout.title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{workout.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{workout.participants}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
        
        <Button className="w-full gradient-bg">
          Start Workout
        </Button>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm: lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Workouts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular and effective workout programs designed by fitness experts
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>

        <div className="md:hidden">
          <Carousel showDots={true} autoPlay={true}>
            {workouts.map((workout) => (
              <div key={workout.id} className="px-4">
                <WorkoutCard workout={workout} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkouts;
