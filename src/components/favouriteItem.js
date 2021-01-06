import React from 'react'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom';

export class FavouriteItem extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                            <body><h1>CUNT</h1>
                                {this.props.favourite.Colour} <br></br>
                                {this.props.favourite.LuckyNumber}<br></br>
                                {this.props.favourite.Sport}<br></br>
                                {this.props.favourite.Music}<br></br>
                            </body>
                    </Card.Body>
             <Link to={"/edit/" + this.props.favourite._id} className="btn btn-primary">Edit</Link>
                </Card>
            </div>
        );
    }
}