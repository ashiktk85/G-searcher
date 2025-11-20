import { useAuth } from '../context/AuthContext';
import LocationSearchBar from '../components/Searchbar';
import PlaceCard from '../components/PlaceCard';
import { useState, useEffect } from 'react';
import { authService } from '../services/auth';

const Dashboard = () => {
  const { user } = useAuth();
  const [places, setPlaces] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = async (searchValue) => {
    const searchResponse = await authService.getSearch(searchValue);
    console.log(searchResponse,"searchResponse");
    setPlaces(searchResponse);
  };
  useEffect(() => {
    if (searchValue) {
      handleSearch(searchValue);
    }
  }, [searchValue]);

  const handleEmailContact = async (email) => {
    const emailResponse = await authService.getEmail(email);
    console.log(emailResponse,"emailResponse");
    if (emailResponse) window.location.href = `mailto:${emailResponse}`;
  };
  const handleSave = async (place) => {
    const saveResponse = await authService.savePlace(place);
    console.log(saveResponse,"saveResponse");
  };
  const handleUnsave = async (place) => {
    const unsaveResponse = await authService.unsavePlace(place);
    console.log(unsaveResponse,"unsaveResponse");
  };
  const handleGmailContact = async (email) => {
    const gmailResponse = await authService.getGmail(email);
    console.log(gmailResponse,"gmailResponse");
    if (gmailResponse) window.open(`https://mail.google.com/mail/?view=cm&to=${gmailResponse}`, "_blank");
  };
  return (
    <div className=" mx-20 px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome back, {user?.name}! This is your dashboard.
        </p>
      </div>
    <div className="flex justify-center mt-10">
      <LocationSearchBar onSearch={setSearchValue} />
      </div>

      {/* <div className="bg-white shadow rounded-lg p-6">
        
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">  
        {places.map((place) => (
          <PlaceCard key={place.place_id} place={place} photoUrl={place.photoUrl} email={place.email} handleEmailContact={() => handleEmailContact(place.email)} handleGmailContact={() => handleGmailContact(place.email)} handleSave={() => handleSave(place)} handleUnsave={() => handleUnsave(place)}/>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;


