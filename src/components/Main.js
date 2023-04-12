import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import HornedBeast from './HornedBeast';
import beasts from './beastsList.json';

class Main extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className='g-4'>
            {beasts.map(beast => {
              return (
                <Col xs={12} md={6} lg={4}>
                  <HornedBeast key={beast._id} title={beast.title} imageUrl={beast.image_url} description={beast.description} />
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