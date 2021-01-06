  import React from 'react';
import {FavouriteItem} from './favouriteItem';

export class Favourites extends React.Component{

    render(){
        return this.props.favourites.map( (favourite)=>{
            return <FavouriteItem favourite={favourite}></FavouriteItem>
        })
    }
}