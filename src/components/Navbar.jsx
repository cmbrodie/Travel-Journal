import React from "react";
import world_icon from '../images/world_icon.png'
export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={world_icon} alt="world icon" className="navbar--icon" />
            <h1 className="navbar--header">my travel journal.</h1>
        </nav>
    )
}