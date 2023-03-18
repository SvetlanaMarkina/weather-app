export default function iconSelection(weatherData) {
    switch (weatherData.weather[0].main) {
      case 'Snow':
        return (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" height="70" width="50" viewBox="0 0 50 50" fill="white">
              <path d="M12 38q-.7 0-1.225-.525-.525-.525-.525-1.225 0-.7.525-1.225Q11.3 34.5 12 34.5q.7 0 1.225.525.525.525.525 1.225 0 .7-.525 1.225Q12.7 38 12 38Zm24 0q-.7 0-1.225-.525-.525-.525-.525-1.225 0-.7.525-1.225Q35.3 34.5 36 34.5q.7 0 1.225.525.525.525.525 1.225 0 .7-.525 1.225Q36.7 38 36 38Zm-18 8q-.7 0-1.225-.525-.525-.525-.525-1.225 0-.7.525-1.225Q17.3 42.5 18 42.5q.7 0 1.225.525.525.525.525 1.225 0 .7-.525 1.225Q18.7 46 18 46Zm6-8q-.7 0-1.225-.525-.525-.525-.525-1.225 0-.7.525-1.225Q23.3 34.5 24 34.5q.7 0 1.225.525.525.525.525 1.225 0 .7-.525 1.225Q24.7 38 24 38Zm6 8q-.7 0-1.225-.525-.525-.525-.525-1.225 0-.7.525-1.225Q29.3 42.5 30 42.5q.7 0 1.225.525.525.525.525 1.225 0 .7-.525 1.225Q30.7 46 30 46ZM14.5 31q-4.35 0-7.425-3.075T4 20.5q0-3.95 2.825-7.05 2.825-3.1 7.025-3.4 1.6-2.8 4.225-4.425Q20.7 4 24 4q4.55 0 7.625 2.875T35.4 14q3.95.2 6.275 2.675Q44 19.15 44 22.5q0 3.5-2.475 6T35.5 31Zm0-3h21q2.3 0 3.9-1.625T41 22.45q0-2.25-1.6-3.85T35.5 17h-3v-1.5q0-3.55-2.475-6.025Q27.55 7 24 7q-2.55 0-4.675 1.375T16.2 12.1l-.4.9h-1.4q-3.1.1-5.25 2.275T7 20.5q0 3.1 2.2 5.3 2.2 2.2 5.3 2.2ZM24 17.5Z"/>
            </svg>
            <span>Snow</span>
          </>
        )
        break
      case 'Thunderstorm':
        return (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" height="70" width="50" viewBox="0 0 50 50" fill="white">
              <path d="m23.75 48 4.85-5.5-4-2 5.65-6.5h4l-4.85 5.5 4 2-5.65 6.5Zm-12 0 4.85-5.5-4-2 5.65-6.5h4l-4.85 5.5 4 2-5.65 6.5Zm2.75-17q-4.35 0-7.425-3.075T4 20.5q0-3.95 2.825-7.05 2.825-3.1 7.025-3.4 1.6-2.8 4.225-4.425Q20.7 4 24 4q4.55 0 7.625 2.875T35.4 14q3.95.2 6.275 2.675Q44 19.15 44 22.5q0 3.5-2.475 6T35.5 31Zm0-3h21q2.3 0 3.9-1.625T41 22.45q0-2.25-1.6-3.85T35.5 17h-3v-1.5q0-3.55-2.475-6.025Q27.55 7 24 7q-2.55 0-4.675 1.375T16.2 12.1l-.4.9h-1.4q-3.1.1-5.25 2.275T7 20.5q0 3.1 2.2 5.3 2.2 2.2 5.3 2.2ZM24 17.5Z"/>
            </svg>
            <span>Storm</span>
          </>
        )
        break
      case 'Clear':
        return (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="0 0 60 60" fill="white">
              <path d="M22.5 9.5V2h3v7.5Zm12.8 5.3-2.1-2.1 5.3-5.35 2.1 2.15Zm3.2 10.7v-3H46v3ZM22.5 46v-7.5h3V46Zm-9.85-31.25L7.4 9.5l2.1-2.1 5.3 5.3Zm25.9 25.85-5.35-5.3 2.05-2.05 5.4 5.2ZM2 25.5v-3h7.5v3Zm7.55 15.1L7.4 38.5l5.25-5.25 1.1 1 1.1 1.05ZM24 36q-5 0-8.5-3.5T12 24q0-5 3.5-8.5T24 12q5 0 8.5 3.5T36 24q0 5-3.5 8.5T24 36Zm0-3q3.75 0 6.375-2.625T33 24q0-3.75-2.625-6.375T24 15q-3.75 0-6.375 2.625T15 24q0 3.75 2.625 6.375T24 33Zm0-9Z"/>
              </svg>
            <span>Sunny</span>
          </>
        )
        break
      case 'Clouds':
        return (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" height="50" width="45" viewBox="0 0 50 50" fill="white">
              <path d="M12.55 40q-4.4 0-7.475-3.075Q2 33.85 2 29.45q0-3.9 2.5-6.85 2.5-2.95 6.35-3.55 1-4.85 4.7-7.925T24.1 8.05q5.6 0 9.45 4.075Q37.4 16.2 37.4 21.9v1.2q3.6-.1 6.1 2.325Q46 27.85 46 31.55q0 3.45-2.5 5.95T37.55 40Zm0-3h25q2.25 0 3.85-1.6t1.6-3.85q0-2.25-1.6-3.85t-3.85-1.6H34.4v-4.2q0-4.55-3.05-7.7-3.05-3.15-7.45-3.15t-7.475 3.15q-3.075 3.15-3.075 7.7h-.95q-3.1 0-5.25 2.175T5 29.45q0 3.15 2.2 5.35Q9.4 37 12.55 37ZM24 24Z"/>
            </svg>
            <span>Cloudy</span>
          </>
        )
        break
      case 'Rain':
        return (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" height="70" width="50" viewBox="0 0 50 50">
              <path fill="white" d="M27.9 43.85q-.55.25-1.175.05t-.875-.75l-3.45-6.9q-.25-.55-.075-1.175t.725-.875q.55-.25 1.175-.05t.875.75l3.45 6.9q.25.55.075 1.175t-.725.875Zm12-.05q-.55.25-1.175.05t-.875-.75l-3.45-6.9q-.25-.55-.075-1.175t.725-.875q.55-.25 1.175-.05t.875.75l3.45 6.9q.25.55.075 1.175t-.725.875Zm-24 0q-.55.25-1.175.075t-.875-.725l-3.45-6.9q-.25-.55-.05-1.175t.75-.875q.55-.25 1.175-.075t.875.725l3.45 6.95q.25.55.05 1.15-.2.6-.75.85ZM14.5 31q-4.35 0-7.425-3.075T4 20.5q0-3.95 2.825-7.05 2.825-3.1 7.025-3.4 1.6-2.8 4.225-4.425Q20.7 4 24 4q4.55 0 7.625 2.875T35.4 14q3.95.2 6.275 2.675Q44 19.15 44 22.5q0 3.5-2.475 6T35.5 31Zm0-3h21q2.3 0 3.9-1.625T41 22.5q0-2.3-1.6-3.9T35.5 17h-3v-1.5q0-3.55-2.475-6.025Q27.55 7 24 7q-2.55 0-4.675 1.375T16.2 12.1l-.4.9h-1.4q-3.1.1-5.25 2.275T7 20.5q0 3.1 2.2 5.3 2.2 2.2 5.3 2.2ZM24 17.5Z"/>
            </svg>
            <span>Rainy</span>
          </>
        )
        break
      case 'Drizzle':
        return (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" height="70" width="50" fill="white" viewBox="0 0 50 50">
              <path d="M27.9 43.85q-.55.25-1.175.05t-.875-.75l-3.45-6.9q-.25-.55-.075-1.175t.725-.875q.55-.25 1.175-.05t.875.75l3.45 6.9q.25.55.075 1.175t-.725.875Zm12-.05q-.55.25-1.175.05t-.875-.75l-3.45-6.9q-.25-.55-.075-1.175t.725-.875q.55-.25 1.175-.05t.875.75l3.45 6.9q.25.55.075 1.175t-.725.875Zm-24 0q-.55.25-1.175.075t-.875-.725l-3.45-6.9q-.25-.55-.05-1.175t.75-.875q.55-.25 1.175-.075t.875.725l3.45 6.95q.25.55.05 1.15-.2.6-.75.85ZM14.5 31q-4.35 0-7.425-3.075T4 20.5q0-3.95 2.825-7.05 2.825-3.1 7.025-3.4 1.6-2.8 4.225-4.425Q20.7 4 24 4q4.55 0 7.625 2.875T35.4 14q3.95.2 6.275 2.675Q44 19.15 44 22.5q0 3.5-2.475 6T35.5 31Zm0-3h21q2.3 0 3.9-1.625T41 22.5q0-2.3-1.6-3.9T35.5 17h-3v-1.5q0-3.55-2.475-6.025Q27.55 7 24 7q-2.55 0-4.675 1.375T16.2 12.1l-.4.9h-1.4q-3.1.1-5.25 2.275T7 20.5q0 3.1 2.2 5.3 2.2 2.2 5.3 2.2ZM24 17.5Z"/>
            </svg>
            <span>Light Rain</span>
          </>
        )
        break
      case 'Fog':
        return (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" height="70" width="50" fill="white" viewBox="0 0 50 50">
              <path fill="white"  d="M36 37.75q-.7 0-1.225-.525Q34.25 36.7 34.25 36q0-.7.525-1.225.525-.525 1.225-.525.7 0 1.225.525.525.525.525 1.225 0 .7-.525 1.225-.525.525-1.225.525ZM14 44q-.7 0-1.225-.525-.525-.525-.525-1.225 0-.7.525-1.225Q13.3 40.5 14 40.5q.7 0 1.225.525.525.525.525 1.225 0 .7-.525 1.225Q14.7 44 14 44Zm-2-6.25q-.7 0-1.225-.525Q10.25 36.7 10.25 36q0-.7.525-1.225.525-.525 1.225-.525h18q.7 0 1.225.525.525.525.525 1.225 0 .7-.525 1.225-.525.525-1.225.525ZM20 44q-.7 0-1.225-.525-.525-.525-.525-1.225 0-.7.525-1.225Q19.3 40.5 20 40.5h14q.7 0 1.225.525.525.525.525 1.225 0 .7-.525 1.225Q34.7 44 34 44Zm-5.5-13q-4.35 0-7.425-3.075T4 20.5q0-3.95 2.825-7.05 2.825-3.1 7.025-3.4 1.6-2.8 4.225-4.425Q20.7 4 24 4q4.55 0 7.625 2.875T35.4 14q3.95.2 6.275 2.675Q44 19.15 44 22.5q0 3.5-2.475 6T35.5 31Zm0-3h21q2.3 0 3.9-1.625T41 22.45q0-2.25-1.6-3.85T35.5 17h-3v-1.5q0-3.55-2.475-6.025Q27.55 7 24 7q-2.55 0-4.675 1.375T16.2 12.1l-.4.9h-1.4q-3.1.1-5.25 2.275T7 20.5q0 3.1 2.2 5.3 2.2 2.2 5.3 2.2ZM24 17.5Z"/>
            </svg>
            <span>Fog</span>
          </>
        )
        break
      default:
        return ''
    }
  }