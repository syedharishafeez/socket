import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import io from 'socket.io-client';



function forClick() {
  console.log("click hogya");

  axios.get("http://localhost:4000/create-connection").then((res) => {
    console.log("res is = ", res);
  }).catch((err) => {
    console.log("err is = ", err);
  })

}
var socket = io("http://localhost:4000");
function onSocket() {

  socket.on('news', function (data) {
    console.log(data);
    // socket.emit('my other event', { my: 'data' });
  });
  socket.on('naam', function (data) {
    console.log(data);
    // socket.emit('my other event', { my: 'data' });
  });
}

function closeSocket() {

  socket.close('news', function (data) {
    console.log("closed");

  });
}

function App() {
  return (
    <div className="App">

      <button onClick={onSocket}>Click</button>
      <button onClick={closeSocket}>Closed</button>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
