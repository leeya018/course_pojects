import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { countries } from 'country-data';

import Records from '../Record';
import MemoGame from '../MemoGame';
import Menu from '../Menu';

class MyRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: 'US',
      name: 'lee',
      category: 'Animalls',
      level: 1
    };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(level, category, name, countryCode) {
    this.setState({ level, category, name, countryCode });
  }

  render() {
    let { level, category, name, countryCode } = this.state;

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Menu updateGame={this.updateGame} {...this.state} />} />
          <Route path="/records" render={() => <Records name={name} />} />
          Table
          <Route
            path="/game/:level"
            render={({ history, match }) => (
              <MemoGame {...this.state} match={match} history={history} />
            )}
          />
          <Route component={() => <h1>Oops.. page not found</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default MyRouter;
