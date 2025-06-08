import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Case } from '../../../types';
import { Badge } from '../../ui/Badge';

interface CaseCardProps {
  case: Case;
}

export const CaseCard: React.FC<CaseCardProps> = ({ case: caseItem }) => {
  const getDifficultyColor = () => {
    switch (caseItem.difficulty) {
      case 'easy':
        return 'secondary';
      case 'medium':
        return 'warning';
      case 'critical':
        return 'danger';
      default:
        return 'default';
    }
  };

  return (
    <Link to={`/simulate/${caseItem.id}`}>
      <motion.div
        className="card overflow-hidden group"
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold">{caseItem.title}</h3>
          <Badge variant={getDifficultyColor()}>
            {caseItem.difficulty.charAt(0).toUpperCase() + caseItem.difficulty.slice(1)}
          </Badge>
        </div>
        
        <p className="text-sm text-prcs-black-600 mb-4 dark:text-prcs-black-300">{caseItem.description}</p>
        
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-prcs-black-200 dark:border-prcs-black-700">
          <div className="flex items-center space-x-1">
            <AlertTriangle className="h-4 w-4 text-prcs-red-600 dark:text-prcs-red-500" />
            <span className="text-xs text-prcs-black-600 dark:text-prcs-black-400">Simulation case</span>
          </div>
          <ArrowRight className="h-4 w-4 text-prcs-red-600 transition-transform group-hover:translate-x-1 dark:text-prcs-red-500" />
        </div>
      </motion.div>
    </Link>
  );
};