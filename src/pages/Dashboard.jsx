import { useAuth } from '../context/AuthContext';
import LocationSearchBar from '../components/Searchbar';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome back, {user?.name}! This is your dashboard.
        </p>
      </div>
    <div className="flex justify-center mt-10">
      <LocationSearchBar />
      </div>

      {/* <div className="bg-white shadow rounded-lg p-6">
        
      </div> */}
    </div>
  );
};

export default Dashboard;


