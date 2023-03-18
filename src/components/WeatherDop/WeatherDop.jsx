function WeatherDop({ currentWeather }) {
    const humidity = Object.keys(currentWeather).length ? `${currentWeather.main.humidity}%` : 0
    const wind = Object.keys(currentWeather).length ? `${Math.round(currentWeather.wind.speed)}km/h` : 0
    return (
      <>
        <h1 className="detailsTitle">Погода</h1>
        <ul className="detailsList">
          <li>
            <span>Влажность:&nbsp;</span>
            <span>{humidity}</span>
          </li>
          <li>
            <span>Ветер:&nbsp;</span>
            <span>{wind}</span>
          </li>
        </ul>
      </>
  
    )
  }
  
  export default WeatherDop