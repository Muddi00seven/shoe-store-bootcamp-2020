import React,{useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid,Paper } from '@material-ui/core';
import CartItem from './CartItems';
import classes from './cart.module.css';
import { GlobalContext } from '../GlobalContext/GlobalContext';



const Carts = () => {
    
  const {cart,checkout} = useContext(GlobalContext) 
  let messege = <h1 className={classes.messege}>VISIT <br/>  <Link to='/'>STORE</Link> TO GET SOME ITEMS IN YOUR CART </h1>
  const navigate = useNavigate()
  const handelCheckout = ()=>{
    checkout()
    navigate('/')
  }
  const totalPrice =  (cart.reduce((acc, value)=>acc+value.price * value.quantity,0))
    return (
        
        <div className={classes.body}>
            <Grid container spacing={2}>
                <Grid  xs={9}  item >
                    <Paper square  className={classes.box1}>
                       <div className={classes.strip}>
                        <div className={classes.header}>
                            <h4>Items</h4>
                            <h4>Product</h4>
                            <h4>Quantity</h4>
                            <h4>Price</h4>
                        </div>
                        </div>
                        {totalPrice === 0 ? messege : 
                         cart.map((value,i)=>(
                           <CartItem key={value.id} index={i} value={value}/>
                       ))}
                    </Paper>
                </Grid>
                <Grid xs={3}  item >
                    <Paper square  className={classes.box1}>
                        <div className={classes.strip}>
                            <div className={classes.header}>
                                <h4>TOTAL</h4>
                            </div>
                        </div>    
                            <div className={classes.price}>
                                <div className={classes.endPrice}>
                                    <div>Total Price</div>
                                    <div>{totalPrice}</div>
                                </div>
                                
                                <hr/>
                                <div className={classes.endTotal}>
                                    <div>Grand Total</div>
                                    <div>{totalPrice}</div>
                                </div>
                                
                            </div>
                            <div onClick={handelCheckout} className={classes.checkout}>CHECKOUT</div>
                    </Paper>
                </Grid>
                
            </Grid>
        </div>
    )
}
export default Carts;
