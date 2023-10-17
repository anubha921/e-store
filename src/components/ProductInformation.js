import React from 'react'
import CustomersGraph from './CustomersGraph'
import Header from './Header'
import Overview from './Overview'
import ProductSaleList from './ProductSaleList'

const ProductInformation = () => {
  return (
    <div className='product-information-container'>
      <div className='main-search d-flex'>
        <h2>Hello Shahrukh {String.fromCodePoint('128075')}</h2>
        <div className='main ms-auto'>
            <div class="form-group has-search">
                <span class="bi bi-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder="Search"/>
            </div>
        </div>
      </div>
      <div className='header-container'>
        <Header/>
      </div>
      <div className='d-flex overview-container-box' >
        <div className='overview-container'>
            <Overview/>
        </div>
        <div className='customer-container' >
            <CustomersGraph/>
        </div>
      </div>
      <ProductSaleList/>
    </div>
  )
}

export default ProductInformation
