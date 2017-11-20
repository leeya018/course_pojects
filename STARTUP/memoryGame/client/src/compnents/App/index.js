import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';

import api from './api';
import Menu from '../Menu';
import MemoGame from '../MemoGame';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      category: 'animalls',
      level: 1,
      data: []
    };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(level, category) {
    api.getData(category).then(data => {
      this.setState({ data, level, category });
    });
  }
  render() {
    let { level, category, data } = this.state;
    let i = 0;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Menu updateGame={this.updateGame} level={level} category={category} />}
          />
          <Route path="/game" render={props => <MemoGame level={level} category={category} data={data} />} />
          <Route component={() => <h1>Oops.. page not found</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
