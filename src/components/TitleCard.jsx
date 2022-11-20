import React from "react"
import Photo from "/src/assets/me.jpg"

export default function TitleCard() {
    return (
        <div className="titlecard">
            <img src={Photo}></img>
            <h1>Samuel Dole</h1>
            <h2>Software Developer</h2>
            <h3><a href="https://www.sdole86.github.io">sdole86.github.io</a></h3>
            <div className="buttons">
                <button id="email-button"><img src="/src/assets/icon_email.png"></img>Email</button>
                <button id="linkedin-button"><img src="/src/assets/icon_linked.png"></img>LinkedIn</button>
            </div>

        </div>
    )
}