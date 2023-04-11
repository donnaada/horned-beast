import { Component } from 'react';
import HornedBeast from './HornedBeast';
import beasts from './beastsList.js';

class Main extends Component {
  render() {
    return (
      <>
        {beasts.map(beast => {
          return (
            <HornedBeast key={beast._id} title={beast.title} imageUrl={beast.image_url} description={beast.description} />
          )
        })}
      </>
    )
  }
}

export default Main;