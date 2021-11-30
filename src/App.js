import { Component } from "react";
// import Dinosaurs from "./components/Dinosaurs";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Herbivores from "./components/Herbivores";
import Carnivores from "./components/Carnivores";

class App extends Component {
  constructor() {
    super();
    this.state = {
      carnivoresShown: false,
      herbivoresShown: false,
    };
  }

  toggleDinoTypes = (event) => {
    // console.log(!this.state[event.target.textContent.toLowerCase() + "Shown"])
    this.setState({
      [event.target.textContent.toLowerCase() + "Shown"]: !this.state[event.target.textContent.toLowerCase() + "Shown"]
    })
  }

  showAll = () => {
    this.setState({
      carnivoresShown: true,
      herbivoresShown: true
    })
  }

  render() {
    const { carnivoresShown, herbivoresShown } = this.state;

    return (
      <div className="App">
        <h1>Dinosaurs! They're cool! I GUESS.</h1>
        <header>
          <ul>
            <li>
              <a onClick={this.toggleDinoTypes} href="#">Herbivores</a>
            </li>
            <li>
              <a onClick={this.toggleDinoTypes} href="#">Carnivores</a>
            </li>
            <li>
              <a onClick={this.showAll} href="#">All</a>
            </li>
          </ul>
        </header>
        {/* <Dinosaurs /> */}
        {herbivoresShown ? <Herbivores /> : null}
        {carnivoresShown && <Carnivores />}

        {/* {conditionals use case} */}
        {/* {this.state.loggedIn ? <Profile /> : <SignUp />} */}
      </div>
    );
  }
}

export default App;
