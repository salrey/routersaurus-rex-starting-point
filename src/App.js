import { Component } from "react";
import Dinosaurs from "./components/Dinosaurs";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      carnivoresShown: true,
      herbivoresShown: true,
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Dinosaurs! They're cool! I GUESS.</h1>
        <header>
          <ul>
            <li>
              <a href="#">Herbivores</a>
            </li>
            <li>
              <a href="#">Carnivores</a>
            </li>
            <li>
              <a href="#">All</a>
            </li>
          </ul>
        </header>
        <Dinosaurs />
      </div>
    );
  }
}

export default App;
