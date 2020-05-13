import React from 'react';
import Card from "./components/Card";
// import './App.css';

function App() {
  return (
    <>
        <Card cardColor="orange" width={300} />
        <Card cardColor="white" width={300} />
        <Card width={300} cardColor="green"   />
    </>
  );
}

export default App;
