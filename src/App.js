import { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Dinosaurs from "./components/Dinosaurs"
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
        {/* Modern way of using React Networking/react-router */}
        {/* NO longer need constructor */}
        <Routes >
          <Route exact path="/" element={<Dinosaurs />} />
          <Route path="/herbivores" element={<Herbivores />} />
          <Route path="/carnivores" element={<Carnivores />} />
        </Routes>
        {/* Old way of using React Networking/react-router */}
        {/* <Route path="/herbivores" component={<Herbivores />} /> */}


        {/* Manual Conditional Rendering */}
        {/* {herbivoresShown ? <Herbivores /> : null}
        {carnivoresShown && <Carnivores />} */}


        {/* {conditional rendering use case} */}
        {/* {this.state.loggedIn ? <Profile /> : <SignUp />} */}
      </div>
    );
  }
}

export default App;
