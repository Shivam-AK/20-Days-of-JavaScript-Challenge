export default function getTime() {
  setInterval(() => {
    let myTime = new Date()
    return myTime.toLocaleTimeString()
  }, second)
}