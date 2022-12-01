import React, { Component } from "react";
import Map from "../../components/map/map";
import ImageSlider from "../../components/imageSlider/imageSlider";
import Navigation from "../../components/navigation/navigation";
import Hours from "../../components/hours/hours";
import { Col, Container, Row } from "react-bootstrap";
import "./home.scss";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navigation />
        <Container fluid="xl" className="home-container">
          <Row>
            <Col xl={12} lg={12} md={12} sm={12}>
              <h2 className="display-4 custom-heading">Welcome!</h2>
              <hr />
              <p className="text-welcome">
                Welcome to Mirna's Café! Here we offer a wide range of authentic Italian and Mediterranean Cuisine. Our family ran
                restaurant has been serving customers since 1992. All our homemade dishes are crafted to perfection for you to enjoy. Diners
                should try our homemade creamy hummus, famous frenched rack of lamb, crab cakes, or our seafood jambalaya. We do both
                general dining and private parties so feel free to go and book a celebration here. Alternatively, if you need someone to
                cater for a venue, we do that too! Come and taste our selection of wines and other alcoholic beverages when you dine. Make a
                reservation, or simply walk in, and see why Mirna’s Café has been the leading Mediterranean restaurant in all of Montgomery
                County!
              </p>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12}>
              <h2 className="display-4 custom-heading">Directions</h2>
              <Map vh="vh-60" />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12}>
              <h2 className="display-4 custom-heading">Hours</h2>
              <Hours />
            </Col>
            <Col xl={12} lg={12} md={12} sm={12}>
              <hr />
              <ImageSlider />
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

export default Home;
