import React, {useContext} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import {GlobalContext} from '../GlobalContext/GlobalContext'
import { Button } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import {  useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background : '#EE2713'
  },
  links: {
    display: "flex",
  },
  btn:{
  marginLeft : '20px'
  },
  menuButton: {
    color: theme.palette.primary.contrastText,
  },
  rightContainer: {
    [theme.breakpoints.up("md")]: {
      marginLeft: 80,
    },
  },
}));

const Navbar = ({ onMenuClickHandler }) => {
  const classes = useStyles();
  let navigate = useNavigate()
  const {cart} = useContext(GlobalContext)

  return (
    <>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.container}>
          <Link to="/">
            <img src="https://seeklogo.com/images/N/nike-logo-47A65A59D5-seeklogo.com.png" alt="nike" width="128px" />
          </Link>
          <Hidden xsDown>
            <div className={classes.links}>
          
  <Button onClick={()=> navigate('/')}  className={classes.btn} color="inherit">HOME</Button>
          <Button onClick={()=> navigate('cart')} className={classes.btn} color="inherit">CART</Button>
            </div>
          </Hidden>

          <div className={classes.rightContainer}>
            <IconButton onClick={()=> navigate('cart')} aria-label="show  new mails" color="inherit">
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Hidden smUp>
              <IconButton
                className={classes.menuButton}
                edge="end"
                aria-label="menu"
                onClick={onMenuClickHandler}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
