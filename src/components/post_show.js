import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostShow extends Component {
  render() {
    console.log(this.props.post);
    if (!this.props.post.author) {
      return <div>No Post to show</div>;
    } else {
      return <div>Author:{this.props.post.id}</div>;
    }
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts
  };
}

export default connect(mapStateToProps)(PostShow);
