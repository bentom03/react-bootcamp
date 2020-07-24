import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {ThemeContextProvider} from './context/themeContext';
import {UserContextProvider} from './context/userContext';


ReactDOM.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();

{/* <UserContext.Provider value={"joezrule"}>
    <App />
  </UserContext.Provider> */}

{/* <React.StrictMode>
    <App />
</React.StrictMode> */}