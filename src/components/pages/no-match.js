import React from 'react'
import { Link } from "react-router-dom"

const NoMatch = () => {
  return (
    <div className="">
      <h2>We Couldn't Find That Page</h2>
      <Link to="/">Return to Home</Link>
    </div>
  )
}

export default NoMatch