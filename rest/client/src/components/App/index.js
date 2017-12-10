import React, { Component } from 'react';
import Person from '../Person';
import TimePicker from 'material-ui/TimePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import api from './api';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.getMyLocation();
    this.state = {
      id: 0,
      gender: '',
      food: '',
      longitude: 0,
      latitude: 0,
      time: '',
      name: '',
      matchPerson: {},
      taken: false
    };

    this.updateName = this.updateName.bind(this);
    this.updateGender = this.updateGender.bind(this);
    this.updateFood = this.updateFood.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.updateInterests = this.updateInterests.bind(this);
    this.sendDataToJSON = this.sendDataToJSON.bind(this);
    this.checkMatch = this.checkMatch.bind(this);
  }

  updateName = (event, name) => {
    this.setState({ name });
  };
  updateGender = (event, index, gender) => this.setState({ gender });
  updateFood = (event, index, food) => {
    this.setState({ food });
  };
  updateTime = (event, time) => {
    // let time = new Date(time1).getTime().toString();
    // let clockTime  = api.msToTime(time)
    this.setState({ time });
  };
  updateInterests = (event, interest) => this.setState({ interest });

  getMyLocation() {
    navigator.geolocation.getCurrentPosition(location => {
      const { latitude, longitude } = location.coords;
      this.setState({ latitude, longitude });
    });
  }

  checkMatch() {
    console.log(this.state);

    let { food, name, time } = this.state;
    console.log(food);
    let selfApi = api;
    api
      .getData()
      .then(res => {
        // let matchPerson = res.data.find(person => person.time === time && person.food === person.food);

        let matchPerson = res.data.find(person => {
          if (person.food === food && person.taken === false && person.name !== name) {
            // if(Math.abs(person.time - time) / 36e5 === 1){
            return true;
            // }
          }
        });
        if (matchPerson) {
          this.setState({ matchPerson });
          this.updateMateStatus(selfApi, matchPerson);
        } else {
          this.sendDataToJSON(selfApi, this.state);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateMateStatus(selfApi, matchPerson) {
    matchPerson.taken = true;
    selfApi
      .updateData(matchPerson)
      .then(() => {
        console.log('update succeess');
      })
      .catch(err => {
        console.log(err);
      });
  }
  sendDataToJSON(selfApi, data) {
    selfApi
      .getData()
      .then(res => {
        let lastId = res.data.length + 1;
        console.log('success get');
        this.setState({ id: lastId });
        let dataToAdd = this.state;
        selfApi.sendData(dataToAdd);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let { gender, food, name, matchPerson } = this.state;
    return (
      <MuiThemeProvider>
        <h1>Wellcome to Food Finder</h1>

        <TextField hintText="name" value={name} onChange={this.updateName} />

        <SelectField floatingLabelText="gender" value={gender} onChange={this.updateGender}>
          <MenuItem value={null} primaryText="" />
          <MenuItem value="Male" primaryText="Male" />
          <MenuItem value="Female" primaryText="Female" />
        </SelectField>

        <SelectField floatingLabelText="food" value={food} onChange={this.updateFood}>
          <MenuItem value={null} primaryText="" />
          <MenuItem value="Diary" primaryText="Diary" />
          <MenuItem value="Meet" primaryText="Meet" />
          <MenuItem value="Both" primaryText="Both" />
        </SelectField>

        <TextField hintText="interests" onChange={this.updateInterests} />

        <TimePicker format="24hr" hintText="24hr Format" onChange={this.updateTime} />

        <FlatButton label="Send" primary={true} onClick={this.checkMatch} />

        <Person matchPerson={matchPerson} />
      </MuiThemeProvider>
    );
  }
}

export default App;
