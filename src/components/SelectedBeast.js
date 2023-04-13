import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

class SelectedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
        };
    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.description} fluid />
                    <p>{this.props.selectedBeast.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default SelectedBeast;
