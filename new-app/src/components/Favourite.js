import React from "react"
import Toggler from "./Toggler"
// import { withToggler } from "../HOCs/withToggler" // HOC


// class Favourite extends Component {
//     render() {
//         return (
//             <div>
//                 <h4>Click the heart below to favourite</h4>
//                 <h1>
//                     <span onClick={this.props.toggle}>
//                         {this.props.on ? "❤️" : "♡"}
//                     </span>
//                 </h1>
//             </div>
//         )
//     }
// }

function Favourite(props) {
    return (
        <Toggler render={
            (isFavourite, toggle) => (
                <div>
                    <h4 >Click the heart below to favourite</h4>
                    <h1>
                        <span onClick={toggle}>
                            {isFavourite ? "❤️" : "♡"}
                        </span>
                    </h1>
                </div>
                )
            }
        />
    )
}

export default Favourite

// export default withToggler(Favourite, {defaultOnVal: false}) // For HOC
