import React, { Component } from 'react';
import ListGroup from "react-bootstrap/ListGroup";

class ListGroupItem extends Component {
    render() { 
        return (
            <ListGroup.Item>
            {this.props.information}
          </ListGroup.Item>
        );
    }
}
 
export default ListGroupItem;