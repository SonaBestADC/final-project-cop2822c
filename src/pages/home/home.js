import React, { Component } from "react";
import Map from "../../components/map/map";
import ImageSlider from "../../components/imageSlider/imageSlider";
import Navigation from "../../components/navigation/navigation";
import Hours from "../../components/hours/hours";
import Footer from "../../components/footer/footer";
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
              <h2 className="display-4 custom-heading">Directions</h2>
              <Map vh="vh-60" />
              <hr />
              <h2 className="display-4 custom-heading">Hours</h2>
              <Hours />
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
