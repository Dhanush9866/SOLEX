import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { GraduationCap, Plus, BookOpen, Users, Clock, Star } from 'lucide-react';
import { trainingsAPI } from '../services/api';

const Trainings = () => {
  const [trainings, setTrainings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await trainingsAPI.getAll();
        setTrainings(data);
      } catch (e: any) {
        setError(e.message || 'Failed to load trainings');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
        {loading && <p className="text-gray-600 dark:text-gray-400">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!loading && !error && trainings.map((t) => (
          <Card key={t._id} className="card-hover card-gradient">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">{t.status || 'Active'}</span>
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">{t.title}</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">{t.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {t.studentsCount || 0} students
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {t.weeks || t.duration}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white ml-1">{t.rating || '-'}</span>
                </div>
                <Button variant="outline" size="sm" className="button-secondary">
                  Manage
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
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
