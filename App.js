import React from "react"
import ReactDOM from "react-dom"
import Journeys from './Journeys.js'
import data from './data.js'

export default function App(){
    return(
         <div>
         <header>
            <p> <i className="fa-solid fa-earth-americas"></i> my travel journal.</p>
         </header>
                <div className='container'>
                            {data.map((item) => (
                            <Journeys key={item.title} item={item} />
                        ))}
                </div>
        </div>
    )
}