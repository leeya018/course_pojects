import React, { Component } from "react";
import Filter from "../Filter";
import Store from "../Store";
import api from "./api";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { stores: [], flStores: [], winner: "" };
    this.getData();
    this.updateFl = this.updateFl.bind(this);
    this.updateWinner = this.updateWinner.bind(this);
  }
  getData() {
    api.getData().then(stores => {
      this.setState({ stores });
    });
  }
  updateFl(fl) {
    this.setState({ flStores: fl });
  }
  updateWinner(winner) {
    this.setState({ winner });
  }
  render() {
    let storeTitles = this.state.flStores.map((store, index) => (
      <Store key={index} store={store} />
    ));
    let { stores, flStores, winner } = this.state;
    return (
      <div className="container">
        <div className="header">
          <Filter
            stores={stores}
            updateFl={this.updateFl}
            updateWinner={this.updateWinner}
          />
          <div className="winner"><strong>winner:</strong>{winner}</div>
        </div>
        <div className="stores">{storeTitles}</div>
      </div>
    );
  }
}

export default App;
