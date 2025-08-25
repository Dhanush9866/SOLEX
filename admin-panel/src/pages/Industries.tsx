import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Plus } from 'lucide-react';

const Industries = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Industries Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage industry sectors and categories</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Industry
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Industries</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-400">
            Industry management functionality coming soon. This will include:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
            <li>• Add new industry sectors</li>
            <li>• Edit industry descriptions and benefits</li>
            <li>• Manage industry icons and images</li>
            <li>• Configure industry-specific services</li>
            <li>• Track industry performance metrics</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Industries;
