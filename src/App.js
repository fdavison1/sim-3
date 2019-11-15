import React from 'react';
import './App.css';
import Auth from './components/Auth'
import Dash from './components/Dash'
import Form from './components/Form'
import Post from './components/Post'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
    
    <Auth />
    <Dash />
    <Form/>
    <Post/>
    <Nav/>

    </div>
  );
}

export default App;
