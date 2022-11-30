import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

class MenuCard extends Component {
  render() {
    return (
      
        
          <Card>
            <Card.Img
              varient="top"
              src="https://cdn.discordapp.com/attachments/678094244514103317/964855504453140560/FoodGoesHere.jpg?size=4096"
              alt="Neil"
            />
            <Card.Title>
                <Row md={12}>
                    <Col md={9} className="float-left responsive-font">{this.props.item}</Col>
                    <Col md={3} className="float-right responsive-font">{this.props.price}</Col>
                </Row>
            </Card.Title>
            <Card.Body>
                <p className="card-text responsive-font">{this.props.description}</p>
            </Card.Body>
          </Card>
        

    );
  }
}

export default MenuCard;
