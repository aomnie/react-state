import "./App.css";
import React from "react";
import allen from "./allen.jpg";

class App extends React.Component {
  //  const [Person, setPerson] = useState([{fullName='Fedi Touzri'} ,{bio='I love anime and im so passionate about it '} , {imgSrc={fedi}} ,{profession='senior web developer'} ,{bool=false}]);

  constructor(props) {
    super(props);
    this.state = {
      fullName: "Allen Walker",
      bio: "Allen Walker is the main protagonist of the anime/manga series D.Gray-man. He is a former Exorcist and a member of the European Branch of the Black Order which he is now seen and classified by them as a Noah. He is also currently the current host of the former Noah, Nea Walker",
      imgSrc: allen,
      profession:
        " Gray-man. Allen is a former Exorcist and a former member of the European Branch of the Black Order. He is the adoptive son of Mana Walker, and the former apprentice of Cross Marian.",
      bool: false,
      counter: 0,
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }, 1000);
  };

  // clearInterval = () => {
  //   this.clearInterval(this.counter);
  //   this.counter = 0;
  // };

  toggle() {
    this.setState({ bool: !this.state.bool });
    if (!this.state.bool) { 
      this.setState({ counter: 0 });
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.bool ? (
          <div>
            <h1 style={{ color: " FireBrick" }}>
              {" "}
              This is D.Gray-man main character{" "}
            </h1>
            <h2 style={{ color: "Crimson" }}>Allen Walker's bio</h2>
            <h3 style={{ color: "GhostWhite" }}>
              This is {this.state.fullName}. {this.state.bio} .
            </h3>
            <img
              src={this.state.imgSrc}
              width="400px"
              height="400px"
              alt="profile image"
            />
            <h2 style={{ color: "Crimson" }}>Profession</h2>
            <h3 style={{ color: "GhostWhite" }}>{this.state.profession}</h3>
          </div>
        ) : null}
        <br /> <br />
        {this.state.bool ? (
          <div>
            {this.state.counter}
            <br />
            <br />
            <button onClick={() => this.toggle()}>Hide</button>
          </div>
        ) : (
          <button onClick={() => this.toggle()}>Show</button>
        )}
        <br />
      </div>
    );
  }
}
export default App;
