import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';

    const variants = {
      default: 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30',
      destructive: 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30',
      outline: 'border border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-700 dark:hover:border-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
      ghost: 'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white',
      link: 'underline-offset-4 hover:underline text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
    };

    const sizes = {
      default: 'h-11 px-6 py-2',
      sm: 'h-9 px-4 rounded-lg',
      lg: 'h-12 px-8 text-base',
      icon: 'h-11 w-11'
    };

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
