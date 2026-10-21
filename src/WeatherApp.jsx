import {useState} from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city: "Hyderabad",
        temp: 32.23,
        feelsLike: 32.08,
        humidity: 37,
        tempMax: 32.23,
        tempMin: 32.23,
        weather: "clear sky"
    });

    const [hasError, setHasError] = useState(false);

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
        setHasError(false);
    }

    return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1 style={{ marginBottom: "20px" }}>Weather App</h1>
      
      <SearchBox updateInfo={updateInfo} setGlobalError={setHasError} />
      
      {!hasError && <InfoBox info={weatherInfo} />}
    </div>
  );
}