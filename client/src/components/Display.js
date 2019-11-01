import React,{Component} from 'react';
import axios from 'axios';
import Player from './Player';

/* const response = [
    {"name":"Alex Morgan","country":"United States","searches":100,"id":0},
    {"name":"Megan Rapinoe","country":"United States","searches":99,"id":1}
] */
export default class Display extends Component{
    constructor(){
        super();
        this.state = {
            players: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        // this.setState({ players: response });
        axios.get('http://localhost:5000/api/players').then((results)=>{
          this.setState({
            players: results.data
          });
        }).catch(console.log);
      }

    render(){
        return(
            <div className="list">
                <h1 className="player-title">Players</h1>
                {
                    this.state.players.map(player=>{
                        return <Player player={player} key={player.id} saveToLocal={this.props.saveToLocal}/>
                    })
                }
            </div>
        );
    }
}