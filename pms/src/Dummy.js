import { useState,useEffect } from "react";

function Dummy()
{

    let [name,setName]=useState("Saurabh")
    

    useEffect(()=>{
        console.log("Component rendered")
    },[])


    

    

    function changeName()
    {
        setName("Thor")
        
    }

    return(
        <div>
            <h1>{name}</h1>
            <button onClick={changeName} >Change Name</button>
        </div>
    )
}

export default Dummy;