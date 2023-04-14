import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import HornedBeast from './HornedBeast';
import BeastForm from './BeastForm';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beasts: this.props.beasts,
    };
  }

  render() {
    return (
      <>
        <Container className='my-3'>
          <BeastForm onFilter={this.props.handleFilter} />
          <Row className='g-4 my-5'>
            {this.props.beasts.map(beast => {
              return (
                <Col xs={12} md={6} lg={4}>
                  <HornedBeast
                    key={beast._id}
                    title={beast.title}
                    imageUrl={beast.image_url}
                    description={beast.description}
                    onImageClick={this.props.onImageClick}
                    getSelectedMethod={this.props.getSelectedMethod}
                  />
                </Col>
              )
            })}
          </Row>
        </Container>
      </>
    )
  }

}


export default Main;