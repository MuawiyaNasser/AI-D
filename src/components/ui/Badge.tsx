import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'danger';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const baseClass = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';

  const variantClasses = {
    default: 'bg-prcs-black-100 text-prcs-black-800 dark:bg-prcs-black-700 dark:text-prcs-black-100',
    secondary: 'bg-prcs-green-100 text-prcs-green-800 dark:bg-prcs-green-900 dark:text-prcs-green-100',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
    danger: 'bg-prcs-red-100 text-prcs-red-800 dark:bg-prcs-red-900 dark:text-prcs-red-100',
  };

  return (
    <span className={`${baseClass} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};