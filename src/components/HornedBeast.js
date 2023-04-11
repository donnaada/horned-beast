import { Component } from "react";

class HornedBeast extends Component{
  render(){
    return(
      <>
        <h2>Title: {this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title} />
        <p>Description: {this.props.description}</p>
      </>
    )
  }
}

export default HornedBeast;