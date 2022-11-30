import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import "./error.scss";

class Error extends Component {
  render() {
    return (
      <div>
        <div className="background-gradient">
          <Container className="position-relative">
            <div className="text-center error-message">
              <h1 className="error-header">
                4<span className="custom-heading">0</span>4
              </h1>
              <p className="error-header-text">
                PAGE <span className="custom-heading">NOT</span> FOUND
              </p>
              <p className="error-text">
                To go back to the home page please click this&nbsp;
                <Link className="custom-anchor" to="/">
                  link
                </Link>
              </p>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Error;
