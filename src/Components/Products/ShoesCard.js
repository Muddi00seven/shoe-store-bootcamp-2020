import React,{useContext , useState} from 'react';
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
import { GlobalContext } from '../GlobalContext/GlobalContext'; 
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});



export const ShoesCard = ({product , id , name , price , imgUrl}) => {
   
   const {addItem , cart , plus } = useContext(GlobalContext);
   const [btnText , setBtnText] = useState('ADD TO CART')
   
    const addToCart = () => {
        if( cart.find((e)=>e.id ===product.id)){

            plus(id)
        }

        else{
            product.quantity = 1
            addItem({product});
            setBtnText('ADD MORE')
        }
    }

    const classes = useStyles();

   
    return (
      <Grid>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={imgUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <Button size="small" color="primary">
        {btnText}
        </Button>
      </CardActions>
    </Card>
    </Grid>
    )
}
