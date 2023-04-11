import { Component } from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { HeartFill } from 'react-bootstrap-icons';

class HornedBeast extends Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <Image src={this.props.imageUrl} alt={this.props.description} title={this.props.title} fluid rounded></Image>
        <Button><HeartFill></HeartFill>THIS IS A BUTTON</Button>

      </>
    )
  }
}

export default HornedBeast;