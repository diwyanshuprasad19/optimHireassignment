import React from 'react';
import './Navbardesc.css';
import {useNavigate} from "react-router-dom"


function Navbardesc() {

const navigate = useNavigate();

const handleback =()=>{
navigate('/');
}


  return (
 <>
 <div className='navhome'> 
     <div className="container">
      <div className="store-name">Store</div>
      <div className="button-container">
        <button className="button" onClick={handleback}>Back</button>
      </div>
    </div>
    </div>
 
 </>
  );
}

export default Navbardesc;
