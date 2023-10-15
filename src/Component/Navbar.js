import React,{useContext} from 'react';
import './Navbar.css';
import { CRUDContext } from '../App';


function Navbar() {
  const auth = useContext(CRUDContext);

const handleadd =()=>{
  auth.setpop(true);
  console.log(auth.pop);
}

const handleoption = (event)=>{
  console.log(event.target.value);
  auth.setoption(event.target.value);

}


  return (
 <>
 <div className='navhome'> 
     <div className="container">
      <div className="store-name">Store</div>
      <div className="button-container">

      <div className="select-container">

      <select  className="button"   onChange={handleoption}>
        <option value="True">Low to High</option>
        <option value="False">High to Low</option>
      </select>
    </div>





        <button className="button" onClick={handleadd}>Add Product</button>
      </div>
    </div>
    </div>
 
 </>
  );
}

export default Navbar;
