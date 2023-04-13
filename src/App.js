import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import beastsList from './components/beastsList.json';
import SelectedBeast from './components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
    };
  }

  handleModalOpen = (beast) => {
    this.setState({
      showModal: true,
      selectedBeast: beast,
    })
  }
  handleModalClose = () => {
    this.setState({
      showModal: false,
      selectedBeast: {},

    })
  }

  render() {
    return (
      <>
        <Header />
        <Main beasts={beastsList} onImageClick={this.handleModalOpen} />
        <SelectedBeast show={this.state.openModal} onClose={this.handleModalClose} selectedBeast={this.state.selectedBeast} />
        <Footer />
      </>
    );
  }
}

export default App;