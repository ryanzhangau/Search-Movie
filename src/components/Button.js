import React, { Component } from "react";
import { addMovie, removeMovie } from "../store/actions/movieActions";
import { connect } from "react-redux";

class Button extends Component {
  click() {
    console.log(this.props.action, this.props.movie);
    this.props[this.props.action](this.props.movie);
  }
  render() {
    return <button onClick={() => this.click()}>{this.props.label}</button>;
  }
}

const mapStateToProps = null;
const mapDispatchToProps = { addMovie, removeMovie };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
