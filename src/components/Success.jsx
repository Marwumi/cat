import React from 'react'
import success from '../assets/success.svg'

const Success = () => {
  return (
    <div className='success'>
      <img src={success} alt='success' />
<h2>Order successful</h2>
<p>We have started processing your order.</p>
    </div>
  )
}

export default Success
