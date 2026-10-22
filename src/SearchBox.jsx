import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo, setGlobalError }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const getWeatherInfo = async (queryCity) => {
    try {
      const response = await fetch(
        `${API_URL}?q=${encodeURIComponent(queryCity)}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const jsonResponse = await response.json();
      return {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
    } catch (err) {
      setError(true);
      return null;
    }
  };

  const handleChange = (evt) => {
    if (error) setError(false);
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!city.trim()) return;

    setError(false);
    setGlobalError(false);
    setLoading(true);

    const newInfo = await getWeatherInfo(city.trim());
    setLoading(false);

    if (newInfo) {
      updateInfo(newInfo);
      setCity("");
    }else {
      setGlobalError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          size="small"
          value={city}
          required
          onChange={handleChange}
          disabled={loading}
        />
        <br /><br />
        <Button
          variant="contained"
          type="submit"
          disabled={loading || !city.trim()}
          sx={{ minWidth: 120 }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Search"}
        </Button>

        {error && (
          <p style={{ color: "#d32f2f", marginTop: "12px", fontSize: "0.9rem" }}>
            No such place in our API. Please check the spelling.
          </p>
        )}
      </form>
    </div>
  );
}