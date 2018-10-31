import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import axios from 'axios';
import Posts from './components/PostsGrid';
import Header from './components/Header';
import SidebarDrawer from './components/SidebarDrawer';

const styles = {
  root: {
    flexGrow: 1,
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

const apiKey = 'apiKey=5538d8992f5e49658189f457315657ca';

const fetchNews = (route) => {
  return axios.get(`https://newsapi.org/v2/${route}?sources=hacker-news&${apiKey}`)
    .then(res => res)
    .catch(error => console.error('Error loading news:\n', error));
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.state = {
      posts: [],
      left: false,
      loading: true,
    }
  }

  componentDidMount() {
    fetchNews('top-headlines').then(res => {
      if(res.status === 200) {
        const posts = res.data.articles;
        this.setState({ posts: posts, loading: false });
      }
    })
  };

  toggleDrawer (open) {
    this.setState({
      left: open,
    });
  };

  render() {
    const { classes } = this.props;
    const { posts } = this.state;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <SidebarDrawer left={this.state.left} toggleDrawer={this.toggleDrawer} />
          <Header toggleDrawer={this.toggleDrawer} />
          <Posts posts={posts} />
        </MuiThemeProvider>
      </div>
    );
  };
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
