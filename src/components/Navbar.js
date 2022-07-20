import React from "react"
import logo from "../img/airbnb-logo.png"
export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--logo"/>
        </nav>
    )
}