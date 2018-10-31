import React from 'react';
import PropTypes from 'prop-types';
import NewsCard from './NewsCard';

class Posts extends React.Component {

  render() {
    const { posts } = this.props;

    return (
      posts.map((post,index) => {
        return <NewsCard key={index} post={post}></NewsCard>
      })
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default Posts;