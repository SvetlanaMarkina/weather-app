import { formatDate } from '../../dop/date'
import iconSelect from '../../dop/iconSelect'
function CurrentWeather({ currentWeather, city }) {
  const temp = Object.keys(currentWeather).length ? Math.round(currentWeather.main.temp) : ''
  const date = formatDate()

  return (
    Object.keys(currentWeather).length
      ?
      <div className="weather">
        <div className="temp">{temp}&#176;</div>
        <div className="info">
          <div className="city">{city}</div>
          <div className="date">{date}</div>
        </div>
        <div className="weatherIcon">
          {iconSelect(currentWeather)}
        </div>
      </div>
      :
      ""
  )
}

export default CurrentWeather