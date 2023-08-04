import React from 'react'
import success from '../assets/success.svg'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='success'>
      <img src={success} alt='success' />
      <marquee><h1>Order Successful</h1></marquee>
<h2>Enjoy Your Meal!!!.</h2>
<br />
<br />
<button
        style={{ maxWidth: "400px" }}
        type="button"
        className="home--btn"
      >
        <Link
          to="/"
          style={{ color: "gold", fontSize: "1.3rem" }}
        >
          Home
        </Link>
      </button>
    </div>
  )
}

export default Success
