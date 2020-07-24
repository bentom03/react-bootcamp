import React, {Component} from "react"
// import {ThemeContextConsumer} from "../context/themeContext"
import {UserContextConsumer} from "../context/userContext"

function Header(props) {
    return (
        <header className="dark-theme">
            <UserContextConsumer>
                {({username}) => (
                    <p>Welcome, {username}!</p>
                    )
                }
            </UserContextConsumer>
        </header>
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