import React, { Component } from "react";
import Button from "material-ui/Button";
import PropTypes from "prop-types";

class Availability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      available: this.props.initiallyAvailable
    };
    this.aval = this.aval.bind(this);
  }
  aval(event) {
    this.setState({
      available: 3
    });
  }

  render() {
    const { available } = this.state;
    return (
      <Button onClick={this.aval}>
        {available === 1 && "В наличии"}
        {available === 2 && "Нет в наличии"}
        {available === 3 && "Под заказ"}
      </Button>
    );
  }
}
//без Availability.propTypes работает
Availability.propTypes = {
  initiallyAvailable: PropTypes.number.isRequired
};
export default Availability;
