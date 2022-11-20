import React from "react"
import icon_twitter from "/src/assets/icon_twitter.png"
import icon_facebook from "/src/assets/icon_facebook.png"
import icon_instagram from "/src/assets/icon_instagram.png"
import icon_github from "/src/assets/icon_github.png"


export default function Footer() {
    return (
        <div className="footer">
            <img src={icon_twitter}></img>
            <img src={icon_facebook}></img>
            <img src={icon_instagram}></img>
            <img src={icon_github}></img>
        </div>
    )
}