import React from 'react';
import ReactDOM from 'react-dom';
import customModule from "./customModule.js";
import './index.css';
import html5Image from "./images/html5.png";
import html3Image from "./images/html3.png";
import jsImage from "./images/js.png";
import reactImg from "./images/react.png";

customModule();



const appOneStyle = {
  width: "80%",
  margin: "auto",
  padding: "16px 32px 16px 32px",
  backgroundColor: "gainsboro"
}


const appOne = (
  <div style={appOneStyle}>
      <p style={{"font-family": "Roboto", "textAlign": "center"}}>Front End Technologies</p>
      <div id="image-container">
        <img width="200" height="200" src={html5Image}/>
        <img width="200" height="200" src={html3Image}/>
        <img width="200" height="200" src={jsImage}/>
        <img width="200" height="200" src={reactImg}/>
      </div>
  </div>
)

const rootElement = document.getElementById('root');
ReactDOM.render(appOne, rootElement);
