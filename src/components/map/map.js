import React, { Component } from 'react';
import "./map.scss";

class Map extends Component {
    render() { 
        return (
            <iframe
            className={`welcome-iframe ${this.props.vh}`}
            title="google maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.7736016421754!2d-75.2891765843565!3d40.16959417855615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6bcd140735883%3A0xe327d8cee90bf89c!2sMirna&#39;s%20Cafe!5e0!3m2!1sen!2sus!4v1595342356685!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        );
    }
}
 
export default Map;