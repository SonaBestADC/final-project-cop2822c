import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import { FaYelp, FaFacebookSquare } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <Card className="text-center bg-dark footer-card" text="light">
        <Card.Body>
          <Card.Title>
            <Button
              onClick={() => {
                window.open("https://www.facebook.com/Mirnas-Restaurant-Grill-118367888175465/");
              }}
              variant="dark"
            >
              <FaFacebookSquare />
            </Button>
            &emsp;
            <Button
              onClick={() => {
                window.open("https://www.yelp.com/biz/mirnas-cafe-blue-bell");
              }}
              variant="dark"
            >
              <FaYelp />
            </Button>
          </Card.Title>
          <Card.Text>Copyright @ 2016 Mirna's Café & Grill</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Footer;
