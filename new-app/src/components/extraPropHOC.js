import React from "react"

export function extraPropHOC(component) {
    const Component = component
    return function(props) {
        return (
            <Component newProp="I am the light of this world!" {...props} />
        )
    }
}
