import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
                    <Modal.Title>Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src='' alt='' style={{ width: '100%' }} />
                    <p>Paragraph</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default SelectedBeast;
