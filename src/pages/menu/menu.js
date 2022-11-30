import React, { Component } from "react";
import { Row, Col, Container, Tab, TabContainer, Card, Nav } from "react-bootstrap";
import Navigation from "../../components/navigation/navigation";
import MenuCard from "../../components/menuCard/menuCard";
import "./menu.scss";

class Menu extends Component {
  // the return of the long json...
  constructor() {
    super();
    this.state = {
      lunch: [
        { item: "Soup du Jour", price: "$5.00", description: "Our special selection" },
        { item: "Onion Soup", price: "$6.00", description: "Fresh onions, swiss cheese, and beef broth" },
        {
          item: "Caesar Salad",
          price: "$7.00",
          description: "Comes with homemade dressing, crispy croutons, and grated cheese on fresh romaine lettuce",
        },
        { item: "Mixed Green Salad", price: "$9.50", description: "With olive oil, & balsamic vinaigrette Dressing" },
        {
          item: "Mesclun Greens & Grilled Shrimp",
          price: "$13.75",
          description:
            "With balsamic vinaigrette dressing topped with grilled shrimp, tomato, cucumber, roasted red peppers and goat cheese toast",
        },
        {
          item: "Mediterranean Combo",
          price: "$14.50",
          description:
            "Humus, Baba Ghanouj, roasted pepper, grilled portabella mushroom and eggplant over greens with stuffed grape leaves & feta cheese",
        },
        {
          item: "Mirna's Chicken Salad Sandwich",
          price: "$11.00",
          description: "Mirna's Chicken Salad, served with greens, tomato and onion",
        },
        {
          item: "Mirna's Angus Burger",
          price: "$9.50",
          description: "8oz Angus burger served with lettuce, tomato Sautéed onion, mushrooms and American cheese",
        },
        {item: "Grape Leaves Wrap", price: "$12.00", description: "Homemade grape leaves served with humus, lettuce and dices tomato"},
      ],
      dinner: [],
    };
  }

  render() {
    return (
      <div>
        <Navigation />
        <Container className="fluid mt-4 mb-4 min-vh menu">
          <TabContainer id="left-tabs-example" defaultActiveKey="lunch">
            <Row>
              <Col md={2}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="lunch">Lunch</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="dinner">Dinner</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="dessert">Dessert</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={10}>
                <Tab.Content>
                  <Tab.Pane eventKey="lunch">
                    <Row>
                      {this.state.lunch.map((dish, index) => {
                        return (
                          <Col md={4}>
                            <MenuCard item={dish.item} price={dish.price} description={dish.description} />{" "}
                          </Col>
                        );
                      })}
                      ;
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="dinner">test2</Tab.Pane>
                  <Tab.Pane eventKey="dessert">test3</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </TabContainer>
        </Container>
      </div>
    );
  }
}

export default Menu;
