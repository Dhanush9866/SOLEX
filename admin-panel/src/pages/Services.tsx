import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Services = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Services Management</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage service offerings and configurations</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Services</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-400">
            Services management functionality coming soon.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Services;
