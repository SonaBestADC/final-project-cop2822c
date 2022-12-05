import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./imageSlider.scss";

export default class ImageSlider extends Component {
  constructor() {
    super();
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index: 0,
      imageItems: [
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHp371JSaLyRU5522gQpgnViUJyKA2SSLslg&usqp=CAU",
          title: "Mirna's Cafe interior",
          description: "",
        },
        {
          src:
            "https://www.mirnascafe.com/wp-content/uploads/2017/03/IMG_1570.jpg",
          title: "Private parties",
          description: "We offer a wide range of choices when it comes to private parties",
        },
        {
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCsAygqQqxFGitGVl_29XVXh_j-b3T8OlRAA&usqp=CAU",
          title: "",
          description: "",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZngAH_uJ5h6QS0Xy8Q6oxXaRJmqlKYrj5g&usqp=CAU",
          title: "Mirna's Cafe Logo",
          description: "",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQqCH3xCknwIOgixzwNLtroS_XxduUOx3dA&usqp=CAU",
          title: "",
          description: "",
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
            <Carousel.Item interval={7000} key={index2} >
              <img className="d-block w-100 carousel-item" src={image.src} alt={image.description} />
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
