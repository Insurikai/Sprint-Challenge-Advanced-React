import React, {Component} from 'react';

export default class Player extends Component{
    constructor(props){
        super(props);
        this.state = {
            player: this.props.player
        }
    }
    render(){
        return(
            <button className="player" onClick={()=>{this.props.saveToLocal(this.state.player)}}>
                <h1 className="name">{this.state.player.name}</h1>
                <p className="country">{this.state.player.country}</p>
            </button>
        );
    }
}
