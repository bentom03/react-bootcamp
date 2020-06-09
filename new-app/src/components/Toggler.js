import React, {Component} from "react"

class Toggler extends Component {
    state = {
        on: this.props.defaultOnVal
    }

    static defaultProps = {
        defaultOnVal: false
    }

    toggle = () => {
        this.setState( prevState => ({on: !prevState.on}))
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.on, this.toggle)}
            </div>
        )
    }
}

// For function componenets
// Toggler.defaultProps = {
//     defaultOnVal: false
// }

export default Toggler

