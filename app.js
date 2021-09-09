const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const countdown = document.querySelector('.countdown')
const birthday = document.querySelector('.birthday')
const counts = document.querySelectorAll('.countdown-format h4')

console.log(counts)
// Year, Month, Day, Hours, Minutes, Seconds
//(Months are 0-indexed)
let futureDate = new Date(2021, 10, 15, 0, 0, 0)
console.log(futureDate)

const year = futureDate.getFullYear()
console.log(year)
const hours = futureDate.getHours()
console.log(hours)
const minutes = futureDate.getMinutes()
console.log(minutes)
const seconds = futureDate.getSeconds()
console.log(seconds)
const date = futureDate.getDate()
console.log(date)
const day = days[futureDate.getDay()]
console.log(day)
const month = months[futureDate.getMonth()]
console.log(month)

birthday.textContent = `Birthday is on ${day} ${month} ${date}th, ${year} at 0${hours}:0${minutes}:0${seconds}am`


// Get time in milliseconds 

const futureTime = futureDate.getTime()

console.log(futureTime)
console.log(months)

// Get the remanding time from today until the future time
// in days hours minutes and seconds

const getRemainingTime = () => {
  // Gets todays time value in milliseconds
  const today = new Date().getTime()
  // Get the difference in milliseconds between futureTime and today
  let remain = futureTime - today

  // get the amount of milliseconds in one day
  const oneDay = 24 * 60 * 60 * 1000
  // get the amount of milliseconds in one hour
  const oneHour = 60 * 60 * 1000
  // get the amount of milliseconds in one minute
  const oneMinute = 60 * 1000

  // Divide the remaining time in milliseconds by how the amount of milliseconds 
  // are in one day and then round the number down by using Math.floor so that 
  // you get a whole number
  let days = remain / oneDay
  days = Math.floor(days)
  // Get the remainder between remain and oneDay and then divide that by how
  //many milliseconds are in one hour and then round that number down using 
  //Math.floor so that you get a whole number 
  let hours = (remain % oneDay) / oneHour
  hours = Math.floor(hours)
  // Get the remainder between remain and oneHour and then divide that by houw 
  //many milliseconds are in one minute and then round that number down using 
  // Math.floor so that you get a whole number
  let minutes = (remain % oneHour) / oneMinute
  minutes = Math.floor(minutes)
  // Get the remainder between remain and oneMinute and then divide that by 1000
  //because that is how many milliseconds are in one second and then round that 
  // number down using Math.floor so that you get a whole number
  let seconds = (remain % oneMinute) / 1000
  seconds = Math.floor(seconds)

  // set values array 

  const values = [days, hours, minutes, seconds]

  const format = (item) => {
    if (item < 10) {
      // This will prefix 0 zero if the time goes below 10
      return `0${item}`
    } else {
      return item
    }
  }

  counts.forEach((count, index) => {
    // This will display the countdown til my birthday using the 
    //format function using the values variable above and will get all the 
    //different index values from the array  
    count.innerHTML = format(values[index])
  })

  if (remain < 0) {
    // If there is no time remaining on the birthday they we want to clear the 
    //countdown
    clearInterval(countdown2)
    birthday.innerHTML = `<h4 class='Sorry, the birthday has passed</4>`
  }
}

let countdown2 = setInterval(getRemainingTime, 1000)
// This will call the getRemainingTime function every second 

getRemainingTime()