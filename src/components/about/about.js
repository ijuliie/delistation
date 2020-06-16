import React from "react"

export default function About(){
    return (
        <div className="wrapper">
            <div className="about">
                <div className="title">LOCATION</div>
                <div className="address"> 201 East 4th St.</div>
                <div className="address">Santa Ana, CA 92701</div>
            </div>
            <div className="hours">
                <p>SUN 8:30am - 9:00pm</p>
                <p>MON 8:30am - 9:00pm</p>
                <p>TUE 8:30am - 9:00pm</p>
                <p>WED 8:30am - 9:00pm</p>
                <p>THU 8:30am - 10:00pm</p>
                <p>FRI 8:30am - 10:00pm</p>
                <p>SAT 8:30am - 11:00pm</p>
            </div>
        </div>
    )
}