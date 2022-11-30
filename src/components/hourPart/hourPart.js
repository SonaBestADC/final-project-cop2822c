import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


class HourPart extends Component {
    render() { 
        return (
            <ListGroup.Item>
                {this.props.name}: {this.props.hours}
            </ListGroup.Item>
        );
    }
}
 
export default HourPart;