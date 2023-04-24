import React from "react";
import location_icon from '../images/location_icon.png'

export default function Card(props) {
    return (
        <section className="card">

            <img src={props.imageUrl} alt={props.title} className="card--image" />
            <div className="card--detail">
                <div className="location">
                    <img src={location_icon} alt="location icon" className="location--icon" />
                    <p className="location--name">{props.location}</p>
                    <a href={props.googleMapsUrl} className="location--link">View on Google Maps </a>
                </div>
                <h4 className="card--title">{props.title}</h4>
                <div className="dates">
                    <p>{props.startDate} - {props.endDate}</p>
                </div>
                <p className="description">{props.description}</p>
            </div>

        </section>
    )
}