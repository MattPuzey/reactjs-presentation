import React, { Component } from "react";
import Heading from "../src/heading";
import {Image} from "../src/spectacle";
const images = { hb: require("./hb.jpg")}

class Interactive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    const styles = {
      padding: 20,
      background: "black",
      minWidth: 300,
      marginTop: 20,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "2em"
    };
    return (
      <div>
      {this.state.count < 12 ?

         <div>
          <Heading size={5} textColor="black" textFont="secondary">
            The graduate scheme has been running for {this.state.count} months
          </Heading>
          <button style={styles} type="button" onClick={this.handleClick}>Click Me</button>
        </div> :
        <Image src={images.hb.replace("/", "")} margin="0px auto 40px" height="400px"/>
          
        }   
       </div>
    );
  }
}

export default Interactive;
