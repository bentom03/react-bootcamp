import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeContextProvider} from './context/themeContext';
import UserContext from './context/userContext';


ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();

{/* <UserContext.Provider value={"joezrule"}>
    <App />
  </UserContext.Provider> */}

{/* <React.StrictMode>
    <App />
</React.StrictMode> */}