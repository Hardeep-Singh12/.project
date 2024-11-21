import style from"./weatherForecast.module.css"
let WeatherForecast=({api})=>{

  return <div>
  <h1 className={style.dayHead}>next 4 days forecast</h1>
  <div className={style.info}>

    {api.list.slice(1, 5).map((forecast, index) => (
      <div key={index} className={style.days}>
        <p>📅date&time: {forecast.dt_txt}</p>
        <p>♨️Temperature: {forecast.main.temp}°C</p>
        <p>🌤️sky:{forecast.weather[0].description}</p>
        <p>🧐visibility: {forecast.visibility}</p>
        <p>♨︎_♨︎humidity:{forecast.main.humidity}</p>
        <div><p>🍃wind: speed{forecast.wind.speed}</p></div>
        <hr />
      </div>

    ))}
  </div>


</div>
}

export default WeatherForecast