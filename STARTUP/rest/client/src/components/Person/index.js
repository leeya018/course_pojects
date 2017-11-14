import React, { Component } from 'react';

export default ({ matchPerson }) => {
  return (
    <div>
      <h1>{matchPerson.name}</h1>
      <p>{matchPerson.longitude}</p>
      <p>{matchPerson.latitude}</p>
      <p>{matchPerson.time}</p>
      <p>{matchPerson.gender}</p>
      <p>{matchPerson.food}</p>
      <p>{matchPerson.interests}</p>
    </div>
  );
};
