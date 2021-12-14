import logo from './logo.svg';
import './App.css';
import CovidDetails from './components/CovidDetails/CovidDetails';
import CovidDetails_Function from './components/CovidDetails_Function/CovidDetails_Function';
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <div>{document.title}</div>
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
        </header>
        <CovidDetails />
        <CovidDetails_Function />
      </div>
    );
  }
}

export default App;
