import React from "react";
import PropTypes from "prop-types"

// class Card extends React.Component {

//     static defaultProps = {
//         cardColor: "pink",
//         width: 200,
//         height: 100
//     }

//     render() {
//         const styles = {
//             backgroundColor: this.props.cardColor,
//             width: this.props.width,
//             height: this.props.height
//         }

//         return (
//             <div style={styles}></div>
//         )
//     }
// }

function Card (props) {

    const styles = {
        backgroundColor: props.cardColor,
        width: props.width,
        height: props.height
    }

    return (
        <div style={styles}></div>
    )
}

Card.propTypes = {
    cardColor: PropTypes.oneOf(['blue', 'red']),
    height: PropTypes.number,
    width: PropTypes.number.isRequired
}

Card.defaultProps = {
    cardColor: "white",
    width: 200,
    height: 100
}

export default Card