import React, {useContext} from "react";
import { GlobalContext } from '../GlobalContext/GlobalContext'

import classes from "./cart.module.css";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const CartItems = ({ value, index }) => {
  const {plus,minus,remove} = useContext(GlobalContext)
  
  const {id} = value
  const handleMinus = ()=>{
    value.quantity <= 1 ? remove(id):
    minus(id)
  }
  const handlePlus = ()=>{
      plus(id)
  }
  const handleDel =()=>{
    remove(id)
  }

  return (
    <div className={classes.product}>
      
      <h4>{index + 1}</h4>
      < DeleteForeverIcon onClick={handleDel} className={classes.del} />
      <h4 className={classes.name}>{value.name}</h4>
      <div >
       <span className={classes.qty}>{value.quantity}</span>
        <div>
          <span onClick={handleMinus} className={classes.minus}>-</span>
          <span onClick={handlePlus} className={classes.plus}>+</span>
        </div>
      </div>

      <h4>{value.price}</h4>
    </div>
  );
};
export default CartItems;
