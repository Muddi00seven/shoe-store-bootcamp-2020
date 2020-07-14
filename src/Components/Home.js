import React from "react";
import ProductList from "./Shoes/ProductList";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from '@material-ui/icons/Check';
import {
  
  Typography,
  
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
home: {
    marginTop:'7%'
},
welcome:{
marginBottom:'2%'
}
}));

export default function Home() {
  const styles = useStyles();

  return (
    <div className={styles.home}>
        <Typography className={styles.welcome} align='center'  variant={"h4"}>WELCOME TO <CheckIcon fontSize='large'/> NIKE STORE</Typography>
        <ProductList/>
    </div>
  );
}
