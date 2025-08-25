import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  Users,
  Building2,
  GraduationCap,
  MessageSquare,
  TrendingUp,
  DollarSign,
  Activity,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

interface ActivityItem {
  id: number;
  type: string;
  message: string;
  time: string;
}

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalIndustries: 0,
    totalTrainings: 0,
    totalInquiries: 0,
    totalEnrollments: 0,
    monthlyRevenue: 0,
    growthRate: 0
  });

  const [recentActivity, setRecentActivity] = useState<ActivityItem[]>([]);

  useEffect(() => {
    // Simulate fetching data
    setStats({
      totalUsers: 1247,
      totalIndustries: 14,
      totalTrainings: 8,
      totalInquiries: 89,
      totalEnrollments: 156,
      monthlyRevenue: 45600,
      growthRate: 23.5
    });

    setRecentActivity([
      { id: 1, type: 'user', message: 'New user registration: john.doe@example.com', time: '2 minutes ago' },
      { id: 2, type: 'enrollment', message: 'New training enrollment: AI Fundamentals', time: '15 minutes ago' },
      { id: 3, type: 'inquiry', message: 'New service inquiry from TechCorp', time: '1 hour ago' },
      { id: 4, type: 'user', message: 'User profile updated: sarah.wilson@example.com', time: '2 hours ago' }
    ]);
  }, []);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user': return <Users className="h-4 w-4" />;
      case 'enrollment': return <GraduationCap className="h-4 w-4" />;
      case 'inquiry': return <MessageSquare className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'user': return 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20';
      case 'enrollment': return 'text-green-600 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20';
      case 'inquiry': return 'text-purple-600 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20';
      default: return 'text-gray-600 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900/20 dark:to-blue-900/20';
    }
  };

  const StatCard = ({ title, value, description, icon: Icon, trend, trendValue, color }: any) => (
    <Card className="card-hover card-gradient">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</CardTitle>
        <div className={`p-3 rounded-xl ${color} shadow-lg`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{value}</div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          {trend === 'up' ? (
            <ArrowUpRight className="h-4 w-4 text-green-500 mr-2" />
          ) : (
            <ArrowDownRight className="h-4 w-4 text-red-500 mr-2" />
          )}
          {trendValue}
        </div>
        {description && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{description}</p>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold gradient-text mb-2">Dashboard</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Welcome back! Here's what's happening with your business.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="button-secondary">
            <Calendar className="h-4 w-4 mr-2" />
            Today
          </Button>
          <Button className="button-primary">
            <TrendingUp className="h-4 w-4 mr-2" />
            View Reports
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value={stats.totalUsers.toLocaleString()}
          description="Active accounts"
          icon={Users}
          trend="up"
          trendValue={`+${stats.growthRate}% from last month`}
          color="bg-gradient-to-br from-blue-500 to-indigo-600"
        />
        <StatCard
          title="Industries"
          value={stats.totalIndustries}
          description="Active industry sectors"
          icon={Building2}
          trend="up"
          trendValue="+2 this month"
          color="bg-gradient-to-br from-indigo-500 to-purple-600"
        />
        <StatCard
          title="Trainings"
          value={stats.totalTrainings}
          description="Available programs"
          icon={GraduationCap}
          trend="up"
          trendValue="+1 new program"
          color="bg-gradient-to-br from-purple-500 to-pink-600"
        />
        <StatCard
          title="Monthly Revenue"
          value={`$${stats.monthlyRevenue.toLocaleString()}`}
          description="Total earnings"
          icon={DollarSign}
          trend="up"
          trendValue={`+${stats.growthRate}% from last month`}
          color="bg-gradient-to-br from-green-500 to-emerald-600"
        />
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <Card className="lg:col-span-2 card-hover card-gradient">
          <CardHeader className="border-b border-blue-200/50 dark:border-blue-800/50">
            <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4 group">
                  <div className={`p-3 rounded-xl ${getActivityColor(activity.type)} group-hover:scale-110 transition-transform duration-200 shadow-md`}>
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {activity.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="card-hover card-gradient">
          <CardHeader className="border-b border-blue-200/50 dark:border-blue-800/50">
            <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <Button className="w-full justify-start bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg shadow-blue-500/25" variant="outline">
                <Users className="h-4 w-4 mr-3" />
                Add New User
              </Button>
              <Button className="w-full justify-start bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/25" variant="outline">
                <GraduationCap className="h-4 w-4 mr-3" />
                Create Training
              </Button>
              <Button className="w-full justify-start bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25" variant="outline">
                <Building2 className="h-4 w-4 mr-3" />
                Add Industry
              </Button>
              <Button className="w-full justify-start bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg shadow-orange-500/25" variant="outline">
                <MessageSquare className="h-4 w-4 mr-3" />
                View Inquiries
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
