// import React from "react";

// // const App=()=>{
// //   return(
// //     <div>
// //       <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ducimus reiciendis repudiandae quia quisquam placeat fugit vel voluptatem ipsa impedit omnis quam reprehenderit quod qui nobis pariatur, voluptate cumque aspernatur.</h1>
// //       </div>
// //   );
// // }

// // const app=()=>
// //   (<div></div>);


// import Users from "./Users";
// console.log(Users);
// import Card from "./Card";
// console.log(Card);


// const Rishav={
//   fname:"Rishav raj",
//   age:30,state:"up"
// }
// // const UsersData=Users.filter((ele)=>{
// //   if(ele.experience<=2)return true ;
// //   else
// //     return false;
// // })

// // function MyButton(){
// //   return (
// //     <button>
// //       I'm a button
// //       </button>
// //   )
// // }

// export default function App(){
//   return (
//     <div>

//       {/* <h1>this is normal App componenets</h1>
//       <h1>{Rishav.fname}</h1>
//       <h1>{Users[0].name}</h1> */}

//       {
//         UsersData.map((Element)=>{
//           return (
//             <div style={{backgroundColor:"pink"}} key={Element.id}>
              
//               <h1>{Element.name}</h1>
//               <h1>{Element.role}</h1>
//               <h1>{Element.location}</h1>
//               <h1>{Element.experience}</h1>
//               <img src={Element.image} alt=""  style={{height:"90px"}}/>

//             </div>
//           );
//         })
//       }
//     </div>
//   );
// }






// // export default App

import React from 'react'
import AdminPanel from './AdminPanel';
import LoginForm from './LoginForm'

function App() {
let content;
const isLoggedIn=true;
if (isLoggedIn) {
  content = <AdminPanel/>;
} else {
  content = <LoginForm/>;
}
return (
  <div>
    {content}
  </div>
);
  
}

export default App
