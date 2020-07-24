import React from 'react';
import './App.css';
import './components/Carousel'
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Carousel count='10'>
        </Carousel>
      </header>
    </div>
  );
}

export default App;
