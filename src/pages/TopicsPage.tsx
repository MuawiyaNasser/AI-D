import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/common/Layout';
import { TopicCard } from '../components/features/learning/TopicCard';
import { topics } from '../data/topics';

export const TopicsPage: React.FC = () => {
  return (
    <Layout>
      <div className="page-container section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">First Aid Topics</h1>
          <p className="text-lg text-prcs-black-600 max-w-2xl mx-auto dark:text-prcs-black-300">
            Explore our comprehensive library of first aid skills and techniques
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TopicCard topic={topic} />
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};