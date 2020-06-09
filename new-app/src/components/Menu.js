import React from "react"
// import { withToggler } from "../HOCs/withToggler"
import Toggler from "./Toggler"

function Menu(props) {
    return (
        <Toggler defaultOnVal={true} render={
            (on, toggle) => (
                <div>
                    <button onClick={toggle}>{on ? "Hide" : "Show"} Menu</button>
                    <nav style={{ display: on ? "block" : "none" }}>
                        <h6>Signed in as BenTom</h6>
                        <a>Profile</a>
                        <a>Repos</a>
                        <a>Work</a>
                        <a>Contact</a>
                    </nav>
                </div>
            )
        }/>
    )
}

export default Menu