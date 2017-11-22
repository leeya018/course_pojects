import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Menu from '../Menu';
import MemoGame from '../MemoGame';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      category: 'animalls',
      level: 1
    };
    this.updateGame = this.updateGame.bind(this);
  }

  // updateGame(level, category) {
  //   api.getData(category).then(data => {
  //     this.setState({ data, level, category });
  //   });
  // }
  updateGame(level, category) {
    this.setState({ level, category });
  }
  render() {
    let { level, category } = this.state;
    let i = 0;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={({history}) => <Menu updateGame={this.updateGame} level={level} category={category} history={history} />}
          />
          <Route path="/game" render={({history}) => <MemoGame level={level} category={category} history={history} />} />
          <Route component={() => <h1>Oops.. page not found</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
