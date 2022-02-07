import React, { useState } from "react";
import Item from "./Item";




function ShoppingList({ items }) {

  // state tulpe
  const [filteredBy,setFilteredBy] = useState("All");

  // const confirmFilter = e => setFilteredBy(e.target.value);

  

  // const filteredItems = () => {
  //   if (option == ""){
  //     return items
  //   } else{
  //     return items.filter(item => {
  //       item.category === confirmFilter
  //     })
  //   }
  // }

  // const ItemsToDisplay = items.filter(item =>{
  //     if (filteredBy === "All"){
  //       return true;
  //     } else{
  //       return item.category === filteredBy
  //     }
  //     );

 let filteredItems ;

  function changeFilterHandler(option) {
  
    setFilteredBy(option);
    // filteredItems = (filteredBy==="All") ? [...items] : (items.filter(item => 
    //   item.category === filteredBy));


    // console.log("chosen option:",option);
    // console.log("changed state:",filteredBy);
    // console.log(filteredItems);
  }

function onlyFilteredItems(arItems){

  filteredItems = arItems.filter(item => (filteredBy ==="All" ? item : item.category === filteredBy))
}
onlyFilteredItems(items);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={e=>changeFilterHandler(e.target.value)} >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
