import React, { Component } from 'react';
import ReviewList from '../ReviewList';
import ReviewForm from '../ReviewForm';
import './ReviewApp.css';

class reviewApp extends Component {

  constructor(props) {
    super(props)
    this.state = { reviews: props.reviews }
    this.handlePost = this.handlePost.bind(this)
  }

  handlePost(review) {
    const reviews = [...this.state.reviews];
    reviews.unshift(review);
    this.setState({ reviews })
  }

  render() {
    const { reviews } = this.state;
    let {homeId} = this.props
    return (
      <div className="reviewApp">
        <ReviewForm handlePost={this.handlePost} homeId={homeId} />
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

export default reviewApp;




