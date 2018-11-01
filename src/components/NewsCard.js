import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns';

const styles = {
  root: {
    flexGrow: 1,
    margin: '15px',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  a: {
    textDecoration: 'none !important',
  },
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    minHeight: '300px'
  },
};
class NewsCard extends React.Component {
  render() {
    const { classes, post } = this.props;

    return (
      <div className={classes.root}>
        <a href={post.url} target="_blank" rel="noopener noreferrer" className={classes.a}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={post.title}
                className={classes.media}
                height="140"
                image={post.urlToImage || 'news.png'}
                title={post.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {post.title}
                </Typography>
                <Typography component="p">
                {post.description || post.content}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Chip
                label={format(post.publishedAt, 'DD.MM.YYYY. HH:mm')}
                className={classes.chip}
                color="primary" />
            </CardActions>
          </Card>
        </a>
      </div>
    );
  }
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsCard);
