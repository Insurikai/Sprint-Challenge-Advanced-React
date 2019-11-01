import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import Player from './Player';
/*
    prop is saved to state,
    onClick calls prop function,
    name displayed and saved in state match,
    contry displayed and state match
*/
describe("<Player />", ()=>{
    it("saves props to state", ()=>{
        const expectation = {
            player: {
                "name":"Alex Morgan",
                "country":"United States",
                "searches":100,
                "id":0
            }
        };
        const myPlayer = new Player({
            player: {
                "name":"Alex Morgan",
                "country":"United States",
                "searches":100,
                "id":0
            }
        });
        const result = myPlayer.props;
        expect(result).toEqual(expectation);
    });
    it("displays name state correctly", ()=>{
        const expectation = "Alex Morgan";
        const myPlayer = rtl.render(<Player player={{
            "name":"Alex Morgan",
            "country":"United States",
            "searches":100,
            "id":0
        }} saveToLocal={()=>{}}/>)
        const result = myPlayer.queryByText(expectation);
        expect(result).toBeTruthy();
    });
    it("displays country state correctly", ()=>{
        const expectation = "United States";
        const myPlayer = rtl.render(<Player player={{
            "name":"Alex Morgan",
            "country":"United States",
            "searches":100,
            "id":0
        }} saveToLocal={()=>{}}/>)
        const result = myPlayer.queryByText(expectation);
        expect(result).toBeTruthy();
    });
})