import React from 'react'

function Text({ headline, description }) {
  return (
    <div>
      Static Text...
      <h1 style={{ fontSize: '2em', fontWeight: 'bold' }}>{headline}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Text
