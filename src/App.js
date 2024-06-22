import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './Components/TopBar';
import Background from './Components/Background';

function App() {
  return (
    <div className="App">
      <TopBar />
      <h1>Hello World</h1>
      <Background />
    </div>
  );
}

export default App;
