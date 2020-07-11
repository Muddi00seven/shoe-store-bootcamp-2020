import React, {createContext , useReducer} from 'react'
import { shoesData } from '../Products/ShoesData';
import GlobalReducer from './GlobalReducer'

const initialState = {
    shoesData,
    cart : [

    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
let [state , dispatch] = useReducer(GlobalReducer , initialState)

    const addItem = (product) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload : product
        })
    } 

    const plus = (id) => {
        dispatch({
            type: 'INCREASE',
            payload : id
        })
    } 

    const minus = (id) => {
        dispatch({
            type: 'DECREASE' ,
            payload : id
        })
    } 

    const remove = (id) => {
        dispatch({
            type: 'REMOVE',
            payload : id
        })
    } 

    const checkOut = () => {
        dispatch({
            type: 'CHECKOUT'
        })
    } 



    return(
       <GlobalContext.Provider value={{
           shoesData:state.shoesData,
           cart:state.cart,
           addItem,
           plus,
           minus,
           remove,
           checkOut
       }}>


{children}
       </GlobalContext.Provider>
    )
}
