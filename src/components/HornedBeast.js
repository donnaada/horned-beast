import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { HeartFill } from 'react-bootstrap-icons';

class HornedBeast extends Component {
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

      <Card border="secondary" className="p-3">
        <Card.Title className="text-center"><h3>{this.props.title}</h3></Card.Title>

        <Card.Img
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title}
          fluid
          rounded
          style={{
            objectFit: 'cover',
            height: 300,
            width: '100%',
            padding: '10px'
          }}
          onClick={() => this.props.getSelectedMethod(
            this.props.title,
            this.props.imageUrl,
            this.props.description
          )}
        />

        <Card.Body className="d-grid gap-2">
          <Button variant="danger" onClick={this.handleClick}>
            <HeartFill color="white" hoverColor title=""></HeartFill>
            <span> {this.state.timesClicked}</span>
          </Button>
        </Card.Body>
      </Card >

    )
  }
}


export default HornedBeast;