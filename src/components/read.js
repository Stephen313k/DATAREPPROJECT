import React from 'react';
import { Favourites } from './favourites';
import axios from 'axios';
//import { response } from 'express';

export class Read extends React.Component {

    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this)
    }

    state = {
        favourites: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/favourites')
            .then((response) => {
                this.setState({ favourites: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }
    //Reload the new data that has been updated
    ReloadData() {

        axios.get('http://localhost:4000/api/favourites')
        .then(
                (response) => {
                    this.setState({ favourites: response.data })
                })
            .catch(
                (error) => { console.log(error) } 
            );
    }
    render() {
        return (
            <div>
                <h1>This is the read component.</h1>
                <Favourites favourites={this.state.favourites}></Favourites>
            </div>
        );
    }
}

