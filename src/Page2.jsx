import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Page2 = (props)=>{
    const [myData , setMyData] = useState({
        title:'',
        content: '',
    })
    const subBtn = () =>{
        props.passF(myData)
      setMyData({
        title:'',
        content: '',
      })

    }
   const inputE = (val) =>{
       const {name , value} = val.target;
       setMyData(()=>{
           return{
               ...myData,
               [name]:value,
           }
       })
   }
    return(
        <>
      <div className="inpu">
      <h1>To Do List</h1>
          <input onChange={inputE} value={myData.title} name="title"  className="form-control" type="text" placeholder="title"/>
        <textarea onChange={inputE} value={myData.content} name="content" className="form-control"  type="text" placeholder="write your note..."/>
        
        <button style={{background:'rgb(32, 211, 32)'}} className=" btn mt-2" onClick={subBtn} >submit</button>
      </div>
        </>
    )
}
export default Page2;
