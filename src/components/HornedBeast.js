import { Component } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { HeartFill } from 'react-bootstrap-icons';

class HornedBeast extends Component {
  render() {
    return (

      <CardGroup>
        <Card className="">
          <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.description} />
          <Card.Body className="">
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Body>
          <FavoritedImage />
        </Card>
      </CardGroup>
    )
  }
}

// Create state inside of the HornedBeast component that keeps track of the number of times each beast has been favorited.
class FavoritedImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    let addClick = this.state.timesClicked + 1;
    this.setState({
      timesClicked: addClick
    })

  }

  render() {
    return (
      <div className="d-grid">
        <Button onClick={this.handleClick} size="sm" ><HeartFill></HeartFill> <span>{this.state.timesClicked}</span></Button>
      </div>
    )
  }


}


// Put a heart in each HornedBeast component with the number of “Favorites” next to it.

export default HornedBeast;