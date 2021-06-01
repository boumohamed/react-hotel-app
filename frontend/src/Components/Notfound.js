import React from 'react'
import Footer from './Footer'

export default function Notfound() {
    return (
        <>
             <div className="d-flex justify-content-center align-items-center h-25 my-5 with-footer">
               <h1 className="text-warning mb-0">404 PAGE NOT FOUND <i className="far fa-sad-tear"></i></h1>
            </div>
            <Footer />
        </>
    )
}
