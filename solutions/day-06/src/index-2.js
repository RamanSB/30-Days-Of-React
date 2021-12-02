import React from 'react';
import ReactDOM from 'react-dom';

const blockSize = 128; //px
const blockSpacing = 1; //px

const blocksPerRow = 8;
const noOfBlocks = 32;


const MainHeader = (props) => {

  const headerStyle = {
    margin: "80px auto 0 auto",
    letterSpacing: "0.04em",
    fontFamily: "monospace",
    textAlign: "center",
    fontSize: "4rem"
  };

  return <h1 style={headerStyle}>{props.title}</h1>
}

const SubHeader = (props) => {
  const subHeaderStyle = {
    margin: "40px auto 40px auto",
    letterSpacing: "0.04em",
    fontFamily: "monospace",
    textAlign: "center",
    fontSize: "2rem"
  };

  return <h2 style={subHeaderStyle}>{props.title}</h2> 
}


function NumberGrid({isColorMode}) {
  
  const maxWidth = ((blockSize + blockSpacing) * (blocksPerRow)) + blockSize;
  let numbers = Array(noOfBlocks).fill(0).map((val, idx) => val + idx);

  const listStyle = {
    maxWidth: maxWidth,
    listStyleType: "none",
    padding: 0,
    textAlign: "center",
    margin: "auto"
  };

  const listItemStyle = {
    display: "inline-flex"
  };

  function isPrime(value) {
    if ([0, 1].includes(value)) return false;
    for(let i=2; i < value; i++) {
      if (value % i === 0) {
        return false;
      }
    }
    return true;
  }

  return (
    <ul style={listStyle}>
      {numbers.map((number, idx) => {

          let blockColor;
          let isPrimeNumber = isPrime(number);
          console.log(`Is ${number} a prime number: ${isPrimeNumber}`);
          switch (number % 2 === 0) {
            case true: 
              blockColor = "#00FF7F";
              break;
            case false:
              blockColor = "#FFD700";
              break;
            default:
              break;
          }
        
          if(isPrimeNumber) {
            blockColor = '#DC143C';
          }

          if (isColorMode) {
            const colors = ["#CD95F5", "#263BF5", "#BFFA42", "#BB6559", "#45DEAD", "#FD2E7A", "#EC0CAA", "#AF8E61", "#2365F6",
                            "#886EE5", "#4A4598", "#70B7AD", "#FED22B", "#003D79", "#1027E0", "#D3B295", "#A16680", "#38E1A0",
                            "#CB1F99", "#DD533E", "#366181", "#14C345", "#CB32E6", "#01C634", "#75948E", "#D7D10B", "#6D79F5",
                            "#0F7D6B", "#2D0B18", "#D4FB5F", "#0BDD24", "#5084BD", "#B8432E"];
            
            blockColor = colors[number];  
          }

        return <li style={listItemStyle} key={number}><Block value={isColorMode ? blockColor : number} color={blockColor}></Block></li>
      })}
    </ul>
  )
  
}



function Block({ value, color }) {
  
  const blockStyle = {
    width: blockSize + "px",
    height: blockSize + "px",
    margin: blockSpacing + "px",
    background: color,
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "center"
  };

  return (
    <div style={blockStyle}>
        <h2 style={{"color": "white", "textAlign": "center", "fontFamily": "sans-serif", "fontSize": "1rem", "fontWeight": "200"}}>{value}</h2>
    </div>
  );
}


function NumberGeneratorApp() {
  return (
    <div>
      <MainHeader title="30 Days Of React"/>
      <SubHeader title="Number Generator"/>
      <NumberGrid isColorMode={true}/>
    </div>
  )
}


ReactDOM.render(<NumberGeneratorApp/>, document.getElementById('root'));