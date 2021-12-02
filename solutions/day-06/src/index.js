import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";

const tenHighestPopulation = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'USA', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russia', population: 146599183 },
    { country: 'Japan', population: 126960000 }
];



function Header({title}) {
    let titleStyle = {
        fontFamily: "Arial Narrow",
        textAlign: "center",
        margin: "80px 0 40px 0",
        letterSpacing: "0.035em",
        color: "black",
        fontSize: "3.5rem"
    }
    return <h1 style={titleStyle}>{title}</h1>
}


function SubHeader({title}) {
    let subHeaderStyle = {
        color: "black",
        fontSize: "2.5rem",
        margin: "0 0 20px 0",
        fontWeight: "250",
        fontFamily: "Arial Narrow",
        textAlign: "center",
    }
    return <h2 style={subHeaderStyle}>{title}</h2>
}

function Caption({text}) {
    const captionStyle = {
        fontWeight: 100,
        textAlign: "center",
        margin: "20px 0 40px 0",
        fontFamily: "Arial Narrow"
    }

    return <p style={captionStyle}>{text}</p>
}

function BarChartGrid({data}) {
    let maxResult = data.map(item => item.population).reduce((a, b) => a > b ? a : b);

    return (
        <div className="population-grid">
            {data.map((result, idx) => {
                let {country, population} = result;
                let divBarStyle = {
                    backgroundColor: "orange",
                    padding: "16px 0 16px 0",
                    width: ((population/maxResult)*100)+"%"
                }
                return (
                    <>
                        <h3 style={{"alignSelf": "center", textTransform: "uppercase", fontFamily: "Verdana", fontWeight: 300 }}>{country}</h3>
                        <div style={divBarStyle}></div>
                        <h3 style={{fontFamily: "Verdana", fontWeight: 300}}>{population.toLocaleString()}</h3>
                    </>
                )
            })}
            
        </div>
    )
}


function WorldPopulationApp() {
    return (
        <div>
            <Header title="30 Days Of React"></Header>
            <SubHeader title="World population"></SubHeader>
            <Caption text="Ten most populated countries"></Caption>
            <BarChartGrid data={tenHighestPopulation}></BarChartGrid>
        </div>
    );
}





ReactDOM.render(<WorldPopulationApp/>, document.getElementById('root'));


