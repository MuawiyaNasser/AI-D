import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Topic } from '../../../types';

interface TopicCardProps {
  topic: Topic;
}

export const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
  return (
    <Link to={`/topics/${topic.id}`}>
      <motion.div
        className="card overflow-hidden group"
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="h-48 overflow-hidden">
          <img
            src={topic.imageUrl}
            alt={topic.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{topic.title}</h3>
          <p className="text-sm text-prcs-black-600 mb-4 dark:text-prcs-black-300">{topic.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-prcs-red-600 dark:text-prcs-red-500">Learn more</span>
            <ChevronRight className="h-4 w-4 text-prcs-red-600 transition-transform group-hover:translate-x-1 dark:text-prcs-red-500" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};