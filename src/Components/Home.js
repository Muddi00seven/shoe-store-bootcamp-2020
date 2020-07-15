import React from "react";
import ProductList from "./Shoes/ProductList";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from '@material-ui/icons/Check';
import Slideshow from './Headings/Crausel';

import {
  
  Typography,
  
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
home: {
    marginTop:'-48%'
},
welcome:{
marginBottom:'2%'
},

}));

export default function Home() {
  const styles = useStyles();

  return (
    <div className={styles.home}>
      <Slideshow/>
        <Typography className={styles.welcome} align='center'  variant={"h4"}>START SHOPPING NOW</Typography>
        <ProductList/>
    </div>
  );
}
