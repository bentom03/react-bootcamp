import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header"
import Button from "./components/Button"
import {UserContextConsumer} from './context/userContext';

function App() {

  const [inputData, setInputData] = useState({firstName: "", lastName: ""})
  const [contactsData, setContactsData] = useState([])

  function handleChange(e) {
    const {name, value} = e.target
    setInputData(prevInputData => ({ ...prevInputData, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setContactsData( prevContacts => [...prevContacts, inputData])
  }
  const contacts = contactsData.map((el, i) => <li key={i}>{el.firstName + ' ' + el.lastName}</li>)
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="First Name"
                name="firstName" 
                value={inputData.firstName}
                onChange={handleChange}
            />
            <input 
                placeholder="Last Name"
                name="lastName" 
                value={inputData.lastName}
                onChange={handleChange}
            />
            <br />
            <button>Add contact</button>
        </form>
        
        <ol>
          {contacts}
        </ol>
        
    </>
  )
}

// const [count, setCount] = useState(0)

//   const increment = () => {
//     setCount( prevCount => prevCount + 1)
//   }

//   const decrement = () => {
//     setCount( prevCount => prevCount - 1)
//   }

//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//     </div>
//   )


// class App extends React.Component {
//   state = {
//     newUsername: ""
//   }

//   handleChange = (e) => {
//     const {name, value} = e.target
//     this.setState( () => {
//       return {
//         [name]: value
//       }
//     })
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <UserContextConsumer>
//             { ({username, change}) => (
//               <main>
//                   <p className="main">No new notifications, {username}! 🎉</p>  
//                   <input 
//                     name="newUsername"
//                     placeholder="New Username"
//                     value={this.state.newUsername}
//                     onChange={this.handleChange}
//                   />
//                   <button onClick={() => {
//                       change(this.state.newUsername)
//                   }}
//                   >
//                     Change Username
//                   </button>
//               </main>
//             )}
//         </UserContextConsumer>
//       </div>
//     )
//   }
// }

export default App;




{/*
// To practice React.memo
state = {
  count: 0
}

increment = () => {
  this.setState(prevState => (
    {count: prevState.count + 1}
  ))
}

render() {
  console.log("[GP] [P] [C] [GC] APP just rendered")
  return (
    <div>
      <button onClick={this.increment}>+1</button>
      <h2>{this.state.count}</h2>
      <p>I'm the App component</p>
      <GrandParent count={this.state.count} />
      <GrandParent />
    </div>
  )
}
*/}

{/* <DataFetcher url="https://pokeapi.co/api/v2/pokemon/" >
{
  ({data, loading}) => (
      loading ? <h1>Loading...</h1> :
      <p>{JSON.stringify(data)}</p>
    )
}
</DataFetcher>  */}

// Render Props div in App 
{/* <div style={{margin: "1rem"}}>
        <RenderPropsExample render={
            function(obj) {
              const listItems = obj.map( item => <li key={item.id}> {item.name} </li>)
              return (
                <ul>
                  {listItems}
                </ul>
              )    
            }
         }/>
    </div> */}


