import { useEffect, useState } from "react";
import "./App.css";
import getRandomNumber from "./utils/getRandomNumber";
import useFetch from "./hooks/useFetch";
import FormSearch from "./components/FormSearch";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";

function App() {
  const randomId = getRandomNumber(126);
  const [idLocation, setIdLocation] = useState(randomId);

  const url = `https://rickandmortyapi.com/api/location/${idLocation}`;

  const [location, getApiLocation, hasError] = useFetch(url);

  useEffect(() => {
    getApiLocation();
  }, [idLocation]);

  return (
    <>
      <div className="app app__content">
        <img src="/tt.png" alt="" className="app__banner" />
        <FormSearch setIdLocation={setIdLocation} randomId={randomId}/>

        {hasError ? (
          <h4 className="msg__id--location">Hey! you must provide an id from 1 to 126</h4>
        ) : (
          <>
            <LocationInfo location={location} />
            <div className="resident-container">
              {location?.residents.map((url) => (
                <ResidentCard url={url} key={url} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
