import React from 'react';
import { cn } from '../../lib/utils';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'destructive';
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(
        "relative w-full rounded-xl border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
        variant === 'destructive' && "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-200 [&>svg]:text-red-600",
        variant === 'default' && "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-200 [&>svg]:text-blue-600",
        className
      )}
      {...props}
    />
  )
);
Alert.displayName = "Alert";

interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const AlertDescription = React.forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-sm font-medium [&_p]:leading-relaxed", className)}
      {...props}
    />
  )
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription };
