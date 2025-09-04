import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { usersAPI } from '../services/api';
import {
  Users as UsersIcon,
  Plus,
  Search,
  Edit,
  Trash2
} from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
  lastLogin: string;
  industry: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await usersAPI.getAll();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
        // Fallback to mock data if API fails
        const mockUsers: User[] = [
          {
            id: '1',
            name: 'John Doe',
            email: 'john.doe@example.com',
            role: 'admin',
            status: 'active',
            joinDate: '2024-01-15',
            lastLogin: '2024-01-20',
            industry: 'Technology'
          },
          {
            id: '2',
            name: 'Sarah Wilson',
            email: 'sarah.wilson@example.com',
            role: 'user',
            status: 'active',
            joinDate: '2024-01-10',
            lastLogin: '2024-01-19',
            industry: 'Healthcare'
          },
          {
            id: '3',
            name: 'Mike Johnson',
            email: 'mike.johnson@example.com',
            role: 'user',
            status: 'inactive',
            joinDate: '2024-01-05',
            lastLogin: '2024-01-15',
            industry: 'Finance'
          },
          {
            id: '4',
            name: 'Emily Brown',
            email: 'emily.brown@example.com',
            role: 'moderator',
            status: 'active',
            joinDate: '2024-01-12',
            lastLogin: '2024-01-20',
            industry: 'Education'
          }
        ];
        setUsers(mockUsers);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteUser = async (userId: string) => {
    try {
      await usersAPI.delete(userId);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
      // You might want to show a toast notification here
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'badge-success',
      inactive: 'badge-error',
      pending: 'badge-warning'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${variants[status as keyof typeof variants]}`}>
        {status}
      </span>
    );
  };

  const getRoleBadge = (role: string) => {
    const variants = {
      admin: 'badge-info',
      moderator: 'badge-warning',
      user: 'bg-gradient-to-r from-gray-100 to-blue-100 text-gray-800 border border-gray-200 dark:from-gray-800 dark:to-blue-800 dark:text-gray-200 dark:border-gray-700'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${variants[role as keyof typeof variants]}`}>
        {role}
      </span>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold gradient-text mb-2">Users Management</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Manage user accounts and permissions</p>
        </div>
        <Button className="button-primary">
          <Plus className="h-5 w-5 mr-2" />
          Add User
        </Button>
      </div>

      {/* Search */}
      <Card className="card-gradient">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
            <Input
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 text-base border-blue-200 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-700 dark:focus:border-blue-400 dark:focus:ring-blue-400 input-focus"
            />
          </div>
        </CardContent>
      </Card>

      {/* Users List */}
      <Card className="card-gradient">
        <CardHeader className="border-b border-blue-200/50 dark:border-blue-800/50">
          <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Users ({filteredUsers.length})</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {filteredUsers.map((user) => (
              <div key={user.id} className="p-6 border border-blue-200/50 dark:border-blue-800/50 rounded-xl hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-200 group bg-gradient-to-r from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-900/10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-semibold shadow-lg shadow-blue-500/30">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {user.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {getRoleBadge(user.role)}
                        {getStatusBadge(user.status)}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-blue-600 dark:text-blue-400">Industry:</span>
                        <span>{user.industry}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-blue-600 dark:text-blue-400">Joined:</span>
                        <span>{user.joinDate}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-blue-600 dark:text-blue-400">Last Login:</span>
                        <span>{user.lastLogin}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" size="sm" className="button-secondary">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteUser(user.id)}
                      className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:border-red-700"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Users;
