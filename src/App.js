import React from 'react';
import Pic from "./Steve_Jobs.jpg"
import './App.css';

class App extends React.Component {
  state = {
    fullName: "Steve Jobs",
    bio: "Né le 24 février 1955 à San Francisco (Californie) et mort le 5 octobre 2011 à Palo Alto (dans le même État), est un entrepreneur et inventeur américain, souvent qualifié de visionnaire, et une figure majeure de l'électronique grand public, notamment pionnier de l'avènement de l'ordinateur personnel, du baladeur numérique, du smartphone et de la tablette tactile. Cofondateur, directeur général et président du conseil d'administration de l'entreprise multinationale américaine Apple Inc, il dirige aussi les studios Pixar et devient membre du conseil d'administration de Disney lors du rachat en 2006 de Pixar par Disney.",
    imgSrc: Pic,
    profession: "Entrepreneur, inventeur, ingénieur, designer, informaticien, producteur délégué, producteur de cinéma, financier",
    show: true,
    counter: 0,
  };
  incrementCounter() {
    const counter = this.state.counter;
    this.setState({ counter: counter + 1 });
  }
  componentDidMount() {
    const thisBoundedIncrementer = this.incrementCounter.bind(this);
    setInterval(thisBoundedIncrementer, 1000)
  }
  render() {
    return (
      <div className="app">
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
            ;
          }}
        >
          {this.state.show ? "Hide" : "Show"}
        </button>
        <h2>{this.state.counter}</h2>
        {this.state.show ? (
          <div>
            <h1>{this.state.fullName}</h1>
            <h3>{this.state.bio}</h3>
            <img src={this.state.imgSrc} alt="Steve Jobs" />
            <h2>{this.state.profession}</h2>
          </div>
        ) : null}
        
      </div>
    );
  }
}

export default App;

