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

    return (
        <div>
               <Grid xs={12} sm={5} md={3} item>
        <Card >
          <CardActionArea>
            <CardMedia
              
              component="img"
              alt="Logitec Zone Wireless"
              height="200"
              image={imgUrl}
              title="Logitec Zone Wireless"
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
                Open workspaces are great for collaboration, but they can also
                be noisy. Take control of your Keyboard environment
              </Typography>
            </CardContent>
            <CardContent >
              <Typography variant={"h6"} align="center">
                PRICE
              </Typography>
              <Typography align="center">Rs.{price} </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <div >
              <Button
                onClick={addToCart}
                size="small"
                color="primary"
              >
                {btnText}
              </Button>
            </div>
          </CardActions>
        </Card>
      </Grid>
        </div>
    )
}
