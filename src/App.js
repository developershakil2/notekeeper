import React, { useState } from 'react';
import Page1 from './Page1'
import Page2 from './Page2';
import Page3 from './Page3';
   const App = ()=>{
       const [myArr, setMyArr] = useState([]);
    const reF = (myData)=>{
        setMyArr((old)=>{
            return [...old, myData]
        })  
    }
    const cleanRe =(id)=>{
       setMyArr((oldd)=>{
        return oldd.filter((el , index)=>{
            return id !== index
        })
       })
    }
       return(
           <>
         <Page1/>
          <div style={{marginTop:'50px',marginBottom:'30px'}} className="inuf">
          <Page2 passF={reF}/>

          </div>
          
         <div className="card_align">
         {myArr.map((el, index)=>{
             return <Page3 cleanTr={cleanRe} id={index} key={index} title={el.title} content={el.content}/>

         })

         }
         
         </div>
           </>
       )
   }
   export default App;