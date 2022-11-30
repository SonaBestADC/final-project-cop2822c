import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "../listGroupItem/listGroupItem";


class Hours extends Component {
  constructor() {
    super();
    this.state = {
      openTimes: [
        {hours: "Sunday: 4:00 pm - 9:30 pm" },
        {hours: "Monday: 11:30 am - 9:30 pm" },
        {hours: "Tuesday: 11:30 am - 9:30 pm" },
        {hours: "Wednesday: 11:30 am - 9:30 pm" },
        {hours: "Thursday: 11:30 am - 9:30 pm" },
        {hours: "Friday: 11:30 am - 10:00 pm " },
        { hours: "Saturday: 11:30 am - 10:00 pm " },
      ],
    };
  }

  render() {
    return (
      <ListGroup>
        {this.state.openTimes.map(({ hours }, index) => {
          return (
            // <ListGroup.Item>
            //   {hours}
            // </ListGroup.Item>
            <ListGroupItem information={hours} key={index}/>
          );
        })}
      </ListGroup>
    );
  }
}

export default Hours;
