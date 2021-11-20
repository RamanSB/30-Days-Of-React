import React from 'react';
import ReactDOM from 'react-dom';
import customModule from "./customModule.js";
import './index.css';
import html5Image from "./images/html5.png";
import html3Image from "./images/html3.png";
import jsImage from "./images/js.png";
import reactImg from "./images/react.png";
import stackTraceCoLogo from "./images/stacktraceco_logo.jpg"

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

const appTwoStyle = {
    backgroundColor: "Gainsboro", // {/*"#f9f7f7",*/}
    padding: "36px 24px 36px 24px"
}

const headerStyle = { 
  fontFamily: "Roboto, Trebuchet MS, Copperplate",
  fontSize: "1.8rem",
  fontWeight: "350",
  padding: "16px 0 0 0"
}

const subHeaderStyle  = {
  fontFamily: "monospace",
  fontSize: "1.1rem",
  fontWeight: "400",
  margin: "auto"
}

let formFieldsText = ["First name", "Last name", "Email"];

const subscribeBtnStyle = {
  fontFamily: "Verdana",
  padding: "16px 128px 16px 128px",
  margin: "16px auto 40px auto",
  border: "none",
  borderRadius: "8px",
  color: "white",
  backgroundColor: "#f37474"
}

const appTwo = (
  <div style={appTwoStyle}>
    <div className="subscribe-container">
        <h3 style={headerStyle}>SUBSCRIBE</h3>
        <p style={{"font-family": "Monaco", "font-weight": "100"}}>Sign up with your email address to receive news and updates</p>
        <div id="form-container">
          <form>
            <ul>
                {formFieldsText.map((text, idx) => <li key={idx}><input placeholder={text}/></li>)}
            </ul>
          </form>
        </div>
        <button style={subscribeBtnStyle}>Subscribe</button>
    </div>
  </div>
);

const appThreeStyle = {
  backgroundColor: "Gainsboro",
  padding: "24px 12px 24px 12px"
}



const skills = ["HTML", "CSS", "Sass", "JS", "React", "Redux", "Node", "C#", "C++", "Swift", "Python", "Numpy", "Scipy", "Pandas",
"SQL"];

const appThree = (
  <div style={appThreeStyle}>
    <div className="card-container">
      <img style={{"margin": "0 0 8px 0"}} alt="Profile Photo" src={stackTraceCoLogo} width="200" id="img-logo"/>
      <br/>
      <span style={headerStyle}>StackTraceCo <i class="fas fa-check-circle"></i></span>
      <p style={{"font-family": "Monaco", "font-weight": "100", "margin": "12px 0 24px 0", "fontSize": "0.8rem"}}>Programmer, UK</p>
      <h6 style={subHeaderStyle}>SKILLS</h6>
      <div style={{"display": "flex", "flex-flow": "row wrap"}}>
        <ul className="skills-list">{skills.map(skill => (<li>{skill}</li>))}</ul>
      </div>
    </div>
  </div>
)

const rootElement = document.getElementById('root');
ReactDOM.render(appThree, rootElement);
