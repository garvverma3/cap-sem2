
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import Carousel from '@/components/Carousel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Exercises for Building Core Strength",
      excerpt: "Discover the most effective exercises to build a strong, stable core that supports all your other workouts and daily activities.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Strength Training"
    },
    {
      id: 2,
      title: "The Science Behind HIIT: Why It Works So Well",
      excerpt: "Learn about the physiological benefits of high-intensity interval training and why it's one of the most effective workout methods.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "7 min read",
      category: "Cardio"
    },
    {
      id: 3,
      title: "Yoga for Stress Relief: Finding Peace Through Movement",
      excerpt: "Explore how yoga can help reduce stress, improve mental clarity, and create a sense of inner peace in your daily life.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "Emma Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Yoga & Wellness"
    },
    {
      id: 4,
      title: "Nutrition Timing: When to Eat for Optimal Performance",
      excerpt: "Understanding the best times to fuel your body before, during, and after workouts for maximum results and recovery.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "8 min read",
      category: "Nutrition"
    },
    {
      id: 5,
      title: "Home Workout Essentials: Equipment You Actually Need",
      excerpt: "A practical guide to building an effective home gym without breaking the bank or cluttering your space.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "Sarah Johnson",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "Equipment"
    },
    {
      id: 6,
      title: "Recovery and Rest: The Missing Piece of Your Fitness Puzzle",
      excerpt: "Why rest days are just as important as workout days and how to optimize your recovery for better results.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "Michael Chen",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "Recovery"
    }
  ];

  const featuredPosts = blogPosts.slice(0, 3);
  const recentPosts = blogPosts.slice(3);

  const BlogCard = ({ post, featured = false }) => (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover ${featured ? 'lg:col-span-2' : ''}`}>
      <div className="relative">
        <img 
          src={post.image} 
          alt={post.title}
          className={`w-full object-cover ${featured ? 'h-64' : 'h-48'}`}
        />
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className={`font-bold text-gray-900 mb-3 ${featured ? 'text-2xl' : 'text-xl'}`}>
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
        
        <Button variant="outline" className="group">
          Read More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
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
            backgroundImage: `url('https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Read the Latest in Fitness
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Expert insights, workout tips, and wellness advice to help you achieve your health goals
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and impactful fitness content
            </p>
          </div>

          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} featured={index === 0} />
            ))}
          </div>

          <div className="lg:hidden">
            <Carousel showDots={true} autoPlay={true} interval={5000}>
              {featuredPosts.map((post) => (
                <div key={post.id} className="px-4">
                  <BlogCard post={post} featured={true} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Posts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay up to date with our latest fitness insights and tips
            </p>
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="md:hidden space-y-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
