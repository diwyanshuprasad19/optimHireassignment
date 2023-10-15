import React from 'react';
import './Description.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar, faStarHalfAlt as halfStar } from '@fortawesome/free-regular-svg-icons';
import { useParams } from 'react-router-dom';

function Description() {

  const { id } = useParams();
 const idint = parseInt(id, 10);
  const arr =JSON.parse(localStorage.getItem('formData')).filter(item => item.id === idint);
console.log(arr);


let ratingscore = Math.floor(((arr[0].rate *2)));
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




  return (
   <>

   <div className='descriptionbody'>
<div class = "card-wrapper">
  <div class = "card">
    <div class = "product-imgs">
      <div class = "img-display">
        <div class = "img-showcase">
          <img src = {arr[0].image} alt = "shoe image"/>
         
        </div>
      </div>
    </div>
    <div class = "product-content">

      <div class = "product-detail">
        <h2>About This Product: </h2>
        <p>{arr[0].description}</p>
        <div class = "product-rating">
{elements}
        <span>({arr[0].rate})</span>
      </div>
        <ul>
          <li>Title: <span>{arr[0].title}</span></li>
          <li>Price: <span>₹{arr[0].price}</span></li>
          <li>Category: <span>{arr[0].category}</span></li>
        </ul>
      </div>

      <div class = "purchase-info">
        <input type = "number" min = "0" value = "1"/>
        <button type = "button" class = "btn">
          Add to Cart <i class = "fas fa-shopping-cart"></i>
        </button>
      </div>

    
    </div>
  </div>
</div>
</div>
   </>
  );
}

export default Description;