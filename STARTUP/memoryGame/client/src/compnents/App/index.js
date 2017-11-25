import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import enUS from 'antd/lib/locale-provider/en_US';
import { LocaleProvider  } from 'antd';
import Records from '../Record';
import Menu from '../Menu';
import MemoGame from '../MemoGame';

import api from '../App/api';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: 'lee',
      category: 'Animalls',
      level: 1
    };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(level, category, name) {
    this.setState({ name, level, category });
  }
  render() {
    let { level, category, name } = this.state;
    let i = 0;
    return (
      <LocaleProvider locale={enUS}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={({ history }) => (
              <Menu updateGame={this.updateGame} name={name} level={level} category={category} history={history} />
            )}
          />
          <Route
            path="/records"
            render={() => <Records name={name}/>}
          />
          Table
          <Route
            path="/game/:level"
            render={({ history,match }) => <MemoGame name={name} category={category} match={match} history={history} />}
          />
          <Route component={() => <h1>Oops.. page not found</h1>} />
        </Switch>
      </Router>
      </LocaleProvider>

    );
  }
}

export default App;
