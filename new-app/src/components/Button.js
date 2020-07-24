import React, {Component} from "react"
import {ThemeContextConsumer} from "../context/themeContext"

class Button extends Component {

    
    render() {
        // console.log(this.context);
        // const theme = this.context
        return (
            <ThemeContextConsumer>
                {context => (
                    <button className={`${context.theme}-theme`} onClick={context.toggle}>Switch Theme</button>
                )}
            </ThemeContextConsumer>
            
        )    
    }
}

// Button.contextType = ThemeContext

export default Button