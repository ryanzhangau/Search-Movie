import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./views/Home";
import WatchList from "./views/WatchList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/watchlist" component={WatchList} />
      </div>
    );
  }
}

export default App;
