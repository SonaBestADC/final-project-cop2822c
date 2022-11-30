import React, { Component } from "react";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import chefStock from "../../img/chef-stock.png";
import Navigation from "../../components/navigation/navigation";
import ListGroupItem from "../../components/listGroupItem/listGroupItem";

import "./about.scss";

class About extends Component {
  state = {
    otherInfo: [
      { info: "Payment Types: Cash, Visa, Mastercard, Amex, Discover" },
      { info: "Atmosphere: Casual Bistro" },
      { info: "Reservations: Recommended" },
      { info: "Handicap Accessible" },
      { info: "Private Parties: Yes (Either call or fill out form)" },
      { info: "Outdoor seating: Yes" },
      { info: "No Smoking" },
      { info: "We offer DoorDash and other food delivery platforms" },
    ],
  };
  render() {
    return (
      <div>
        <Navigation />
        <Container fluid="xl" className="about-container">
          <Row>
            <h2 className="display-4 custom-heading">About Us</h2>
            <hr />
            <Col xl={4} lg={4} md={4} sm={4}>
              <h3 className="display-4 custom-heading subheading">Who we are</h3>
              <p>
                We are Mirna’s Restaurant & Grill! We’ve been serving authentic Italian and Mediterranean Cuisine since 1992 to all of those
                in Montgomery County. From our appetizers to entrees, sandwiches to desserts, our entire menu is home-made with only the
                freshest of ingredients. We offer a lavish and expansive menu with many of our signature dishes! Diners should try our
                homemade creamy hummus, famous frenched rack of lamb, crab cakes, or our seafood jambalaya. Make a reservation, or simply
                walk in, and see why Mirna’s Café has been the leading Mediterranean restaurant in all of Montgomery County!
              </p>
            </Col>
            <Col xl={4} lg={4} md={4} sm={4}>
              <h3 className="display-4 custom-heading subheading">Meet the Chefs</h3>
              <p className="text-chef">
                Here at Mirna’s Café our chefs work tirelessly with the help of our specialized kitchen staff to prepare the finest Italian
                and Mediterranean food for our valued customers.
              </p>
              <p>
                Pictured here is Chef Stock who has been with Mirna's Café for several years. Here he is preparing some of our fried
                calamari for our customers.
              </p>
            </Col>
            <Col xl={4} lg={4} md={4} sm={4}>
              <img className="image-chef" src={chefStock} />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xl={5} lg={5} md={5} sm={5}>
              <h3 className="display-4 custom-heading subheading">Other Information</h3>
              <ListGroup>
                {this.state.otherInfo.map(({ info }, index) => {
                  return <ListGroupItem className="list-group-item" information={info} key={index} />;
                })}
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col xl={12} lg={12} md={12} sm={12}>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
