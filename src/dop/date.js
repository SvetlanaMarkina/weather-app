const days = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat'
  }
  const monthes = {
    0: 'Jan\'',
    1: 'Feb\'',
    2: 'Mar\'',
    3: 'Apr\'',
    4: 'May\'',
    5: 'Jun\'',
    6: 'Jul\'',
    7: 'Aug\'',
    8: 'Sep\'',
    9: 'Oct\'',
    10: 'Nov\'',
    11: 'Dec\''
  }
  function formatDate() {
    const dateObj = new Date()
  
    const parseYear = () => {
      const arr = dateObj.getFullYear().toString().split('')
      return `${arr[arr.length - 2]}${arr[arr.length - 1]}`
    }
    return `
    ${dateObj.getHours()}:${dateObj.getMinutes()} - ${days[dateObj.getDay()]}
    ${dateObj.getDate()} ${monthes[dateObj.getMonth()]} ${parseYear()}
     `
  }
  
  function formatSecToDay(sec) {
    const milSec = sec * 1000
    const dateObj = new Date(milSec)
    const day = dateObj.getDay()
    const date = dateObj.getDate()
    const month = dateObj.getMonth()
    const parseYear = () => {
      const arr = dateObj.getFullYear().toString().split('')
      return `${arr[arr.length - 2]}${arr[arr.length - 1]}`
    }
    return `${days[day]} ${date} ${monthes[month]} ${parseYear()}`
  }
  export { formatDate, formatSecToDay }