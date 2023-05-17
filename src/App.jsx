import { useEffect, useState } from 'react'
import './App.css'
import { getLocationById } from './services/getLocationById';
import { getRandomNumber } from './utils/getRandomNumber';
import Location from './components/Location';
import Loader from './components/Loader/Loader';
import ResidentList from './components/ResidentList/ResidentList';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  const [location, setLocation] = useState(null);

  const loadLocation = async (id) => {
   
    const locationInfo = await getLocationById(id);
    setLocation(locationInfo);
  }
  
  const handleMeEstoyEnviando =  async (id) => {
    
   
    let locationInfo;
    if(!id){
    const randomId = getRandomNumber(1,126)
    locationInfo = await getLocationById(randomId);} else{
      locationInfo = await getLocationById(id)
    }

    setLocation(locationInfo);
  };

   useEffect(() => {
    const randomId = getRandomNumber(1, 126)
    loadLocation(randomId);

  }, []);

  return (
    <>
      <h1 className='principal_title'>Rick and Morty</h1>

      <SearchForm meEstoyEnviando={handleMeEstoyEnviando}/>
     
      
     {location ? <Location location={location}/>: <Loader/>  }

     <h2>Residents</h2>
     
       <ResidentList residents={location?.residents}/> 
    </>
  )
}

export default App
