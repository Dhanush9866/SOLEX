import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Profile = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your admin profile and settings</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Admin Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-400">
            Profile management functionality coming soon.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
