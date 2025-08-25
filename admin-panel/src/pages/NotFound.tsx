import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 p-4">
      <Card className="w-full max-w-md glass-effect border-0 shadow-2xl text-center">
        <CardHeader className="space-y-6 pb-8">
          <div className="mx-auto w-24 h-24 bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-red-500/30">
            <span className="text-4xl font-bold text-white">404</span>
          </div>
          <div>
            <CardTitle className="text-3xl font-bold gradient-text mb-2">
              Page Not Found
            </CardTitle>
            <CardDescription className="text-base text-gray-600 dark:text-gray-400">
              The page you're looking for doesn't exist or has been moved.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="pb-8 space-y-6">
          <div className="space-y-4">
            <Link to="/dashboard">
              <Button className="w-full button-primary">
                <Home className="h-4 w-4 mr-2" />
                Go to Dashboard
              </Button>
            </Link>
            
            <Link to="/">
              <Button variant="outline" className="w-full button-secondary">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>
            </Link>
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            If you believe this is an error, please contact support.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
