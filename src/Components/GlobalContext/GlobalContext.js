import React, {createContext , useReducer} from 'react'
import { shoesData } from '../Products/ShoesCard';

const initialState = {
    shoesData,
    cart : [

    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    return(
        <di>

        </di>
    )
}
