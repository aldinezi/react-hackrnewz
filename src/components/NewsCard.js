import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: blue,
  },
});

class NewsCard extends React.Component {
  state = {
  };

  render() {
    const { classes, post } = this.props;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
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
                {post.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsCard);
