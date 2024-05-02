import React from 'react'
import { AiFillDashboard } from "react-icons/ai";
import { SiPowerpages } from "react-icons/si";
import { BiSolidBarChartSquare } from "react-icons/bi";
import { LiaTableSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';


const VerticleNavbar = () => {
  return (
    <div className='bg-primary' style={{color:'white' , height:'500px', paddingTop:'12px', padding:'3px'}} >
      <div className='d-flex align-items-center' style={{paddingRight:'50px'}}>
        <AiFillDashboard />
        <Link style={{color:'white'}} to='/dashboard'>Dashboard</Link>
        </div>
       
        <div className='d-flex align-items-center ' style={{ paddingTop:'15px'}}>
        <SiPowerpages />
        <Link style={{color:'white'}}  to='/pages'>Pages</Link>
        </div>
        <div className='d-flex align-items-center' style={{marginTop:'15px', padding:'3px'}}>
        <BiSolidBarChartSquare />
        <Link style={{color:'white'}} to='/charts'>Charts</Link>
        </div>
        <div className='d-flex align-items-center' style={{marginTop:'15px', padding:'3px'}}>
        <LiaTableSolid />
        <Link style={{color:'white'}} to='/table'>Tables</Link>
        </div>
    </div>
  )
}

export default VerticleNavbar
