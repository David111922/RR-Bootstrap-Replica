import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './Components/TopBar';
import Background from './Components/Background';
import StoreListing from './Components/StoreListing'
function App() {
  return (
    <div className="App">
      <TopBar />
      <h1></h1>
      <Background />
      <StoreListing/>
    </div>
  );
}

export default App;
