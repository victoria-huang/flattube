import React from 'react';
import ReviewForm from './ReviewForm'

class Review extends React.Component {

  state = {
    review: this.props.review,
    isClicked: false
  }

  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  submitReview = (review) => {
    this.setState({
      review: review,
      isClicked: false
    })
  }

  render () {
    return (
      <div>
        {this.state.review} &nbsp;
        <button onClick={this.handleClick}>Edit</button>
        {this.state.isClicked && <ReviewForm submitReview={this.submitReview} value={this.state.review} />}
      </div>
    )
  }

}

export default Review;
