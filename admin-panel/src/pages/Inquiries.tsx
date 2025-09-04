import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { inquiriesAPI } from '../services/api';
import { Search, MessageSquare, Clock, User, Mail, Phone, Building } from 'lucide-react';

interface Inquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  status: string;
  createdAt: string;
}

const Inquiries = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const data = await inquiriesAPI.getAll();
        setInquiries(data);
      } catch (error) {
        console.error('Error fetching inquiries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInquiries();
  }, []);

  const filteredInquiries = inquiries.filter(inquiry =>
    inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inquiry.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusUpdate = async (inquiryId: string, newStatus: string) => {
    try {
      await inquiriesAPI.update(inquiryId, newStatus);
      setInquiries(inquiries.map(inquiry => 
        inquiry._id === inquiryId ? { ...inquiry, status: newStatus } : inquiry
      ));
    } catch (error) {
      console.error('Error updating inquiry status:', error);
    }
  };

  const handleDeleteInquiry = async (inquiryId: string) => {
    try {
      await inquiriesAPI.delete(inquiryId);
      setInquiries(inquiries.filter(inquiry => inquiry._id !== inquiryId));
    } catch (error) {
      console.error('Error deleting inquiry:', error);
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      responded: 'bg-green-100 text-green-800 border-green-200',
      closed: 'bg-gray-100 text-gray-800 border-gray-200'
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
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Inquiry Management</h1>
        <p className="text-gray-600 dark:text-gray-400">Handle customer inquiries and support requests</p>
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
          <h1 className="text-4xl font-bold gradient-text mb-2">Inquiry Management</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Handle customer inquiries and support requests</p>
        </div>
      </div>

      {/* Search */}
      <Card className="card-gradient">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
            <Input
              placeholder="Search inquiries by name, email, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 text-base border-blue-200 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-700 dark:focus:border-blue-400 dark:focus:ring-blue-400 input-focus"
            />
          </div>
        </CardContent>
      </Card>

      {/* Inquiries List */}
      <Card className="card-gradient">
        <CardHeader className="border-b border-blue-200/50 dark:border-blue-800/50">
          <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
            Inquiries ({filteredInquiries.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {filteredInquiries.length === 0 ? (
              <div className="text-center py-12">
                <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No inquiries found</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {searchTerm ? 'Try adjusting your search terms.' : 'No inquiries have been submitted yet.'}
                </p>
              </div>
            ) : (
              filteredInquiries.map((inquiry) => (
                <div key={inquiry._id} className="p-6 border border-blue-200/50 dark:border-blue-800/50 rounded-xl hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-200 group bg-gradient-to-r from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-900/10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-semibold shadow-lg shadow-blue-500/30">
                            {inquiry.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {inquiry.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">{inquiry.email}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {getStatusBadge(inquiry.status)}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          <span>{inquiry.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          <span>{inquiry.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          <span>{formatDate(inquiry.createdAt)}</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <p className="text-gray-700 dark:text-gray-300">{inquiry.message}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <select
                        value={inquiry.status}
                        onChange={(e) => handleStatusUpdate(inquiry._id, e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="pending">Pending</option>
                        <option value="responded">Responded</option>
                        <option value="closed">Closed</option>
                      </select>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteInquiry(inquiry._id)}
                        className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:border-red-700"
                      >
                        Delete
                      </Button>
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

export default Inquiries;
