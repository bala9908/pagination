import { useState } from "react"
import "./App.css"
export default function Pagenation({data,pagechange}){
    let pages=[]
    for(let i=1; i<=data.length/500;i++){
        pages.push(i)
    }

   
let [selectedpage,setselectedpage]=useState(null)
function changecolor(){
    let a=document.getElementById("box");
    a.classList.add("add")
}
   
    

    return(
        <>
        <div className="display">
           {
            pages.map((i)=>{return <div className={`border-1 ${selectedpage==i?"add":""}`} onClick={()=>{pagechange(i)
                setselectedpage(i)
            }} key={i}  id="box" >
                <h3>{i}</h3>
            </div>})
           }
        </div>
        </>
    )
}