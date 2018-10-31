
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const styles = {
  list: {
    color: 'black',
  },
};

class SidebarDrawer extends React.Component {
  toggleDrawer(flag){
    this.props.toggleDrawer(flag);
  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Inbox', 'Starred'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
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
  left: PropTypes.bool.isRequired,
};

export default withStyles(styles)(SidebarDrawer);