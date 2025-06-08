import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/common/Layout';
import { StartCard } from '../components/features/learning/StartCard';
import { BookOpen, Activity, MessageSquare } from 'lucide-react';

export const StartPage: React.FC = () => {
  return (
    <Layout>
      <div className="page-container section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Start Your First Aid Journey</h1>
          <p className="text-lg text-prcs-black-600 max-w-2xl mx-auto dark:text-prcs-black-300">
            Choose how you want to learn and practice your first aid skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <StartCard
              title="Learn First Aid Topics"
              description="Explore comprehensive guides on essential first aid skills, from CPR to fracture management."
              icon={<BookOpen className="h-10 w-10" />}
              linkTo="/topics"
              buttonText="Browse Topics"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StartCard
              title="Simulate a Case"
              description="Practice your skills with AI-generated scenarios that simulate real-world emergency situations."
              icon={<Activity className="h-10 w-10" />}
              linkTo="/simulate"
              buttonText="Start Simulation"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <StartCard
              title="Chat with AI-D"
              description="Get immediate answers to your first aid questions through our specialized AI assistant."
              icon={<MessageSquare className="h-10 w-10" />}
              linkTo="/chat"
              buttonText="Open Chat"
            />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};