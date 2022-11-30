import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export default class ImageSlider extends Component {
  constructor() {
    super();
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index: 0,
      imageItems: [
        {
          src: "https://wallpapercave.com/wp/wp3199034.jpg",
          title: "Blue screen title",
          description: "this is blue and quote",
        },
        {
          src:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.solidbackgrounds.com%2Fimages%2F1920x1080%2F1920x1080-red-solid-color-background.jpg&f=1&nofb=1",
          title: "Red screen title",
          description: "this is red and quote",
        },
        {
          src:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.solidbackgrounds.com%2Fimages%2F1920x1080%2F1920x1080-fluorescent-pink-solid-color-background.jpg&f=1&nofb=1",
          title: "Pink screen title",
          description: "this is pink and quote",
        },
        {
          src: "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-black-solid-color-background.jpg",
          title: "Black screen title",
          description: "this is black and quote",
        },
      ],
    };
  }

  handleSelect(selectedIndex) {
    this.setState({
      index: selectedIndex,
    });
  }

  render() {
    const { index } = this.state;
    return (
      <Carousel className="mb-2 mt-2" activeIndex={index} onSelect={this.handleSelect}>
        {this.state.imageItems.map((image, index2) => {
          return (
            <Carousel.Item interval={7000} key={index2}>
              <img className="d-block w-100" src={image.src} alt={image.description} />
              <Carousel.Caption>
                <h5>{image.title}</h5>
                <p>{image.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}
