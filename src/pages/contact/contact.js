import React, { Component } from "react";
import Navigation from "../../components/navigation/navigation";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "./contact.scss";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      fName: "",
      lName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Navigation />
        <Container className="contact">
          <Row>
            <Col xl={12} lg={12} md={12} sm={12}>
              <h2 className="display-4 custom-heading">Contact Us</h2>
            </Col>
          </Row>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col xl={6} lg={6} md={12} sm={12}>
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" className="form-control" placeholder="Enter name" name="fName" onChange={this.onChange} />
                </Form.Group>
              </Col>
              <Col xl={6} lg={6} md={12} sm={12}>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" className="form-control" placeholder="Enter name" name="lName" onChange={this.onChange} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xl={6} lg={6} md={12} sm={12}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" className="form-control" placeholder="Email" name="email" onChange={this.onChange} />
                </Form.Group>
              </Col>
              <Col xl={6} lg={6} md={12} sm={12}>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" className="form-control" placeholder="Phone Number" name="phone" onChange={this.onChange} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xl={12} lg={12} md={12} sm={12}>
                <Form.Group>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" className="form-control" placeholder="Subject" name="subject" onChange={this.onChange} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xl={12} lg={12} md={12} sm={12}>
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control type="text" className="form-control message" placeholder="Message" name="message" onChange={this.onChange} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
                <Col xl={12} lg={12} md={12} sm={12}>
                    <br/>
                    <Button>Submit</Button>
                </Col>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Contact;
