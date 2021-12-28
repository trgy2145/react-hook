import { getDefaultNormalizer } from '@testing-library/react';
import React,{ useEffect, useState } from 'react'
//!component dısı ilk calıstıgında okunur render edilince bura okunmaz komp içi okunur
//!comp fonk basladıgı yerden bittiği yere kadardır
//!değişkenleri komp içinde tanımlaman daha iyi olur
//!let const = 0 ; deyip butona bağlarsak tusa ne kadar bsarsak basalım consol logda artıs olur ancak count değişmez ne zaman sayfa render olursa count toplu yazılır..

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(4);
  // const [user,setUser] = useState({name:'felix',age : 25 ,email:'trgy214@.com'})

  const decEvent=()=> setCount(count-1)
   const changeAge = () => setAge(age + 1)
   /* const upDate = () =>{
     setUser({...user,name:'ali',age:40});//! sıralama önemli
   } */
   useEffect(() => {
     count !==0 && alert (`new notif ${count}`)  //! sayfa render olur güncellenir öyle çalısır dısarı yazarsak güncel değeri almaz çünkü önce sayfa bastan sona okunur sonra useeffect cagrılır.
     console.log("use effect");
     let timeOut = setTimeout(()=>{
       alert("hello")
     },3000)
     return () => {
       clearTimeout(timeOut);
       console.log("func comp rendered")
     }  //!update de de calısır ancak genelde willun mount amaclı kullanılır.clean up
     //! dependency koymazsak hem ilk render hemde her renderda calısır yani didmount ve didUpdate görevi yapar
   },[count]) //! dependency verdik suan artık sadece didmount anında çalısır [count] verirsek sadece count değişince çalısır
   //! önce sayfamız render olur sonra lifecycle (use efffect)larımız calısır
   console.log("önce calısır");
  
  return (
    <div className="function">
      <h2>functional component</h2>
      <h3>count : {count}</h3>
      <h3>age : {age}</h3>
      <button onClick={decEvent}>decrease</button><br />
      <button onClick={changeAge}>change age</button>
      <h2>user's info</h2>
      {/* <h3>name : {user.name}</h3>
      <h3>age : {user.age}</h3>
      <h3>email:{user.email}</h3> */}
      {/* <button onClick={upDate}>update</button> */}
    </div>
  )
}

export default FunctionalComponent
