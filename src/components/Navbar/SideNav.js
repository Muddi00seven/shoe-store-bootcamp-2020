import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 240,
  },
}));

// const Item = ({ name, icon, onClickHandler }) => (
//   <ListItem button onClick={onClickHandler}>
//     <ListItemIcon>{icon}</ListItemIcon>
//     <ListItemText primary={name} />
//   </ListItem>
// );

const RightDrawer = ({ open, onClickHandler }) => {
  const classes = useStyles();
  const navigate = useNavigate();


  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
      onClick={onClickHandler}
    >
      <List>
     

        <Button onClick={()=> navigate('/')}  className={classes.btn} color="inherit">HOME</Button>
        <br/>
          <Button onClick={()=> navigate('cart')} className={classes.btn} color="inherit">CART</Button>
      </List>
    </Drawer>
  );
};

export default RightDrawer;
