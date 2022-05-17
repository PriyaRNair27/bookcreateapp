import React from 'react'
import Header from './Components/Header'

const Viewbook = () => {
    var booklist={
        "title":"wings of fire","price":"299","author":"APJ"
    }
  return (
    <div>
        <Header/>
        <div class='container'>
            
            <div className=' col col-12 col-sm-12 col-md-12 col-lg-12  col-xl-12 col-xxl-12'>{booklist.title}</div>
            <div className=' col col-12 col-sm-12 col-md-12 col-lg-12  col-xl-12 col-xxl-12'>{booklist.price}</div>
            <div className=' col col-12 col-sm-12 col-md-12 col-lg-12  col-xl-12 col-xxl-12'>{booklist.author}</div>
        </div>
    </div>
  )
}

export default Viewbook