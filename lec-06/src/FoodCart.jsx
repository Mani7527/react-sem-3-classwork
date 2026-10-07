// import React from 'react'

// function FoodCart(Food,age,addtocart) {
//   // let Food=props.Food;
//   // let age=props.addtocart;
//   // let addtocart=props.addtocart;

//    return (
//     <div>
// <h1>{cartCount}</h1>
//       {
//         Food.map((ele)=>{
//           return(
//             <div style={{backgroundColor:"aqua"}} key={ele.id}>
//               <p>{ele.id}</p>
//               <p>{ele.name}</p>
//               <p>{ele.category}</p>
//               <p>{ele.price}</p>
//               <p>{ele.available}</p>
//               <p>{ele.emoji}</p>
//               <img src={ele.image} alt="" style={{height:"100px"}}/>
//               <button disabled={!ele.available} onClick={addtocart}>Add to cart</button>
//               <button disabled={!ele.available} onClick={removetocart}>remove to cart</button>

//             </div>
//           )
//         })
//       }
      
//     </div>
//   )
// }

// export default FoodCart

import React from 'react';

function FoodCart({ Food, cartCount, addtocart, removetocart }) {
  return (
    <div>
      <h2>Items in Cart: {cartCount}</h2>
      {Food && Food.map((ele) => {
        return (
          <div style={{ backgroundColor: "aqua", margin: "10px", padding: "10px" }} key={ele.id}>
            <p>{ele.id}</p>
            <p>{ele.name}</p>
            <p>{ele.category}</p>
            <p>₹{ele.price}</p>
            <p>{ele.available ? "Available" : "Out of Stock"}</p>
            <p>{ele.emoji}</p>
            <img src={ele.image} alt={ele.name} style={{ height: "100px" }} />
            <br />
            <button disabled={!ele.available} onClick={addtocart}>Add to cart</button>
            <button disabled={!ele.available} onClick={removetocart}>Remove from cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default FoodCart;
