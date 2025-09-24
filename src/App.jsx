// src/App.jsx

import WeatherForecast from "./components/WeatherForecast/WeatherForecast";

const weatherForecasts = [
  {
    day: 'Mon',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];


const App = () => {

  return (
      <>
    <h1>Local Weather</h1>
    <section>
      {/* <WeatherForecast 
      day = {weatherForecasts.day}
      img = {weatherForecasts.img}
      imgAlt = {weatherForecasts.imgAlt}
      condition = {weatherForecasts.conditions}
      time = {weatherForecasts.time} /> */}
      {
        weatherForecasts.map((weatherForecast) => (
          <WeatherForecast
          day = {weatherForecast.day}
          img = {weatherForecast.img}
          imgAlt = {weatherForecast.imgAlt}
          condition = {weatherForecast.conditions}
          time = {weatherForecast.time}
          />
        )
      )
      }
    </section>
  </>

    )
  }

export default App
