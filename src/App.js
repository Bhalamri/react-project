import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';

function App() {
  const [compo,setCompo]=useState('')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Post/>
      </header>
    </div>
  );
}

export default App;

