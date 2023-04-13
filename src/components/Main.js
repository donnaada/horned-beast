import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import HornedBeast from './HornedBeast';

class Main extends Component {
  render() {
    return (
      <>
        <Container className='my-5'>
          <Row className='g-4'>
            {this.props.beasts.map(beast => {
              return (
                <Col xs={12} md={6} lg={4}>
                  <HornedBeast
                    key={beast._id}
                    title={beast.title}
                    imageUrl={beast.image_url}
                    description={beast.description}
                    onImageClick={this.props.onImageClick}
                  />
                </Col>
              )
            })
            }
          </Row>
        </Container>
      </>
    )
  }
}


export default Main;