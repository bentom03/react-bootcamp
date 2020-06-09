import React, {Component} from "react"

class Toggler extends Component {
    state = {
        on: this.props.defaultOnVal
    }

    toggle = () => {
        this.setState( prevState => {
            return {
                on: !prevState.on
            }
        })
    }

    render() {
        const {component: C, defaultOnVal, ...props} = this.props
        return (
            <C on={this.state.on} toggle={this.toggle} {...props} />
        )
    }
}

export function withToggler(component, options) {
    return function(props) {
        return (
            <Toggler component={component} {...props} defaultOnVal={options.defaultOnVal} />
        )
    }
}

