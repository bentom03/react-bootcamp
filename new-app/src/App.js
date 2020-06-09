import React from 'react';
// import RenderPropsExample from "./components/RenderPropsExample"
import Favourite from "./components/Favourite"
import Menu from "./components/Menu"

function App(props) {
  return (
    <div>
      <Menu />
      <hr />
      <Favourite /> 
    </div>
  )
}

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

export default App;
