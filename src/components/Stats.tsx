import React from "react";

interface Props {
    stats: {
        strength: number;
        dexterity: number;
        constitution: number;
        intelligence: number;
        wisdom: number;
        charisma: number;
    }
};

export const Stats : React.FC<Props> = ({stats}) => {
    
    const calculateStat = (stat: number) => {
        return Math.floor((stat - 10) / 2);
    };

    const statDisplay = (name: string, stat: number) => {
        let symbol = "";
        if (stat > 0) {
            symbol = "+";
        }
        return <h3>{name} {stat} ({symbol}{calculateStat(stat)})</h3>
    };

    return(
        <div>
            {statDisplay("STR", stats.strength)}
            {statDisplay("DEX", stats.dexterity)}
            {statDisplay("CON", stats.constitution)}
            {statDisplay("INT", stats.intelligence)}
            {statDisplay("WIS", stats.wisdom)}
            {statDisplay("CHA", stats.charisma)}
        </div>
    );
};