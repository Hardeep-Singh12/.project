import style from "./weatherReport.module.css"
function WeatherReport({ api }) {
  function sunSlap(time) {
    let date = new Date(time * 1000)
    return date.toLocaleTimeString();
  }
  return (
    <>
      <div className={style.topic1}>
        <span className={style.topic12}>{api.list.slice(0, 1).map((forecast, index) => (
          <div key={index} >
            <p>♨️Temperature: {forecast.main.temp}°C</p>
            <p>🌤️sky:{forecast.weather[0].description}</p>
            <p>🧐visibility: {forecast.visibility}</p>
            <p>♨︎_♨︎humidity:{forecast.main.humidity}</p>
            <p>🍃wind: speed{forecast.wind.speed}</p>
             </div>
        ))}</span>
        
        <div className={style.topic12}>
          <p>📌the name of city is {api.city.name}</p>
          <p>🌇the sunrise of city is : {sunSlap(api.city.sunrise)}</p>
          <p>🌆the sunset of city is : {sunSlap(api.city.sunset)}</p>
        </div>
        <span className={style.topic12}>{api.list.slice(0, 1).map((wind, index) => (
          
          <div key={index}>
            <p>🍃the speed of : {wind.wind.speed * 3.6} km/hr</p>
            <p>↗️the direction of wind :{wind.wind.deg}'deg</p>
            <p>😷the gust in wind :{wind.wind.gust}</p>
          </div>
        ))}</span>
      </div>
    </>
  )
}
export default WeatherReport