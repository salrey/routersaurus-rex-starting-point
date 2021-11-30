import { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Dinosaurs from "./components/Dinosaurs"
import Herbivores from "./components/Herbivores";
import Carnivores from "./components/Carnivores";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     carnivoresShown: false,
  //     herbivoresShown: false,
  //   };
  // }

  // toggleDinoTypes = (event) => {
  //   // console.log(!this.state[event.target.textContent.toLowerCase() + "Shown"])
  //   this.setState({
  //     [event.target.textContent.toLowerCase() + "Shown"]: !this.state[event.target.textContent.toLowerCase() + "Shown"]
  //   })
  // }

  // showAll = () => {
  //   this.setState({
  //     carnivoresShown: true,
  //     herbivoresShown: true
  //   })
  // }

  render() {
    // const { carnivoresShown, herbivoresShown } = this.state;

    return (
      <div className="App">
        <h1>Dinosaurs! They're cool! I GUESS.</h1>
        <header>
          <ul>
            <li>
              <Link onClick={this.toggleDinoTypes} to="/herbivores">Herbivores</Link>
            </li>
            <li>
              <Link onClick={this.toggleDinoTypes} to="/carnivores">Carnivores</Link>
            </li>
            <li>
              <Link onClick={this.showAll} to="/">All</Link>
            </li>
          </ul>
        </header>
        {/* Modern way of using React Networking/react-router */}
        {/* NO longer need constructor and methods */}
        <Routes >
          <Route exact path="/" element={<Dinosaurs />} />
          <Route path="/herbivores" element={<Herbivores />} />
          <Route path="/carnivores" element={<Carnivores />} />
        </Routes>
        {/* Old way of using React Networking/react-router */}
        {/* <Switch >
          <Route exact path="/" component={<Dinosaurs />} />
          <Route path="/herbivores" component={<Herbivores />} />
          <Route path="/carnivores" component={<Carnivores />} />
        </Switch> */}

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
