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
const count = document.querySelector('.countdown-format h4')

console.log(count)
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

birthday.textContent = `Birthday is on ${day} ${month} ${date}th, ${year} at ${hours}:${minutes}:${seconds}am`
