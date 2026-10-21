import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import "./InfoBox.css";

export default function InfoBox({info}) {
    if(!info) return null;
    // const INIT_URL = "https://plus.unsplash.com/premium_photo-1733317236155-b0e1a2930f37?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1610557013547-dc7a52d44709?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1604568430529-741cee95e99c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1527766833261-b09c3163a791?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

  const isRain = info.humidity > 80;
  const isHot = info.tempMax > 15;

    return(
        <div className="InfoBox">
            <div className="cardContainer">
              <Card sx={{ maxWidth: 345 , width: "100%", boxShadow: 3}}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={isRain ? RAIN_URL : isHot ? HOT_URL : COLD_URL}
                  title={info.weather}
                />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} &nbsp; 
          {isRain ? (
                <ThunderstormIcon color="primary" />
              ) : isHot ? (
                <LightModeIcon sx={{ color: "#f57c00" }} />
              ) : (
                <AcUnitIcon color="info" />
              )}
        </Typography>

        <Typography variant="body2" color = 'text.secondary' component="div">
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Feels Like: {info.feelsLike}&deg;C</p>
              <p>Min: {info.tempMin}&deg;C | Max: {info.tempMax}&deg;C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Condition: <i>{info.weather}</i></p>       
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}