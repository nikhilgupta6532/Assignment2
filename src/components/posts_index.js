import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
          <div className="text-xs-right">
            <Link to="/comment" className="btn btn-danger">
              Add Comment
            </Link>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <div>
          <Link to="/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <div>
          <Link to="/author" className="btn btn-primary">
            Find Author
          </Link>
        </div>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
