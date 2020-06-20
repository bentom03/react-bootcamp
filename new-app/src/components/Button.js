import React, {Component} from "react"
import {ThemeContextConsumer} from "../context/themeContext"

class Button extends Component {

    
    render() {
        // console.log(this.context);
        // const theme = this.context
        return (
            <ThemeContextConsumer>
                {theme => (
                    <button className={`${theme}-theme`}>Switch Theme</button>
                )}
            </ThemeContextConsumer>
            
        )    
    }
}

// Button.contextType = ThemeContext

export default Button