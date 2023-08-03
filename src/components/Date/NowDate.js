import { useEffect, useState } from 'react'

const NowDate = () => {
  const [nowTime, setNowTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setNowTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [setNowTime])

  function addZero(i) {
    if (i < 10) {
      i = '0' + i
    }
    return i
  }

  let hours = addZero(nowTime.getHours())
  let minutes = addZero(nowTime.getMinutes())
  let seconds = addZero(nowTime.getSeconds())
  let time = hours + ':' + minutes + ':' + seconds

  return (
    <div>
      <h2>{time}</h2>
    </div>
  )
}

export default NowDate
