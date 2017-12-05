import React, { Component } from "react";
import "./store.css";

export default ({ store }) => {
  let distShow = "";
  if (store.dist) {
    distShow = store.dist + "KM";
  }
  return (
    <div className="store">
      <h1>{store.title}</h1>
      <p>{store.location}</p>
      <p>{distShow}</p>
    </div>
  );
};
