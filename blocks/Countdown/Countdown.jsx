import React from 'react'
import CD from 'react-countdown'

function Countdown({ time, title }) {
  return (
    <div>
      <p style={{ fontSize: '2em' }}>{title}</p>
      <CD date={Date.now() + time} />
    </div>
  )
}

export default Countdown
