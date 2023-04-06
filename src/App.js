import './App.css';
/*import React, { useState, useEffect, useCallback, useMemo } from 'react';


const App = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const sortedUsers = useMemo(() => {
    const sorted = [...users].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    return sorted;
  }, [sortOrder, users]);

  const handleSortOrder = useCallback(() => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  }, [sortOrder]);

  return (
    <div>
      <h1>Users</h1>
      <button onClick={handleSortOrder}>
        Sort by name ({sortOrder === 'asc' ? 'ascending' : 'descending'})
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;*/




import React, { useCallback } from "react"
import {useState,useEffect,useMemo} from "react"

function App(){
  const [users,setUsers]=useState([]);
  const [sort,setSort]=useState('asc');


     useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(res=>res.json())
         .then(data=>setUsers(data));
     },[]);
    console.log(users)

    //callback done only toggling here ...
    const handleSort=useCallback(()=>{
      setSort(sort==='asc'? 'desc':'asc');},[sort]);

    const sortedUsers = useMemo(() => {
         const sorted = [...users].sort((a, b) => {
        if (sort === 'asc') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
      return sorted;
    }, [sort, users]);


   
    

    
   return(
    <>
         <h1> Users </h1>

         <button onClick={handleSort}>
         sort name by {sort==='asc' ? 'ascending':'decending'} order
         </button>

  <table>
         <thead>
            <tr>
             <th>Name</th>
             <th>Username</th>
             <th>Email</th>
             <th>website</th>
             <th>Phone</th>
           </tr>
        </thead>


       <tbody>
           {sortedUsers.map(user => (
           <tr key={user.id}>
             <td>{user.name}</td>
             <td>{user.username}</td>
             <td>{user.email}</td>
             <td>{user.website}</td>
             <td>{user.phone}</td>
           </tr>
           ))}
       </tbody>

 </table>

    </>
  )
}
export default App