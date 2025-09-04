import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../components/ui/alert-dialog';
import { industriesAPI } from '../services/api';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Building2, 
  Eye, 
  EyeOff, 
  GripVertical,
  Palette,
  Image as ImageIcon,
  List,
  CheckCircle,
  XCircle
} from 'lucide-react';

interface Industry {
  _id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  image: string;
  benefits: string[];
  services: string[];
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

interface IndustryFormData {
  name: string;
  description: string;
  icon: string;
  color: string;
  image: string;
  benefits: string[];
  services: string[];
}

const Industries = () => {
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [filteredIndustries, setFilteredIndustries] = useState<Industry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, active: 0, inactive: 0 });
  
  // Dialog states
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingIndustry, setEditingIndustry] = useState<Industry | null>(null);
  
  // Form states
  const [formData, setFormData] = useState<IndustryFormData>({
    name: '',
    description: '',
    icon: 'Building2',
    color: '#3B82F6',
    image: '',
    benefits: [''],
    services: ['']
  });

  const iconOptions = [
    'Building2', 'Factory', 'Briefcase', 'Users', 'Globe', 'Cpu', 'Zap', 
    'Shield', 'TrendingUp', 'Target', 'Award', 'Star', 'Heart', 'Lightbulb'
  ];

  const colorOptions = [
    '#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899',
    '#06B6D4', '#84CC16', '#F97316', '#6366F1', '#14B8A6', '#F43F5E'
  ];

  useEffect(() => {
    fetchIndustries();
    fetchStats();
  }, []);

  useEffect(() => {
    const filtered = industries.filter(industry =>
      industry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      industry.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredIndustries(filtered);
  }, [searchTerm, industries]);

  const fetchIndustries = async () => {
    try {
      const data = await industriesAPI.getAll();
      setIndustries(data);
    } catch (error) {
      console.error('Error fetching industries:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const data = await industriesAPI.getStats();
      setStats(data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      icon: 'Building2',
      color: '#3B82F6',
      image: '',
      benefits: [''],
      services: ['']
    });
  };

  const handleCreate = async () => {
    try {
      const cleanFormData = {
        ...formData,
        benefits: formData.benefits.filter(b => b.trim() !== ''),
        services: formData.services.filter(s => s.trim() !== '')
      };
      
      await industriesAPI.create(cleanFormData);
      setIsCreateDialogOpen(false);
      resetForm();
      fetchIndustries();
      fetchStats();
    } catch (error) {
      console.error('Error creating industry:', error);
    }
  };

  const handleEdit = async () => {
    if (!editingIndustry) return;
    
    try {
      const cleanFormData = {
        ...formData,
        benefits: formData.benefits.filter(b => b.trim() !== ''),
        services: formData.services.filter(s => s.trim() !== '')
      };
      
      await industriesAPI.update(editingIndustry._id, cleanFormData);
      setIsEditDialogOpen(false);
      setEditingIndustry(null);
      resetForm();
      fetchIndustries();
    } catch (error) {
      console.error('Error updating industry:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await industriesAPI.delete(id);
      fetchIndustries();
      fetchStats();
    } catch (error) {
      console.error('Error deleting industry:', error);
    }
  };

  const handleToggleStatus = async (id: string) => {
    try {
      await industriesAPI.toggleStatus(id);
      fetchIndustries();
      fetchStats();
    } catch (error) {
      console.error('Error toggling status:', error);
    }
  };

  const openEditDialog = (industry: Industry) => {
    setEditingIndustry(industry);
    setFormData({
      name: industry.name,
      description: industry.description,
      icon: industry.icon,
      color: industry.color,
      image: industry.image,
      benefits: industry.benefits.length > 0 ? industry.benefits : [''],
      services: industry.services.length > 0 ? industry.services : ['']
    });
    setIsEditDialogOpen(true);
  };

  const addBenefit = () => {
    setFormData(prev => ({
      ...prev,
      benefits: [...prev.benefits, '']
    }));
  };

  const removeBenefit = (index: number) => {
    setFormData(prev => ({
      ...prev,
      benefits: prev.benefits.filter((_, i) => i !== index)
    }));
  };

  const updateBenefit = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      benefits: prev.benefits.map((benefit, i) => i === index ? value : benefit)
    }));
  };

  const addService = () => {
    setFormData(prev => ({
      ...prev,
      services: [...prev.services, '']
    }));
  };

  const removeService = (index: number) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index)
    }));
  };

  const updateService = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.map((service, i) => i === index ? value : service)
    }));
  };

  const getStatusBadge = (isActive: boolean) => {
    return isActive ? (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
        <CheckCircle className="w-3 h-3 mr-1" />
        Active
      </span>
    ) : (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
        <XCircle className="w-3 h-3 mr-1" />
        Inactive
      </span>
    );
  };

  if (loading) {
  return (
    <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Industries Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage industry sectors and categories</p>
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
          <h1 className="text-4xl font-bold gradient-text mb-2">Industries Management</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Manage industry sectors and categories</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="button-primary" onClick={resetForm}>
              <Plus className="h-5 w-5 mr-2" />
          Add Industry
        </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Industry</DialogTitle>
              <DialogDescription>
                Create a new industry sector with its details, benefits, and services.
              </DialogDescription>
            </DialogHeader>
            <IndustryForm 
              formData={formData} 
              setFormData={setFormData}
              addBenefit={addBenefit}
              removeBenefit={removeBenefit}
              updateBenefit={updateBenefit}
              addService={addService}
              removeService={removeService}
              updateService={updateService}
              iconOptions={iconOptions}
              colorOptions={colorOptions}
            />
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreate}>Create Industry</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card-hover card-gradient">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Industries</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="card-hover card-gradient">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.active}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="card-hover card-gradient">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                <XCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Inactive</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.inactive}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card className="card-gradient">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
            <Input
              placeholder="Search industries by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 text-base border-blue-200 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-700 dark:focus:border-blue-400 dark:focus:ring-blue-400 input-focus"
            />
          </div>
        </CardContent>
      </Card>

      {/* Industries List */}
      <Card className="card-gradient">
        <CardHeader className="border-b border-blue-200/50 dark:border-blue-800/50">
          <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
            Industries ({filteredIndustries.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {filteredIndustries.length === 0 ? (
              <div className="text-center py-12">
                <Building2 className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No industries found</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {searchTerm ? 'Try adjusting your search terms.' : 'Get started by creating your first industry.'}
                </p>
              </div>
            ) : (
              filteredIndustries.map((industry) => (
                <div key={industry._id} className="p-6 border border-blue-200/50 dark:border-blue-800/50 rounded-xl hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-200 group bg-gradient-to-r from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-900/10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex items-center space-x-4">
                          <div 
                            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-semibold shadow-lg"
                            style={{ backgroundColor: industry.color }}
                          >
                            <Building2 className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {industry.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">{industry.description}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {getStatusBadge(industry.isActive)}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {industry.benefits.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Benefits</h4>
                            <ul className="space-y-1">
                              {industry.benefits.slice(0, 3).map((benefit, index) => (
                                <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                                  {benefit}
                                </li>
                              ))}
                              {industry.benefits.length > 3 && (
                                <li className="text-sm text-gray-500 dark:text-gray-500">
                                  +{industry.benefits.length - 3} more
                                </li>
                              )}
                            </ul>
                          </div>
                        )}
                        
                        {industry.services.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Services</h4>
                            <ul className="space-y-1">
                              {industry.services.slice(0, 3).map((service, index) => (
                                <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                  {service}
                                </li>
                              ))}
                              {industry.services.length > 3 && (
                                <li className="text-sm text-gray-500 dark:text-gray-500">
                                  +{industry.services.length - 3} more
                                </li>
                              )}
          </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleToggleStatus(industry._id)}
                        className={industry.isActive ? "border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300" : "border-green-200 text-green-600 hover:bg-green-50 hover:border-green-300"}
                      >
                        {industry.isActive ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                        {industry.isActive ? 'Deactivate' : 'Activate'}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditDialog(industry)}
                        className="button-secondary"
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:border-red-700"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Industry</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete "{industry.name}"? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(industry._id)}
                              className="bg-red-600 hover:bg-red-700"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Industry</DialogTitle>
            <DialogDescription>
              Update the industry details, benefits, and services.
            </DialogDescription>
          </DialogHeader>
          <IndustryForm 
            formData={formData} 
            setFormData={setFormData}
            addBenefit={addBenefit}
            removeBenefit={removeBenefit}
            updateBenefit={updateBenefit}
            addService={addService}
            removeService={removeService}
            updateService={updateService}
            iconOptions={iconOptions}
            colorOptions={colorOptions}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEdit}>Update Industry</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Industry Form Component
interface IndustryFormProps {
  formData: IndustryFormData;
  setFormData: (data: IndustryFormData) => void;
  addBenefit: () => void;
  removeBenefit: (index: number) => void;
  updateBenefit: (index: number, value: string) => void;
  addService: () => void;
  removeService: (index: number) => void;
  updateService: (index: number, value: string) => void;
  iconOptions: string[];
  colorOptions: string[];
}

const IndustryForm: React.FC<IndustryFormProps> = ({
  formData,
  setFormData,
  addBenefit,
  removeBenefit,
  updateBenefit,
  addService,
  removeService,
  updateService,
  iconOptions,
  colorOptions
}) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Industry Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g., Technology, Healthcare"
          />
        </div>
        <div>
          <Label htmlFor="icon">Icon</Label>
          <select
            id="icon"
            value={formData.icon}
            onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {iconOptions.map(icon => (
              <option key={icon} value={icon}>{icon}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Describe the industry sector..."
          rows={3}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="color">Color</Label>
          <div className="flex space-x-2 mt-2">
            {colorOptions.map(color => (
              <button
                key={color}
                type="button"
                className={`w-8 h-8 rounded-full border-2 ${formData.color === color ? 'border-gray-800' : 'border-gray-300'}`}
                style={{ backgroundColor: color }}
                onClick={() => setFormData({ ...formData, color })}
              />
            ))}
          </div>
        </div>
        <div>
          <Label htmlFor="image">Image URL (Optional)</Label>
          <Input
            id="image"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            placeholder="https://example.com/image.jpg"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <Label>Benefits</Label>
          <Button type="button" variant="outline" size="sm" onClick={addBenefit}>
            <Plus className="h-4 w-4 mr-1" />
            Add Benefit
          </Button>
        </div>
        <div className="space-y-2">
          {formData.benefits.map((benefit, index) => (
            <div key={index} className="flex space-x-2">
              <Input
                value={benefit}
                onChange={(e) => updateBenefit(index, e.target.value)}
                placeholder="Enter a benefit..."
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeBenefit(index)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <Label>Services</Label>
          <Button type="button" variant="outline" size="sm" onClick={addService}>
            <Plus className="h-4 w-4 mr-1" />
            Add Service
          </Button>
        </div>
        <div className="space-y-2">
          {formData.services.map((service, index) => (
            <div key={index} className="flex space-x-2">
              <Input
                value={service}
                onChange={(e) => updateService(index, e.target.value)}
                placeholder="Enter a service..."
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeService(index)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
