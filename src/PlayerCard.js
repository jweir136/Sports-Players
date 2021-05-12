/*
    This is a card to hold all the player data.
    The data includes:
        The player's name,
        The player's position,
        The player's team
*/

import React from 'react';

export default function PlayerCard({playerName, playerTeam }) {
    return (
        <div>
            <div>
                <h3>{ playerName } <br/>
                <span>Team: { playerTeam }</span>
                </h3>
            </div>
        </div>
    );
}