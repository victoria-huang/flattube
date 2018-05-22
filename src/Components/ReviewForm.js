import React from 'react'

class ReviewForm extends React.Component {

  state = {
    review: this.props.value
  }

  handleChange = (event) => {
    this.setState({
      review: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      review: ''
    })
    this.props.submitReview(this.state.review)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="review">Review</label>
          <input id="review" type="text" onChange={this.handleChange} value={this.state.review} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

export default ReviewForm
