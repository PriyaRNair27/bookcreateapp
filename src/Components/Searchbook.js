import React from 'react'
import Header from './Header'

const Searchbook = () => {
  return (
    <div>
        <Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">Book Title</label>
                    <input placeholder="enter book title" type="text" className="form-control"/>
                </div>

                

               
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success">search</button>
                </div>
            </div>
        </div>
    </div>
</div>




    </div>
  )
}

export default Searchbook