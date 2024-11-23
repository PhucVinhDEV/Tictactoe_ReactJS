import React from "react";
import { useState } from "react";



export default function Demo(){
   
const [count, setCount] = useState(0);
const user = {
   name: 'Hedy Lamarr',
   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
   imageSize: 200,
 };

 const products = [
   { title: 'Cabbage', id: 1,price:100000 },
   { title: 'Garlic', id: 2,price:200000 },
   { title: 'Apple', id: 3,price:300000 },
 ];
 const listItems = products.map(p =>
   <li key={p.id}>
     <h1>{p.title}</h1>
     {p.price}
   </li>
 );
 function handleClick() {
   alert('You clicked me!');
 }

 function handleClick2(){
   setCount(count +1);
 }
   return (
      <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <ul>{listItems}</ul>
      <button className="btn-danger" onClick={handleClick}>
      Click me
    </button>
        <button onClick={handleClick2}>
         Click Plus {count}
        </button>
      </>
   )
}