import React from 'react'
import Header from './Header'
import ProductInformation from './ProductInformation'

const Dashboard = () => {
  return (
    <>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{backgroundColor: "#040440"}}>
                <div class="d-flex flex-column align-items-center align-items-sm-start px-4 pt-2 text-white min-vh-100 mt-3" style={{position:"sticky", top:"0"}}>
                    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <i class="fs-3 bi-nut"></i><span class="fs-4 d-none d-sm-inline px-3">Dashboard</span>
                    </a>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li class="nav-item">
                            <a href="#" class="nav-link align-middle px-0 text-white text-opacity-75 d-flex">
                                <i class="fs-4 bi-speedometer2"></i><span class="ms-1 p-1 d-none d-sm-inline">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white text-opacity-75 d-flex">
                                <i class="fs-4 bi-grid"></i> <span class="ms-1 p-1 d-none d-sm-inline">Product</span> 
                                <i className='fs-6 bi-chevron-right pt-1 d-none d-sm-inline'></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0 align-middle text-white text-opacity-75 d-flex">
                                <i class="fs-4 bi-people"></i> <span class="ms-1 p-1 d-none d-sm-inline">Customers</span>
                                <i className='fs-6 bi-chevron-right pt-1 d-none d-sm-inline'></i>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white text-opacity-75 d-flex">
                                <i class="fs-4 bi-cash-coin"></i> <span class="ms-1 p-1 d-none d-sm-inline">Income</span>
                                <i className='fs-6 bi-chevron-right pt-1 d-none d-sm-inline'></i>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white text-opacity-75 d-flex">
                                <i class="fs-4 bi-speaker"></i> <span class="ms-1 p-1 d-none d-sm-inline">Promote</span> 
                                <i className='fs-6 bi-chevron-right pt-1 d-none d-sm-inline'></i>
                                </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0 align-middle text-white text-opacity-75 d-flex">
                                <i class="fs-4 bi-question-square"></i> <span class="ms-1 p-1 d-none d-sm-inline">Help</span> 
                                <i className='fs-6 bi-chevron-right pt-1 d-none d-sm-inline'></i>
                                </a>
                        </li>
                    </ul>
                    <hr/>
                    <div class="dropdown pb-4">
                        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle">
                            <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle"/>
                            <span class="d-block px-2 d-none d-sm-inline">Evano</span><br/>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col py-3">
                <ProductInformation/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard
