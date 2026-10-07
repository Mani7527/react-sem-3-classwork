import React, { useState } from 'react'
import Food from './Food'
import FoodCart from './FoodCart';


function App() {
  const [cartCount,setcartCount]=useState(0);
// function addtocart(){
//   // console.log("hii");
//   // console.log("by");
//     setcartCount(cartCount+1)
  
  
// }
const addtocart=()=>{
  
  // console.log("hi");
  // console.log("bye");
  setcartCount(cartCount+1);
}
const removetocart = () => {
    setcartCount(prev => (prev > 0 ? prev - 1 : 0));
  };
//   return (
//     <div>
// <h1>{cartCount}</h1>
//       {
//         Food.map((ele)=>{
          // return(
          //   <div style={{backgroundColor:"aqua"}} key={ele.id}>
          //     <p>{ele.id}</p>
          //     <p>{ele.name}</p>
          //     <p>{ele.category}</p>
          //     <p>{ele.price}</p>
          //     <p>{ele.available}</p>
          //     <p>{ele.emoji}</p>
          //     <img src={ele.image} alt="" style={{height:"100px"}}/>
          //     <button disabled={!ele.available} onClick={addtocart}>Add to cart</button>




          //   </div>
          // )
  //       })
  //     }
      
  //   </div>
  // )

  return (
    <div>
      <h1>Cart: {cartCount}</h1>
      <FoodCart 
        Food={Food} 
        cartCount={cartCount} 
        addtocart={addtocart} 
        removetocart={removetocart} 
      />
    </div>
  );
}

export default App
