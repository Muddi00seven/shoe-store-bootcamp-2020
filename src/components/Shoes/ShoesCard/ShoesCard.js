import React, { useContext,useState } from "react";
import {
  CardActionArea,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Typography,
  Card,
  Grid,
} from "@material-ui/core";
import {useStyles} from './useStyle'
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


export default function Products({ product,id, name, price, imgUrl ,description }) {
  const styles = useStyles();

  const { addItem, cart ,plus, } = useContext(GlobalContext);
  const [btnText, setBtnText]  = useState(<AddShoppingCartIcon/>)
  

  const addToCart = () => {
    if( cart.find((e)=>e.id===product.id)) {
      
      plus(id)

    }
    else{  
    product.quantity = 1
    addItem({product});
    setBtnText('ADD MORE')
    }
  };
  
  
  
  return (
    <>
      <Grid xs={12} sm={5} md={3} item>
        <Card className={styles.card}>
          <CardActionArea>
            <CardMedia
              className={styles.img}
              component="img"
              alt="NIKE SHOES"
              height="200"
              image={imgUrl}
              title="NIKE SHOES STORE"
            />
            <CardContent>
              <Typography noWrap gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography
                align="justify"
                variant="body2"
                color="textSecondary"
                component="p"
              >
             {description}
              </Typography>
            </CardContent>
            <CardContent className={styles.root}>
              <Typography variant={"h6"} align="center">
                PRICE
              </Typography>
              <Typography align="center">Rs.{price} </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <div className={styles.action}>
              <Button
                onClick={addToCart}
                className={styles.btn}
                size="small"
                color="primary"
              >
                {btnText}
              </Button>
            </div>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
