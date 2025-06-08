import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/common/Layout';
import { ChatInterface } from '../components/features/chat/ChatInterface';

export const ChatPage: React.FC = () => {
  return (
    <Layout hideChat>
      <div className="page-container section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Chat with AI-D</h1>
          <p className="text-lg text-prcs-black-600 max-w-2xl mx-auto dark:text-prcs-black-300">
            Get immediate answers to your first aid questions and guidance on emergency situations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <ChatInterface fullScreen />
        </motion.div>
      </div>
    </Layout>
  );
};
