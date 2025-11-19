const Users = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Saved Locations</h1>
        <p className="mt-2 text-gray-600">Manage all saved locations</p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="text-center py-8">
          <div className="text-gray-500">No saved locations yet</div>
        </div>
      </div>
    </div>
  );
};

export default Users;

