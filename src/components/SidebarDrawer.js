
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import StarIcon from '@material-ui/icons/Grade';

const styles = {
  list: {
    color: 'black',
  },
};

class SidebarDrawer extends React.Component {
  toggleDrawer(flag){
    this.props.toggleDrawer(flag);
  }

  fetchFromRoute(route){
    console.log(route);
    this.props.fetchFromRoute(route);
  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem
            button
            key="Featured"
            onClick={() => this.fetchFromRoute('topHeadlines')}>
            <ListItemIcon><StarIcon/></ListItemIcon>
            <ListItemText primary="Featured" />
          </ListItem>
          <ListItem
            button
            key="Everything"
            onClick={() => this.fetchFromRoute('everything')}>
            <ListItemIcon><LineStyleIcon/></ListItemIcon>
            <ListItemText primary="Everything" />
          </ListItem>
        </List>
        <Divider />
      </div>
    );

    return (
      <Drawer open={this.props.left} onClose={() => this.toggleDrawer(false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={() => this.toggleDrawer(false)}
          onKeyDown={() => this.toggleDrawer(false)}
        >
        {sideList}
        </div>
      </Drawer>
    )
  }
}

SidebarDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  fetchFromRoute: PropTypes.func.isRequired,
  left: PropTypes.bool.isRequired,
};

export default withStyles(styles)(SidebarDrawer);