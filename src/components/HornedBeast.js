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

      <Card className="bg-secondary text-white">
        <Card.Title>{this.props.title}</Card.Title>

        <Card.Img
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title}
          fluid
          rounded
          style={{
            objectFit: 'contain',
            height: 300,
            width: '100%',
            padding: '10px 0'
          }}
          onClick={() => this.props.getSelectedMethod(
            this.props.title, 
            this.props.imageUrl, 
            this.props.description
          )}  
        />

        <Card.Body className="bg-secondary">
          <Button className="btn btn-dark" onClick={this.handleClick}>
            <HeartFill color="red" title=""></HeartFill>
            <span> {this.state.timesClicked}</span>
          </Button>
        </Card.Body>
      </Card>

    )
  }
}


export default HornedBeast;