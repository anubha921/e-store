import React from 'react'
import '../css/style.css'

const Header = () => {
  return (
    <div className='container d-flex'>
      <div className='box d-flex'>
      <img className='img-fluid' src={require('../images/earning.png')}/>
        <div className='box-item'>
            <span>Earning</span>
            <h2>$198k</h2>
            <h6 style={{color:"green"}}>↑ 37.8% <span style={{color:"black"}}>this month</span></h6>
        </div>
      </div> 
      <div className='box d-flex'>
      <img className='img-fluid' src={require('../images/orders.png')}/>
        <div className='box-item'>
            <span>Orders</span>
            <h2>$2.4k</h2>
            <h6 style={{color:"red"}}>↓ 2% <span style={{color:"black"}}>this month</span></h6>
        </div>
      </div> 
      <div className='box d-flex'>
      <img className='img-fluid' src={require('../images/balance.png')}/>
        <div className='box-item'>
            <span>Balance</span>
            <h2>$2.4k</h2>
            <h6 style={{color:"red"}}>↓ 2% <span style={{color:"black"}}>this month</span></h6>
        </div>
      </div> 
      <div className='box d-flex'>
      <img className='img-fluid' src={require('../images/sales.png')}/>
        <div className='box-item'>
            <span>Total Sales</span>
            <h2>$89k</h2>
            <h6 style={{color:"green"}}>↑ 11% <span style={{color:"black"}}>this week</span></h6>
        </div>
      </div> 
    </div>
  )
}

export default Header
