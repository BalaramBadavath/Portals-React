import React from 'react'
import ReactDOM from 'react-dom'

const Portal = () => {
  return (
    ReactDOM.createPortal(
        <>
            <h1>IM INSIDE PORTAL</h1>
        </>,
        document.getElementById("portal")
    )
  )
}

export default Portal