import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Heart, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Layout } from '../components/common/Layout';

export const HomePage: React.FC = () => {
  const scrollToContent = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-gradient-to-br from-white to-prcs-green-50 dark:from-prcs-black-900 dark:to-prcs-black-800"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e53e3e' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center p-2 bg-white rounded-full shadow-sm mb-6 dark:bg-prcs-black-800">
              <Heart className="h-5 w-5 text-prcs-red-600 mr-2" fill="currentColor" />
              <span className="text-sm font-medium">Palestinian Red Crescent Society</span>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AI-D – From Learning,<br /> to Lifesaving
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-prcs-black-600 max-w-2xl mx-auto mb-8 dark:text-prcs-black-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Train, simulate, and master first aid skills with our AI-powered learning platform, designed for the Palestinian Red Crescent Society.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/start">
                <Button size="lg">Start Now</Button>
              </Link>
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={scrollToContent}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="absolute bottom-10 left-0 right-0 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button 
              onClick={scrollToContent}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow dark:bg-prcs-black-800"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-6 w-6 text-prcs-red-600 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="content" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How AI-D Works</h2>
            <p className="text-lg text-prcs-black-600 max-w-2xl mx-auto dark:text-prcs-black-300">
              Our platform combines AI technology with medical expertise to create an effective first aid learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-12 w-12" />,
                title: "Learn First Aid Topics",
                description: "Access comprehensive guides on essential first aid skills, from CPR to fracture management."
              },
              {
                icon: <Award className="h-12 w-12" />,
                title: "Simulate Real Scenarios",
                description: "Practice your skills with AI-generated cases that simulate real-world emergency situations."
              },
              {
                icon: <Heart className="h-12 w-12\" fill="currentColor" />,
                title: "Chat for Instant Guidance",
                description: "Get immediate answers to your first aid questions through our specialized AI assistant."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center dark:bg-prcs-black-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-prcs-red-100 text-prcs-red-600 mb-6 dark:bg-prcs-red-900">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-prcs-black-600 dark:text-prcs-black-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-prcs-green-50 dark:bg-prcs-black-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Save Lives?</h2>
            <p className="text-lg text-prcs-black-600 max-w-2xl mx-auto mb-8 dark:text-prcs-black-300">
              Start your first aid training journey today with AI-D, designed specifically for the Palestinian Red Crescent Society.
            </p>
            <Link to="/start">
              <Button size="lg">Get Started Now</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};