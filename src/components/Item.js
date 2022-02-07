import React,{useState} from "react";



function Item({ name, category }) {
  
  // state tulpe
  const [isIncart, PutInCart] = useState(false);

  // className changer based on state value
  const liNameClass = isIncart ? "in-cart" : "";

  // text btn changer based on state value
  const BtnName = isIncart ? "Remove From Cart" : "Add To Cart";

  // className of btn changer based on state incart value
  const BtnClass = !isIncart ? "add":"remove";

// handler function on click add to cart btn 
  function handleOnClick(){
      PutInCart(!isIncart);
  }
  
  
  return (
    <li className={liNameClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick= {handleOnClick}className={BtnClass}>{BtnName}</button>
    </li>
  );
}

export default Item;
