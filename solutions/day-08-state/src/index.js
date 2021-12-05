import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";

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
      <>
        <Header isLight={this.state.isLight}/>
        <PrerequisiteList techList={["HTML", "CSS", "JavaScript"]} isLight={this.state.isLight}/>
        <button style={buttonStyle} onClick={this.changeTheme}>Change Background</button>
      </>
    )
  };

}

ReactDOM.render(<App/>, document.getElementById('root'));