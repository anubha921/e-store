import React from 'react'
import ProductInformation from './ProductInformation'

const Dashboard = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{backgroundColor: "#040440"}}>
                <div className="d-flex flex-column align-items-center align-items-sm-start px-4 pt-2 text-white min-vh-100 mt-3" style={{position:"sticky", top:"0"}}>
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <i className="fs-3 bi-nut"></i><span className="fs-4 d-none d-sm-inline px-3">Dashboard</span>
                    </a>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <a href="#" className="nav-link align-middle px-0 text-white text-opacity-75 d-flex">
                                <i className="fs-4 bi-speedometer2"></i><span className="ms-1 p-1 d-none d-sm-inline">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-white text-opacity-75 d-flex">
                                <i className="fs-4 bi-grid"></i> <span className="ms-1 p-1 d-none d-sm-inline">Product</span> 
                                <i className='fs-6 bi-chevron-right pt-1 d-none d-sm-inline'></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-0 align-middle text-white text-opacity-75 d-flex">
                                <i className="fs-4 bi-people"></i> <span className="ms-1 p-1 d-none d-sm-inline">Customers</span>
                                <i className='fs-6 bi-chevron-right pt-1 d-none d-sm-inline'></i>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-white text-opacity-75 d-flex">
                                <i className="fs-4 bi-cash-coin"></i> <span className="ms-1 p-1 d-none d-sm-inline">Income</span>
                                <i className='fs-6 bi-chevron-right pt-1 d-none d-sm-inline'></i>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-white text-opacity-75 d-flex">
                                <i className="fs-4 bi-speaker"></i> <span className="ms-1 p-1 d-none d-sm-inline">Promote</span> 
                                <i className='fs-6 bi-chevron-right pt-1 d-none d-sm-inline'></i>
                                </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-0 align-middle text-white text-opacity-75 d-flex">
                                <i className="fs-4 bi-question-square"></i> <span className="ms-1 p-1 d-none d-sm-inline">Help</span> 
                                <i className='fs-6 bi-chevron-right pt-1 d-none d-sm-inline'></i>
                                </a>
                        </li>
                    </ul>
                    <hr/>
                    <div className="dropdown pb-4">
                        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle">
                            <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                            <span className="d-block px-2 d-none d-sm-inline">Evano</span><br/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col py-3">
                <ProductInformation/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard
