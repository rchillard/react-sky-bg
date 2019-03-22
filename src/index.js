import React, { Component } from "react";
import "./styles.css";

class SkyBG extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true,
      timeOfDay: new Date().getHours()
    };
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  drawStar(x, y, size, canvas) {
    canvas.strokeStyle = "whitesmoke";
    canvas.strokeRect(x, y, size, size);
  }

  updateCanvas() {
    const canvas = this.refs.stars;
    const context = canvas.getContext("2d");
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    for (var i = 0; i < 250; i++) {
      this.drawStar(
        this.getRndInteger(0, canvas.width),
        this.getRndInteger(0, canvas.height),
        1,
        context
      );
    }
  }

  componentDidMount() {
    this.updateCanvas();
  }

  render() {
    const hour = this.state.timeOfDay;
    let background = "test";

    if (hour >= 5 && hour <= 8) {
      background = "bg dawn";
    } else if (hour > 8 && hour < 18) {
      background = "bg day";
    } else if (hour >= 18 && hour <= 21) {
      background = "bg dusk";
    } else {
      background = "bg night";
    }

    return (
      <div className={background}>
        <canvas ref="stars" className="stars" />
        {this.props.children}
      </div>
    );
  }
}

export default SkyBG;
