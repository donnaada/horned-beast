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
      title: '',
      src: '',
      description: ''
    };
  }

  handleModalOpen = (beast) => {
    this.setState({
      showModal: true,
      // selectedBeast: beast,
    })
  }
  handleModalClose = () => {
    this.setState({
      showModal: false,
      // selectedBeast: {},

    })
  }

  getSelectedMethod = (title, src, description) => {
    this.setState({
      title: title,
      src: src,
      description: description,
    }); 
    this.handleModalOpen();
  };

  render() {
    return (
      <>
        <Header />
        <Main beasts={beastsList} onImageClick={this.handleModalOpen} getSelectedMethod={this.getSelectedMethod}/>
        <SelectedBeast 
          show={this.state.showModal} 
          onClose={this.handleModalClose}
          title={this.state.title}
          src={this.state.src}
          description={this.state.description} />
        <Footer />
      </>
    );
  }
}

export default App;