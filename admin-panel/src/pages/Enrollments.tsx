import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { enrollmentsAPI } from '../services/api';
import { Search, GraduationCap, Clock, User, Mail, Calendar, BookOpen } from 'lucide-react';

interface Enrollment {
  _id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  status: string;
  createdAt: string;
}

const Enrollments = () => {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const data = await enrollmentsAPI.getAll();
        setEnrollments(data);
      } catch (error) {
        console.error('Error fetching enrollments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollments();
  }, []);

  const filteredEnrollments = enrollments.filter(enrollment =>
    enrollment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enrollment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enrollment.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusUpdate = async (enrollmentId: string, newStatus: string) => {
    try {
      await enrollmentsAPI.update(enrollmentId, newStatus);
      setEnrollments(enrollments.map(enrollment => 
        enrollment._id === enrollmentId ? { ...enrollment, status: newStatus } : enrollment
      ));
    } catch (error) {
      console.error('Error updating enrollment status:', error);
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      approved: 'bg-green-100 text-green-800 border-green-200',
      completed: 'bg-blue-100 text-blue-800 border-blue-200',
      cancelled: 'bg-red-100 text-red-800 border-red-200'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${variants[status as keyof typeof variants] || variants.pending}`}>
        {status}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Enrollment Management</h1>
        <p className="text-gray-600 dark:text-gray-400">Monitor student enrollments and progress</p>
      </div>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold gradient-text mb-2">Enrollment Management</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Monitor student enrollments and progress</p>
        </div>
      </div>

      {/* Search */}
      <Card className="card-gradient">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
            <Input
              placeholder="Search enrollments by name, email, or course..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 text-base border-blue-200 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-700 dark:focus:border-blue-400 dark:focus:ring-blue-400 input-focus"
            />
          </div>
        </CardContent>
      </Card>

      {/* Enrollments List */}
      <Card className="card-gradient">
        <CardHeader className="border-b border-blue-200/50 dark:border-blue-800/50">
          <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
            Enrollments ({filteredEnrollments.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {filteredEnrollments.length === 0 ? (
              <div className="text-center py-12">
                <GraduationCap className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No enrollments found</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {searchTerm ? 'Try adjusting your search terms.' : 'No enrollments have been submitted yet.'}
                </p>
              </div>
            ) : (
              filteredEnrollments.map((enrollment) => (
                <div key={enrollment._id} className="p-6 border border-blue-200/50 dark:border-blue-800/50 rounded-xl hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-200 group bg-gradient-to-r from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-900/10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-semibold shadow-lg shadow-green-500/30">
                            {enrollment.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {enrollment.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">{enrollment.email}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {getStatusBadge(enrollment.status)}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="h-4 w-4 text-green-600 dark:text-green-400" />
                          <span>{enrollment.course}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-green-600 dark:text-green-400" />
                          <span>{enrollment.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-green-600 dark:text-green-400" />
                          <span>{formatDate(enrollment.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <select
                        value={enrollment.status}
                        onChange={(e) => handleStatusUpdate(enrollment._id, e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Enrollments;
