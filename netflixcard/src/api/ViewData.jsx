import React from "react";

import showData from "./data.json"

const ViewData =()=>{
    return(
      <>
       <div>
           {showData.map((items) => (
            <>
               <div key={items.id}>
                    <p>{items.name}</p>
                    <img height={20} width={20} src={items.img_url} alt="" />
                    <p>{items.description}</p>
                    <p>{items.genre}</p>
                   <a href={items.watch_url}> Watch URL</a>
               </div>
            </>
           ))}
       </div>
       </>
    )
}

export default ViewData;