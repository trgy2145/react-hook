import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Users = () => {
  const [users, setUsers] = useState([])
  const [newUsers, setnewUsers] = useState([])
  const data = [
    { id: 11, name: 'jenny doe' },
    { id: 12, name: 'jason response' },
    { id: 13, name: 'miles tone' }
  ]
  const getUsers =()=>{
    //!fetch ile veri cekme
    /*  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((json) => setUsers(json)) //! veriyi users a attık
    .catch((err) =>console.log(err))  */

    //! axiosla veri çekme
   axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => setUsers(res.data))
    .catch((err)=>console.log(err)) 
    //! axiosun diğer kullanım sekli obje gibi
    /* axios({
      url:'https://jsonplaceholder.typicode.com/users',
      method:'GET'
    }).then((res) => setUsers(res.data)) */
  
  } 
  //!use effect ile
/*   useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users') //! defaul get tir koymazsakta calısır.
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }, []) //* EĞER DEPENDENCY KOYMAZSAM useefect ilk calıstıgında setuser usere güncelerler ,değişiklik oldugu için render edilir ve kısır döngüye girer [users ] yaparsakta sürekli güncellenir ve sınırsız döngü olur bu yüzden [] vermelisin */

  const postNewUsers = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', { data }).then((res) => setnewUsers(res.data.data))
  }

  return (
    <div className="users">
      <h2>Users</h2>
      <button onClick={getUsers} style={{ background: 'red', color: 'white' }}>
        Get Users
      </button>
      <button onClick={postNewUsers} style={{ background: 'yellow', color: 'black' }}>
        post Users
      </button>
      <div className="users-cards">
        {users.map((user) => (
          <div className="useritem" key={user.id}>
            <img src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`} alt="" srcset="" />
            {user.name}
          </div>
        ))}
        {newUsers.map((user) => (
          <div className="useritem" key={user.id}>
            <img src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`} alt="" srcset="" />
            {user.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
