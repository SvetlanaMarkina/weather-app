import { formatDate, formatSecToDay } from '../../dop/date'
import iconSelect from '../../dop/iconSelect'
function WeatherDays({ currentWeather, fourDaysWeather, city }) {
  const temp = Object.keys(currentWeather).length ? Math.round(currentWeather.main.temp) : ''
  const date = formatDate()
  return (
    <div className="daysWeather">
      <div className="weatherCity">{city}</div>
      <ul className="weatherList">
        {Object.keys(currentWeather).length
          ?
          <li className="weatherItem weatherItem-now">
            <div className="weatherItem__date">{date}</div>
            <div className="weatherItem__temp">{temp}&#176;</div>
            <div className="weatherItem__icon">
              {iconSelect(currentWeather)}
            </div>
          </li>
          : ''
        }
        {
          fourDaysWeather.map((obj, index) => {
            return <li key={index} className='weatherItem'>
              <div className="weatherItem__date">{formatSecToDay(obj.dt)}</div>
              <div className="weatherItem__temp">{Math.round(obj.main.temp)}&#176;</div>
              <div className="weatherItem__icon">
                {iconSelect(obj)}
              </div>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default WeatherDays