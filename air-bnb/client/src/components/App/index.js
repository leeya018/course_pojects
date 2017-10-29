// import { PropTypes } from 'prop-types'
// import { connect } from 'react-redux'

import React, { Component } from 'react';
import axios from 'axios'
import logo from '../../logo.svg';
import './App.css';
import NavBar from '../NavBar';
import Book from '../Book';
import Avelablity from '../Avelablity';

// import {updateHomeList} from '../../actions/homeListAction'

class App extends Component {
  constructor() {
    super()
    this.state = { homes: [] }
  }

  async componentWillMount() {
    try {
      let response = await axios.get('/api/homes')
      let homes = response.data
      this.setState({ homes })
    } catch (e) {
      console.log('err homes')
    }
  }



  render() {
    let homes = this.state.homes
    return (
      <div className="App">
        {(homes.length > 0) &&
          <NavBar homes={homes} />
        }
      </div>
    );
  }
}

export default App;

// function mapStateToProps(state) {
// 	const { homes } = state
// 	return {
// 		homes
// 	}
// }

// function mapDispatchToProps(dispatch) {
// 	return {
// 		updateHomeList: (homes) => dispatch(updateHomeList(homes)), // return  the function 
		
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)