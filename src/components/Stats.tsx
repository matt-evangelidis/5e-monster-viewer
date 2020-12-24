import React from "react";
import { IStats } from "../types/Creature";
import { calculateStat } from "../utils/calculateStat";

interface Props {
    stats: IStats;
};

export const Stats : React.FC<Props> = ({stats}) => {

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