import React from "react"

function RenderPropsExample(props) {
    const itemObject = [
        {id: 1, name: "item 1"}, 
        {id: 2, name: "item 2"}, 
        {id: 3, name: "item 3"}
    ]
    return (
        <div>
            {props.render(itemObject)}
        </div>
    )
}

export default RenderPropsExample