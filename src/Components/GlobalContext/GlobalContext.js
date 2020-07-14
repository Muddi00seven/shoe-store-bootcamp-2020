import React, {createContext, useReducer} from 'react'
import GlobalReducer from './GlobalReducer'
import { ShoesData } from '../Shoes/ShoesData/ShoesData'

const initialState = {
    
    ShoesData,
    cart:[
        
    ]

} 
    


export const GlobalContext = createContext(initialState)


export const GlobalProvider = ({ children }) =>{
    
    let [state, dispatch] = useReducer(GlobalReducer, initialState)
    

    function addItem(product){
        dispatch({
            type:'ADD_TO_CART',
            payload:product
        })
    }
    function plus(id){
        dispatch({
            type:'INCREASE',
            payload:id
        })
    }
    function minus(id){
        dispatch({
            type:'DECREASE',
            payload:id
        })
    }
    function remove(id){
        dispatch({
            type:'REMOVE',
            payload:id
        })
    }
    function checkout(){
        dispatch({
            type:'CHECKOUT',
            
        })
    }
  
    

   

    return(
        <GlobalContext.Provider value={{
            ShoesData:state.ShoesData,
            cart:state.cart,
            addItem,
            plus,
            minus,
            remove,
            checkout,

        }}>
            {children}
        </GlobalContext.Provider>
    )

}