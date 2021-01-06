import React from 'react';
import axios from 'axios';

export class Edit extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeColour= this.onChangeColour.bind(this);
        this.onChangeLuckyNumber = this.onChangeLuckyNumber.bind(this);
        this.onChangeSport = this.onChangeSport.bind(this);
        this.onChangeMusic = this.onChangeMusic.bind(this);

        this.state = {
            Colour:" ",
            LuckyNumber:" ",
            Sport:" ",
            Music:" "
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/favourites/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    Colour: response.data.Colour,
                    LuckyNumber: response.data.LuckyNumber,
                    Sport: response.data.Sport,
                    Music: response.data.Music,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onChangeColour(e) {
        this.setState({
            Colour: e.target.value
        });
    }

    onChangeLuckyNumber(e) {
        this.setState({
            LuckyNumber: e.target.value
        });
    }
    onChangeSport(e) {
        this.setState({
            Sport: e.target.value
        })
    }
    onChangeMusic(e) {
        this.setState({
            Music: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Your favourites changed " + this.state.Colour + " "
            + this.state.LuckyNumber + " " +
            this.state.Sport + " " +
            this.state.Music);

            const newFavourite ={
                Colour:this.state.Colour,
                LuckyNumber:this.state.LuckyNumber,
                Sport:this.state.Sport,
                Music:this.state.Music,
                _id:this.state._id
            };
//put instead of post
        axios.put('http://localhost:4000/api/favourites' + this.state_id, newFavourite)
        .then(response => {
             console.log(response.data)
        })
        .catch();    
          }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Whats your favourite colour?: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Colour}
                            onChange={this.onChangeColour}></input>
                    </div>
                    <div className="form-group">
                        <label>Whats your favourite number?:  </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.LuckyNumber}
                            onChange={this.onChangeLuckyNumber}></input>
                    </div>
                    
                    <div className='form-group'>
                        <label>Whats your favourite sport?:  </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Sport}
                            onChange={this.onChangeSport}>
                        </textarea>
                    </div>
                    <div className='form-group'>
                        <label>Whats your favourite music genre?:  </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Music}
                            onChange={this.onChangeMusic}>
                        </textarea>
                    </div>

                  <div className="form-group">
                        <input type='submit'
                            value='Edit new values'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}