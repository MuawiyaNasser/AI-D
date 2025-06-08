import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/common/Layout';
import { Heart, Award, BookOpen, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="page-container section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About AI-D</h1>
          <p className="text-lg text-prcs-black-600 max-w-2xl mx-auto dark:text-prcs-black-300">
            Our mission, vision, and the story behind our first aid training platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-prcs-black-700 mb-6 dark:text-prcs-black-300">
              AI-D was created with a singular purpose: to democratize first aid training and make it accessible to everyone in Palestine and beyond. By combining artificial intelligence with medical expertise from the Palestinian Red Crescent Society, we're creating a platform that helps people learn life-saving skills effectively.
            </p>
            <p className="text-prcs-black-700 mb-6 dark:text-prcs-black-300">
              In regions where access to traditional first aid training may be limited by geography, resources, or ongoing conflicts, AI-D provides a way for individuals to learn critical skills that can save lives in emergency situations.
            </p>
            <div className="flex items-center mt-8">
              <div className="mr-4 bg-prcs-red-100 p-3 rounded-full dark:bg-prcs-red-900">
                <Heart className="h-6 w-6 text-prcs-red-600" fill="currentColor" />
              </div>
              <div>
                <h3 className="font-semibold">Built for PRCS</h3>
                <p className="text-sm text-prcs-black-600 dark:text-prcs-black-400">Developed in collaboration with the Palestinian Red Crescent Society</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="First aid training session" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-8 rounded-lg shadow-sm mb-16 dark:bg-prcs-black-800"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">How AI-D Makes a Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: "Quality Training",
                description: "Our content is developed with medical professionals to ensure accuracy and effectiveness."
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Accessible Learning",
                description: "Learn at your own pace, anytime, anywhere with our digital-first approach."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Community Impact",
                description: "Every trained individual becomes a potential lifesaver in their community."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-prcs-green-100 text-prcs-green-600 mb-4 dark:bg-prcs-green-900">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-prcs-black-600 dark:text-prcs-black-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-prcs-black-700 mb-6 dark:text-prcs-black-300">
            We envision a world where every person has the knowledge and confidence to respond effectively in emergency situations. Through AI-D, we aim to:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-8 text-prcs-black-700 dark:text-prcs-black-300">
            <li>Reduce response times to medical emergencies in underserved areas</li>
            <li>Create a network of confident first responders across Palestine</li>
            <li>Continuously improve our platform through feedback and new medical insights</li>
          </ul>
          <p className="text-prcs-black-700 dark:text-prcs-black-300">
            By combining technology with humanitarian principles, we're working toward a future where more lives can be saved through proper first aid knowledge and quick action.
          </p>
        </motion.div>
      </div>
    </Layout>
  );
};