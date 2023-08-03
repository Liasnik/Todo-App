import React, { useEffect, useState } from 'react'
import styles from './countdownTimer.module.css'

const CountdownTimer = () => {
  const targetDate = new Date('2023-08-23T09:00:00')

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()

    if (difference <= 0) {
      // The date has already passed
      return {
        days: 0,
        hours: 0,
        minutes: 0,
      }
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((difference / (1000 * 60)) % 60)

    return {
      days,
      hours,
      minutes,
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 60000)
    return () => clearInterval(timer)
  })

  return (
    <div className={styles.container}>
      <h4>
        Wedding in - {timeLeft.days > 0 && timeLeft.days}{' '}
        {timeLeft.days > 0 && timeLeft.days === 1 ? 'day, ' : 'days, '}{' '}
        {timeLeft.hours} {timeLeft.hours === 1 ? 'hour' : 'hours'},{' '}
        {timeLeft.minutes} {timeLeft.minutes === 1 ? 'minute!' : 'minutes!'}
      </h4>
    </div>
  )
}

export default CountdownTimer
