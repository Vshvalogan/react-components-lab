import WeatherData from "./WeatherData";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
const WeatherForecast = (props) => {

  return (
      <>
      <div className="weather">
        <h2>{props.day}</h2>
        <WeatherIcon icon = {props.img} iconalt = {props.imgAlt} / >
        <WeatherData condition = {props.condition} time ={props.time} />
      </div>
    </>

  );
}

export default WeatherForecast;
