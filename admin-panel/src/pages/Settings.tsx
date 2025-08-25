import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">Configure system preferences and settings</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-400">
            Settings functionality coming soon.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
