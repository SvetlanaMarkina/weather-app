import cloudy_01 from '../assets/img/cloudy/cloudy_01.jpg'
import cloudy_02 from '../assets/img/cloudy/cloudy_02.jpg'
import cloudy_03 from '../assets/img/cloudy/cloudy_03.jpg'
import cloudy_04 from '../assets/img/cloudy/cloudy_04.jpg'
import cloudy_05 from '../assets/img/cloudy/cloudy_05.jpg'

import fog_01 from '../assets/img/fog/fog_01.jpg'
import fog_02 from '../assets/img/fog/fog_02.jpg'
import fog_03 from '../assets/img/fog/fog_03.jpg'
import fog_04 from '../assets/img/fog/fog_04.jpg'
import fog_05 from '../assets/img/fog/fog_05.jpg'

import rainy_01 from '../assets/img/rainy/rainy_01.jpg'
import rainy_02 from '../assets/img/rainy/rainy_02.jpg'
import rainy_03 from '../assets/img/rainy/rainy_03.jpg'
import rainy_04 from '../assets/img/rainy/rainy_04.jpg'
import rainy_05 from '../assets/img/rainy/rainy_05.jpg'

import snow_01 from '../assets/img/snow/snow_01.jpg'
import snow_02 from '../assets/img/snow/snow_02.jpg'
import snow_03 from '../assets/img/snow/snow_03.jpg'
import snow_04 from '../assets/img/snow/snow_04.jpg'
import snow_05 from '../assets/img/snow/snow_05.jpg'

import storm_01 from '../assets/img/storm/storm_01.jpg'
import storm_02 from '../assets/img/storm/storm_02.jpg'
import storm_03 from '../assets/img/storm/storm_03.jpg'
import storm_04 from '../assets/img/storm/storm_04.jpg'
import storm_05 from '../assets/img/storm/storm_05.jpg'

import sunny_01 from '../assets/img/sunny/sunny_01.jpg'
import sunny_02 from '../assets/img/sunny/sunny_02.jpg'
import sunny_03 from '../assets/img/sunny/sunny_03.jpg'
import sunny_04 from '../assets/img/sunny/sunny_04.jpg'
import sunny_05 from '../assets/img/sunny/sunny_05.jpg'

const snowImages = [snow_01, snow_02, snow_03, snow_04, snow_05]
const stormImages = [storm_01, storm_02, storm_03, storm_04, storm_05]
const fogImages = [fog_01, fog_02, fog_03, fog_04, fog_05]
const cloudyImages = [cloudy_01, cloudy_02, cloudy_03, cloudy_04, cloudy_05]
const sunnyImages = [sunny_01, sunny_02, sunny_03, sunny_04, sunny_05]
const rainImages = [rainy_01, rainy_02, rainy_03, rainy_04, rainy_05]

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

export default function imgSelect(weatherData) {
  const randNum = getRandomArbitrary(0, 4)
  if (Object.keys(weatherData).length) {
    switch (weatherData.weather[0].main) {
      case 'Snow':
        return snowImages[randNum]
        break
      case 'Thunderstorm':
        return stormImages[randNum]
        break
      case 'Clear':
        return sunnyImages[randNum]
        break
      case 'Clouds':
        return cloudyImages[randNum]
        break
      case 'Rain':
        return rainImages[randNum]
        break
      case 'Drizzle':
        return rainImages[randNum]
        break
      case 'Fog':
        return fogImages[randNum]
        break
    }
  } else {
    return sunnyImages[randNum]
  }

}