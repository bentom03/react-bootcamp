import React from 'react';
import './App.css';
import Header from "./components/Header"
import Button from "./components/Button"
// import UserContext from './context/userContext';

function App() {
  return (
    <div>
      <Header />
      <Button />
    </div>
  )
}

export default App;


// <UserContext.Consumer>
//           { username => (
//             <p className="main">No new notifications, {username}! 🎉</p>  
//           )}
//         </UserContext.Consumer>

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


