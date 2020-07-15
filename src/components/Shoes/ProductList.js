import React, {useContext} from 'react'
import ShoesCard from './ShoesCard/ShoesCard'
import {Grid} from '@material-ui/core'
import {GlobalContext} from '../GlobalContext/GlobalContext'


const ProductList = () => {
    const {ShoesData} = useContext(GlobalContext)

    return (
        <Grid container spacing={3} > 
            {ShoesData.map((e)=>(
                <ShoesCard key={e.id} product={e} id={e.id} name={e.name} price={e.price} imgUrl={e.imgUrl} description={e.description} />
            ))}
        </Grid>
    )
}

export default ProductList
