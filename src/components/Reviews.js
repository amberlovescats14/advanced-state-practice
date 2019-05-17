import React, { Component } from 'react'
import axios from 'axios'
import ProducDetail from './ProductDetail';



export class Reviews extends Component {
  state = {
    showReviews: false

  }
  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/comments?limit=10')
  //   .then(res => this.setState({ reviews: res.data  }))
    
  // }
  handleClick = (e) => {
    e.preventDefault();
    this.setState({ showReviews: !this.state.showReviews  });

  }
  render() {
    console.log(this.props.product.reviews)
    return (
      <div>
        <button onClick={this.handleClick}>Read Reviews</button>
        <ul>
        {this.state.showReviews && this.props.product.reviews.map(item => 
        <li>{item.description}</li>)}
        </ul>
      </div>
    )
  }
}

export default Reviews
