import React from "react"
import ReactDOM from "react-dom"


export default function App(props){
    return(
          <div className="travel-journal-item">
            <img src={props.item.imageUrl} alt="Location Image" />
            <div className="location-info">
                <div className="location-name">
                    <i className="fa-solid fa-location-dot"></i> {props.item.location} <a href={props.item.googleMapsUrl}>View on Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                 <div className="time-info">
                    <h3>{props.item.startDate}/</h3>
                    <h3>{props.item.endDate}</h3>
                </div>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}

