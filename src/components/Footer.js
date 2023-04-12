import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <NewFooter />
    );
  }
}

class NewFooter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "message": "Created by Donna Ada"
    }
  }

  handleClick = () => {
    const newMessage = this.state.message === "Created by Donna Ada" ? "A Code 301d98 Project" : "Created by Donna Ada";
    this.setState({
      message: newMessage
    });
  }

  render() {
    return (
      <footer className="text-center" onClick={this.handleClick}><p className="fs-5">{this.state.message}</p></footer>
    );
  }
}

export default Footer;