import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NewsCard from './NewsCard';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 200
};

const styles = {
  grid: {
    padding: '0',
  },
};
class Posts extends React.Component {

  render() {
    const { posts, classes } = this.props;

    const cards = posts.map((post,index) => {
      return <NewsCard key={index} post={post}></NewsCard>
    });

    return (
      <Masonry
        className={classes.grid}
        options={masonryOptions}
      >
        {cards}
      </Masonry>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
}


export default withStyles(styles)(Posts);