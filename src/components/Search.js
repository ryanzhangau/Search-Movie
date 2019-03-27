import React, { Component } from "react";
import { connect } from "react-redux";
import { searchMovie } from "../store/actions/movieActions";
import "../styles/search.scss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
  }
  search = () => {
    this.props.searchMovie(this.state.query);
  };
  render() {
    return (
      <div className="search">
        <h3>Search Moive By Name</h3>
        <input
          type="text"
          value={this.state.query}
          onChange={e => this.setState({ query: e.target.value })}
          placeholder="Search Movie ..."
        />
        <button className="search-button" onClick={() => this.search()}>
          Search
        </button>
      </div>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = { searchMovie };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
