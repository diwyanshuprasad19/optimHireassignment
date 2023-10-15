import React,{useContext,useState,useEffect } from 'react';
import './FeaturedList.css';
import './model.css';
import { CRUDContext } from '../../App';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar,faTrash } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar, faStarHalfAlt as halfStar } from '@fortawesome/free-regular-svg-icons';
import {useNavigate} from "react-router-dom"




function FeaturedList() {
  const auth = useContext(CRUDContext);

const[title,settitle] = useState('');
const[price,setprice] = useState(1);
const[description,setdescription] = useState('');
const[category,setcategory] = useState('');
const[image,setimage] = useState('');
const [rate,setrate] = useState(0);
const [storedData, setStoredData] = useState([]);

const [sub,setsub]= useState(true);
const [del,setdel]= useState(true);

const navigate = useNavigate();



useEffect(() => {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem('formData')) || [];
  setStoredData(dataFromLocalStorage);
}, [auth.option,sub,del]); 


const handlecross =()=>{
  auth.setpop(false);
}

const handledesc =(id)=>{
  navigate('/Description/'+id);
  }
  
    

const handlesubmit =(event)=>{
event.preventDefault();

    // Get existing data from localStorage or initialize an empty array
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];

    existingData.push({
      id:existingData.length+1,
      title:title,
      price:price,
      description:description,
      category:category,
      image:image,
      rate:rate,
    });
  const sortedData = existingData.sort((a, b) => a.price - b.price);
localStorage.setItem('formData', JSON.stringify(sortedData));
setsub(!sub);
auth.setpop(false);
}

const handleremove =(event,id)=>{
  event.stopPropagation();
  const storedData = JSON.parse(localStorage.getItem('formData'));

  // Filter out the object with the specified id
  const updatedData = storedData.filter(item => item.id !== id);

  // Save the updated data array back to localStorage
  localStorage.setItem('formData', JSON.stringify(updatedData));
  setdel(!del);
  }



  return (
   <>
   <div className='FeaturedList'>
<div className="products ">



{auth.option === 'True' ? 
storedData.map((data,key)=>{

  let ratingscore = Math.floor(((data.rate *2)));
  console.log(ratingscore)
  let fullstarfilled = parseInt(ratingscore/2);
  console.log(fullstarfilled);
  let halfstarfilled = parseInt(ratingscore%2);
  console.log(halfstarfilled);
  let emptystarfilled = parseInt((10-ratingscore)/2);
  console.log(emptystarfilled);
  let elements =[];
  for (let i = 0; i <fullstarfilled; i++) {
    elements.push( <FontAwesomeIcon  icon={solidStar} className="star-icon" />);
  }
  for (let j = 0; j < halfstarfilled; j++) {
    elements.push(<FontAwesomeIcon  icon={halfStar} className="star-icon" />);
  }
  for (let k = 0; k < emptystarfilled; k++) {
    elements.push( <FontAwesomeIcon icon={regularStar} className="star-icon"  />);
  }




  return(
  <div className="product" key={key} onClick={()=> handledesc(data.id)}>
      <div className="product-img">
        <img src={data.image} alt='1'/>
      </div>
      <div className="product-content">
        <h3>
          {data.title}
          <small>{data.category}</small>
        </h3>
    <div className='fivestar'>
{elements}
            ({data.rate})
    </div>
      <div className="icon-container">
        <div className="star-icons">
        <p className="product-text price">Price: ₹{data.price}</p>
        </div>
        <div className="trash-icon" >
          <FontAwesomeIcon icon={faTrash} onClick={(event)=>{handleremove(event,data.id)}}/>
        </div>
      </div>
      </div>
    </div>
  
  )
  })

:
storedData.reverse().map((data,key)=>{
  let ratingscore = Math.floor(((data.rate *2)));
  console.log(ratingscore)
  let fullstarfilled = parseInt(ratingscore/2);
  console.log(fullstarfilled);
  let halfstarfilled = parseInt(ratingscore%2);
  console.log(halfstarfilled);
  let emptystarfilled = parseInt((10-ratingscore)/2);
  console.log(emptystarfilled);
  let elements =[];
  for (let i = 0; i <fullstarfilled; i++) {
    elements.push( <FontAwesomeIcon  icon={solidStar} className="star-icon" />);
  }
  for (let j = 0; j < halfstarfilled; j++) {
    elements.push(<FontAwesomeIcon  icon={halfStar} className="star-icon" />);
  }
  for (let k = 0; k < emptystarfilled; k++) {
    elements.push( <FontAwesomeIcon icon={regularStar} className="star-icon"  />);
  }

  return(
  <div className="product" key={key}>
      <div className="product-img">
        <img src={data.image} alt='1'/>
      </div>
      <div className="product-content">
        <h3>
          {data.title}
          <small>{data.category}</small>
        </h3>
    <div className='fivestar'>
    {elements}
            ({data.rate})
    </div>
      <div className="icon-container">
        <div className="star-icons">
        <p className="product-text price">Price: ₹{data.price}</p>
        </div>
        <div className="trash-icon" >
          <FontAwesomeIcon icon={faTrash}  onClick={(event)=>{handleremove(event,data.id)}}/>
        </div>
      </div>
      </div>
    </div>
  
  )
  })
}



</div>
</div>




{auth.pop && <div className='containerpop'><div className={`custom-model-main ${auth.pop ? 'model-open' : ''}`}>
    <div className="custom-model-inner">        
    <div className="close-btn" onClick={handlecross}>×</div>
        <div className="custom-model-wrap">
            <div className="pop-up-content-wrap">

{/* form detal here*/}
<div className="form-container">
      <form onSubmit={handlesubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={(event) => settitle(event.target.value)}
        required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
      min='1'
      onChange={(event) => setprice(event.target.value)}
      step="0.01"
      required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          onChange={(event) => setdescription(event.target.value)}
          required
        />

        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          onChange={(event) => setcategory(event.target.value)}
          required
        />

        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={(event) => setimage(event.target.value)}
          required
        />

        <label htmlFor="rate">Rate:</label>
        <input
          type="number"
          id="rate"
          name="rate"
          onChange={(event) => setrate(event.target.value)}
          min='0'
          max='5'
          step="0.01"
          required
        />

        <button type="submit" >Submit</button>
      </form>
    </div>






            </div>
        </div>    
    </div>  
    <div className="bg-overlay"></div>
</div>
</div>}



   </>
  );
}

export default FeaturedList;