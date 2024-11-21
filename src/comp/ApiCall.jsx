import { useEffect, useState } from "react"
import style from "./ApiCall.module.css"
import WeatherReport from "./weatherReport"
import WeatherForecast from "./weatherForecast"
const Apt = () => {
  let [api, SetApi] = useState([])
  let [city, setCity] = useState(" ")
  let [finalCity, setFinalCity] = useState()

  function findWork(re) {
    re.preventDefault()
    console.log(city);
    setFinalCity(city)
    setCity("")
  }
  function handleChange(re) {
    setCity(re.target.value)
    console.log(city);

  }

  useEffect(() => {
    if (!finalCity) return;
    async function fetchData() {
      let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${finalCity}&APPID=6557810176c36fac5f0db536711a6c52`)
      let val = await res.json()
      console.log(val);
      SetApi(val)
    }
    fetchData()
  }
    , [finalCity]
)
  return <>
    <div className={style.wether}>
      <form className={style.Form} onSubmit={findWork}>
        <input className={style.in} type="text" placeholder="type state" name={city} onChange={handleChange} />
        <button className={style.in} onClick={findWork}>search</button>
      </form>
      {api && api.list ? (<div className={style.allReport}>
        <h1 className={style.infoHead}>Weather Forecast for {finalCity}🌅</h1>
        <WeatherReport api={api} />
        <WeatherForecast api={api} />
      </div>) : (
        finalCity && <p>Loading weather data...</p> ) }</div>
  </>
}
export default Apt