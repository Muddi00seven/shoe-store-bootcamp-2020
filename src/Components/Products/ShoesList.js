import React, {useContext} from 'react';
import {ShoesCard } from './ShoesCard';
import {Grid} from '@material-ui/core';
import {GlobalContext} from '../GlobalContext/GlobalContext';


const ShoesList = () => {
    const {shoesData} = useContext(GlobalContext);
    return (
        <Grid container spacing={3} > 
        {shoesData.map((e)=>(
            <ShoesCard key={e.id} product={e} id={e.id} name={e.name} price={e.price} imgUrl={e.imgUrl} />
        ))}
    </Grid>
    )
}

export default ShoesList;
