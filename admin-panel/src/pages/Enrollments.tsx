import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Enrollments = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Enrollment Management</h1>
        <p className="text-gray-600 dark:text-gray-400">Monitor student enrollments and progress</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Enrollments</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-400">
            Enrollment management functionality coming soon.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Enrollments;
