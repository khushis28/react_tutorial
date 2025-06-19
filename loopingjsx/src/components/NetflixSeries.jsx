import React from "react"
import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./Lists"



const NetflixSeries = () =>{
    return(
    <ul>
        {seriesData.map((items)=> {
        <SeriesCard items={items}/>
    })}
    </ul>
  )      
}
export default NetflixSeries;