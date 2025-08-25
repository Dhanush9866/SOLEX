import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { GraduationCap, Plus, BookOpen, Users, Clock, Star } from 'lucide-react';

const Trainings = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold gradient-text mb-2">Training Management</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Manage training programs and courses</p>
        </div>
        <Button className="button-primary">
          <Plus className="h-5 w-5 mr-2" />
          Add Training
        </Button>
      </div>

      {/* Training Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="card-hover card-gradient">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
            </div>
            <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">AI Fundamentals</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Introduction to artificial intelligence and machine learning concepts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                24 students
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                8 weeks
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-gray-900 dark:text-white ml-1">4.8</span>
              </div>
              <Button variant="outline" size="sm" className="button-secondary">
                Manage
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover card-gradient">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">New</span>
            </div>
            <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Data Science</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Comprehensive data analysis and visualization techniques
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                18 students
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                12 weeks
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-gray-900 dark:text-white ml-1">4.9</span>
              </div>
              <Button variant="outline" size="sm" className="button-secondary">
                Manage
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover card-gradient">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full">Draft</span>
            </div>
            <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Web Development</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Modern web development with React and Node.js
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                0 students
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                10 weeks
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-gray-300 fill-current" />
                <span className="text-sm font-medium text-gray-400 ml-1">-</span>
              </div>
              <Button variant="outline" size="sm" className="button-secondary">
                Edit
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Coming Soon Section */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Training Management Features</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Advanced training management functionality coming soon
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="space-y-2">
              <p>• Create and manage training programs</p>
              <p>• Track student progress and performance</p>
              <p>• Generate certificates and reports</p>
            </div>
            <div className="space-y-2">
              <p>• Schedule live sessions and webinars</p>
              <p>• Manage course materials and resources</p>
              <p>• Integrate with learning management systems</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Trainings;
