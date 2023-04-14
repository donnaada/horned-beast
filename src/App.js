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
      description: '',
      filterHorns: beastsList,
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

  handleFilter = (event) => {
    const filter = event.target.value;

    let filteredBeast;

    switch (filter) {
      case 'all':
        filteredBeast = beastsList;
        break;
      case '1':
        filteredBeast = beastsList.filter(beast => beast.horns === 1);
        break;
      case '2':
        filteredBeast = beastsList.filter(beast => beast.horns === 2);
        break;
      case '3':
        filteredBeast = beastsList.filter(beast => beast.horns === 3);
        break;
      case '100':
        filteredBeast = beastsList.filter(beast => beast.horns === 100);

        break;
      default:
        filteredBeast = beastsList;
    }

    this.setState({
      filterHorns: filteredBeast,
    })


  };

  getSelectedMethod = (title, src, description) => {
    this.handleModalOpen();
    this.setState({
      title: title,
      src: src,
      description: description,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main
          beasts={this.state.filterHorns}
          onImageClick={this.handleModalOpen}
          getSelectedMethod={this.getSelectedMethod}
          handleFilter={this.handleFilter}
        />

        <SelectedBeast
          show={this.state.showModal}
          onClose={this.handleModalClose}
          title={this.state.title}
          src={this.state.src}
          description={this.state.description}
        />

        <Footer />
      </>
    );
  }
}

export default App;