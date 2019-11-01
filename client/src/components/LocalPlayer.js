import React from 'react';

export default (props)=>{
    if(props.player.id === undefined){
        return (
            <div className="local-player nothing">
            
            </div>
        );
    }
    return(
        <div className="local-player">
            <h1 className="name">{props.player.name}</h1>
            <p className="country">{props.player.country}</p>
            <p className="searches">Searches: <span>{props.player.searches}</span></p>
        </div>
    );
}