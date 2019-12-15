import React from "react";
import "./style.css";

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  };
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false
    };
  }
  handleClicks = () => {
    console.log("clicked");
    this.setState({
      spinningTheChamber: true
    });
    this.timeout = setTimeout(() => {
      const ranmdomNumber = Math.ceil(Math.random() * 8);
      console.log(ranmdomNumber);
      this.setState({
        chamber: ranmdomNumber,
        spinningTheChamber: false
      });
    }, 2000);
  };
  renderDisplay = () => {
    let { chamber } = this.state;
    let { spinningTheChamber } = this.state;
    let { bulletInChamber } = this.props;
    if (spinningTheChamber) {
      return "Spinning the chamber and pulling the trigger!";
    } else if (chamber === bulletInChamber) {
      return "BANG!!..YOU DEAD!";
    } else {
      return "You're safe";
    }
  };

  componentWillUnmount() {
    console.log("unmounted");
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div className="Roulette">
        <h1>Roulette Gun</h1>
        <section className="output">
          <h2>{this.renderDisplay()}</h2>
        </section>
        <button onClick={() => this.handleClicks()}>Pull the trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;
