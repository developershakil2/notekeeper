import React from 'react';
const Page3 = (props)=>{
    const clBtn =()=>{
        props.cleanTr(props.id)
    }
    return(
        <>
        <div className="sub_card">
         <h2>{props.title}</h2>
          <p> {props.content}  </p>

          <button onClick={clBtn}  className="btn btn-outline btn-danger">trush</button>
        </div>
        </>
    )
}
export default Page3;