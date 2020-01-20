import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Component/Menu/Menu';
import Photo from './Component/PhotoGrid/Photo';

function App() {
  return (
    <div className="App">
      <Menu />
      <Photo />
    </div>
  );
}

export default App;
