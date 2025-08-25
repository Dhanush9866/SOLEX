import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Inquiries = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Inquiry Management</h1>
        <p className="text-gray-600 dark:text-gray-400">Handle customer inquiries and support requests</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Inquiries</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-400">
            Inquiry management functionality coming soon.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Inquiries;
