import {useState} from 'react';
import "./app.css";
import Table from "./Table"
import {Users} from "./users";
function App(){

    const [query,setQuery]=useState("");
    const keys=["first_name","last_name","email"];

   function search(data){
    return data.filter(
        (item)=>
        keys.some((key)=>item[key].toLowerCase().includes(query))
    );
   }
// console.log(Users.filter(user=>user.first_name.toLocaleLowerCase().includes("Chi")));


    return (
        <div className="app">
            <input type="text" placeholder="Search..." className="search" onChange={(e)=>setQuery(e.target.value)} />
     {/* {console.log(query)}; */}

      <Table data={search(Users)}/>


        
        </div>
    )
}

export default App;