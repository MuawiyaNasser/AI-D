import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../../ui/Button';

interface StartCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
  buttonText: string;
}

export const StartCard: React.FC<StartCardProps> = ({
  title,
  description,
  icon,
  linkTo,
  buttonText,
}) => {
  return (
    <motion.div
      className="card flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="mb-4 text-prcs-red-600 dark:text-prcs-red-500">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-prcs-black-600 mb-6 flex-grow dark:text-prcs-black-300">{description}</p>
      
      <Link to={linkTo}>
        <Button className="w-full">{buttonText}</Button>
      </Link>
    </motion.div>
  );
};