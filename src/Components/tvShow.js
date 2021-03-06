import React from 'react';
import ShowDetails from './showDetails'
import {Card, Col} from 'react-materialize'
import Adapter from '../Adapter'
import ReviewForm from './ReviewForm'
import Review from './Review'

class TvShow extends React.Component {

  state = {
    episodes: [],
    isClicked: false,
    review: []
  }

  componentDidMount = () => {
    Adapter.getShowEpisodes(this.props.id)
    .then(episodes => this.setState({
      episodes: episodes
    }))
  }

  clickHandler = () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  submitReview = (review) => {
    const reviews = [...this.state.review, review]
    this.setState({
      review: reviews
    })
  }

  renderReview = ()=> {
    if (this.state.review.length > 0) {
      return this.state.review.map (review => {
        return < Review review={review} />
      })
    } else {
      return <p>There are currently no reviews! Be the first to leave one.</p>
    }
  }

  render() {
    return (
      <Col m={6} s={12}>
        <Card className='blue-grey darken-1'
          textClassName='black-text'
          title={this.props.name}>
          <button onClick={() => this.clickHandler(this.props.id)}>Details</button>
          {this.state.isClicked && <ShowDetails episodes={this.state.episodes} />}
          < ReviewForm submitReview={this.submitReview} value='' />
          <hr />
          <h6><b>All Reviews</b></h6>
          {this.renderReview()}
        </Card>
      </Col>
    );
  }
}

export default TvShow;
