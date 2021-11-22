import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import html3Image from './images/html3.png';
import html5Image from './images/html5.png';
import jsImage from './images/js.png';
import reactImg from './images/react.png';
import stackTraceLogo from './images/stacktraceco_logo.jpg';

// 1) Level 2
const title = "Front End Technologies";

function Title() {
  return <h6 style={{"margin": "16px auto 24px auto", "text-align": "center", "font-family": "Verdana", "font-size": "1.1rem"}}>{title}</h6>
}

const imgContainerStyle = {
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  justifyContent: "space-around"
}
const techImgs = [html3Image, html5Image, jsImage, reactImg];
const imgSize = "200";
function TechImageArray() {
  return (
    <div style={imgContainerStyle}>
        {techImgs.map(img => <img alt="Tech" width={imgSize} src={img}/>)}
    </div>
  )
}

const appOneStyle = {
  background: "gainsboro",
  padding: "16px"
}

const appOne = (
  <div style={appOneStyle}>
    <Title/>
    <TechImageArray/>
  </div>
)

// 2) Level 2
const appTwoStyle = {
  padding: "24px 16px 24px 16px",
  background: "f8f8ff",
};

function SubscribeTitle() {
  return <h4 style={{"text-transform": "uppercase", "text-align": "center", "font-size": "1.2rem", "font-family": "Verdana"}}>Subscribe</h4>;
}

function SignupText() {
  return <span style={{"font-family": "Verdana"}}>Sign up with your email address to receive news and updates.</span>
}

function SignupFields() {
  const inputFields = ["First name", "Last name", "Email"]
  return (
    <div className="input-field-container">
        {inputFields.map(x => (
          <input placeholder={x} type="text" className="input-fields"/>
        ))}
      </div>
  )
}

const buttonStyle = {
  padding: "12px 90px 12px 90px",
  background: "coral",
  border: "none",
  borderRadius: "8px",
  color: "white"
}

function SubscribeButton() {
  const buttonText = "Subscribe"
  return <button style={buttonStyle}>{buttonText}</button>
}

const appTwo = (
  <div style={appTwoStyle}>
    <div className="subscribe-container">
      <SubscribeTitle/>
      <SignupText/>
      <SignupFields/>
      <SubscribeButton/>
    </div>
  </div>
)

// 1) Level 3
function ColorTiles() {
  const colors = ["#518cef", "#3b10cf", "#9aede6", "#8ee763", "#a30dd0"];

  return colors.map((color, idx) => {
    let colorTileStyle = {
      width: "800px",
      height: "90px",
      margin: "auto",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "monospace",
      fontWeight: "600",
      color: "white",
      borderRadius: "8px"
    }
    colorTileStyle['backgroundColor'] = color;
    console.log(`Style objcet: ${JSON.stringify(colorTileStyle)}`);
    return <div key={idx} style={colorTileStyle}>{color}</div>
  });
}


const appThree = (
  <div>
    <ColorTiles/>
  </div>
)

// 2) Level 3

const appFourStyle = {
  padding: "8px 16px 8px 16px",
  background: "lightgray"
}

function SkillsSection() {
  const skillSectionTitle = "Skills";
  const skills = ["HTML", "CSS", "SASS", "JS", "React", "Redux", "Node", "MongoDB", "Python", "Numpy", "Scipy", "Keras", "Data Analysis", "SQL", "Heroku", "Git", "Type Script"];
    return (
      <>
        <h6>{skillSectionTitle}</h6>
        <ul className="skills-list">
          {skills.map((skill, idx) => (<li key={idx} className="skill-item">{skill}</li>))}
        </ul>
      </>
    );
}

function ImgProfile() {
  const imgStyle = {
    borderRadius: "50%"
  }
  return <img alt="profile photo" style={imgStyle} src={stackTraceLogo} width="200"/>
}

const appFour = (
  <div style={appFourStyle}>
    <div style={{"padding": "16px", "backgroundColor": "white"}}>
      <ImgProfile/>
      <h6>Stacktrace Co</h6><i></i>
      <p>Senior Developer, UK</p>
      <SkillsSection/>
    </div>
  </div>
)



const appToDisplay = appFour;

ReactDOM.render(appToDisplay, document.getElementById('root'));