import React, {Component} from "react"
import {ThemeContextConsumer} from "../context/themeContext"
// import UserContext from "../context/userContext"

function Header(props) {
    return (
        <ThemeContextConsumer>
            {theme => (
                <header className={`${theme}-theme`}>
                    <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
            )}
        </ThemeContextConsumer>
    )
}


// class Header extends Component {
//     static contextType = ThemeContext
//     render() {
//         const theme = this.context
//         return (
//             <header className={`${theme}-theme`}>
//                 <h2>Light Theme</h2>
//             </header>
//         )    
//     }
// }

export default Header