import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

class SelectedBeast extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         modalOpen: false,
    //     };
    // }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={this.props.src} alt={this.props.description} fluid />
                    <p>{this.props.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default SelectedBeast;
