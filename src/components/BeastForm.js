import React, { Component } from "react";
import { Form } from "react-bootstrap";

let numHornsList = [
    { "value": 1, "desc": "One", "desc2": "Horn" },
    { "value": 2, "desc": "Two", "desc2": "Horns" },
    { "value": 3, "desc": "Three", "desc2": "Horns" },
    { "value": 100, "desc": "One Hundred", "desc2": "Horns" }
];

class BeastForm extends Component {
    render() {
        const hornOptions = numHornsList.map(horn => (
            <option key={horn.value} value={horn.value}>
                {horn.desc} ({horn.value}) {horn.desc2}
            </option>
        ));
        return (
            <>
                <Form onChange={this.props.onFilter}>
                    <fieldset>
                        <Form.Group>
                            <Form.Label>
                                Filter Beasts
                            </Form.Label>
                            <Form.Select>
                                <option value='all'>Please Select a Number of Horns</option>
                                {hornOptions}
                            </Form.Select>
                        </Form.Group>
                    </fieldset>
                </Form >
            </>
        );
    }
}

export default BeastForm;
