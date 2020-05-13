import React from "react";

class Card extends React.Component {
    
    static defaultProps = {
        cardColor: "blue",
        height: 100,
        width: 100
    }

    render() {

        const cardStyle = {
            height: this.props.height,
            width: this.props.width,
            backgroundColor: this.props.cardColor
        }

        return (
            <div style={cardStyle}></div>
        )
    }
}

export default Card