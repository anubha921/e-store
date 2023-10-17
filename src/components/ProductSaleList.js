import React from 'react'

const ProductSaleList = () => {
  return (
    <div className='bg-white product-container'>
        <div className='search-container d-flex'>
            <div className='flex-grow-1'>
                <h2>Product Sell</h2>
            </div>
            <div className='main'>
                <div class="form-group has-search">
                    <span class="bi bi-search form-control-feedback"></span>
                    <input type="text" class="form-control" placeholder="Search"/>
                </div>
            </div>
            <div className='dropdown-box'>
                <div>Last 30 days<span className='bi bi-chevron-down'/></div>
            </div>
        </div>     
        <div>
        <table>   
            <tr className='table-header'>
                <th>Product Name</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Total Sales</th>
            </tr>      
            <tr>
                <td className='d-flex'>
                    <img src={require('../images/img-1.png')} className="img-fluid" alt="" />
                    <div>
                        <span style={{fontWeight:"bold"}}>Abstract 3D</span>
                        <p style={{fontWeight:"400"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, hic.</p>
                    </div>
                </td>             
                <td>32 in stock</td>
                <td style={{fontWeight:"bold"}}>$ 45.99</td>
                <td>20</td>
            </tr>        
            <tr>
                <td className='d-flex'>
                    <img src={require('../images/img-2.jpg')} className="img-fluid" alt="" />
                    <div>
                        <span style={{fontWeight:"bold"}}>Sarphens Illustration</span>
                        <p style={{fontWeight:"400"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, hic.</p>
                    </div>
                </td>   
                <td>32 in stock</td>
                <td style={{fontWeight:"bold"}}>$ 45.99</td>
                <td>20</td>
            </tr>        
        </table>
        </div>
    </div>
  )
}

export default ProductSaleList
