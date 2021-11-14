import React from 'react'
import "../App.css"
import { SidebarData } from '../SidebarData';

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarData.map((val,key)=>{
                   return( 
                   <li key={key} 
                   onClick={()=>window.location.pathname=val.link} 
                   className="row"
                   id={window.location.pathname === val.link ? "Active" :""}
                   >
                       {" "}
                       <div id="icon">{val.icon}</div>
                       {" "}
                        <div id="title">{val.title}</div>
                    </li>)
                })}

            </ul>
<h1>Hi</h1>
            
        </div>
    )
}

export default Sidebar
