import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import countryData from './static-country-data';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const backgroundStyle = {
      color: this.props.isLight ? "black" : "white",
      background: this.props.isLight ? "lightblue" : "black",
      margin: "0 0 0 0"
    }

    return (
      <div style={backgroundStyle}>
        <h1>Welcome to 30 Days Of React</h1>
        <h3>Getting Started React</h3>
        <h4>Ramandeep Bedi</h4>
        <p style={{margin: "0px", padding: "0px 0px 12px 0px0"}}> Dec 5, 2021</p>
      </div>
    )
  }
}

class PrerequisiteList extends React.Component {

  render() {

    const backgroundStyle = {
      color: this.props.isLight ? "black" : "white",
      background: this.props.isLight ? "lightblue" : "black",
    }

    return (
      <div style={backgroundStyle}>
        <p style={{margin: "0px", padding: "16px 0 0 0"}}>Prerequisite to get started react.js</p>
        <ul>
          {this.props.techList.map((tech, idx) =><li key={idx}>{tech}</li>)}
        </ul>
      </div>
    )
  }
}


class CountryDisplay extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {"country": "Panama"};
  }

  shuffleCountry = () => {
    let keys = Object.keys(countryData);
    console.log(keys);
    let idxOfCurrentValue = keys.indexOf(this.state.country);
    keys.splice(idxOfCurrentValue, 1);
    console.log(keys);
    console.log(Math.random() * keys.length);
    
    this.setState(prevState => ({
      ...prevState,
      country: keys[Math.floor(Math.random() * keys.length)]
    }));
  }

  render() {
      return (
        <>
          <div>
              <div>
                <img width="250" height="250" style={{"height": "250px", "width": "200px"}} src={countryData[(this.state.country)]}/>
                <h3>{this.state.country}</h3>
              </div>
              <div>
                <span>Capital:</span>
                <span>Language:</span>
                <span>Population:</span>
                <span>Currency:</span>
              </div>
          </div>
          <button onClick={this.shuffleCountry}>Select Country</button>
        </>
      );
  }
  
}

class App extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      isLight: true
    }
  }


  changeTheme = () => {
    this.setState(prevState => ({
      ...prevState,
      isLight: !prevState.isLight
    }));
  }

  render() {
    const buttonStyle = {
      padding: "16px",
      background: 'lightblue'
  };

    return (
      this.props.exercise === "one" ?
      (
        <>
          <Header isLight={this.state.isLight}/>
          <PrerequisiteList techList={["HTML", "CSS", "JavaScript"]} isLight={this.state.isLight}/>
          <button style={buttonStyle} onClick={this.changeTheme}>Change Background</button>
        </>
      ) :
      (
       <>
        <Header isLight={this.state.isLight}/>
        <CountryDisplay/>
       </>
      )
    )
  };

}

ReactDOM.render(<App exercise={"two"}/>, document.getElementById('root'));