import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
  return (

    <div style={{backgroundColor:'grey'}} className='d-flex justify-content-between  bg-primary px-2 align-items-center'>
      <h4 style={{color:'white'}}>  <span style={{color:'red'}}>Well</span> Way</h4>
      <div className='d-flex justify-content-between align-items-center'>
<input type='search' placeholder='search'></input> 

  <span><button className='bg-info border-info'><FaSearch /></button></span>
<div className='fs-2 m-2' style={{color:'white'}}><IoIosNotifications /></div>
<div className='fs-4 m-2' style={{color:'white'}}><FaMessage /></div>
<div className='fs-4 m-2 clr-' style={{color:'white'}}><FaUserCircle /></div>
       </div>

   


     
    </div>
  )
}

export default Navbar
