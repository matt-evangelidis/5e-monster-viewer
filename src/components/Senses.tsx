import React from "react";
import { ISense, ISkills, IStats } from "../types/Creature";
import { calculateStat } from "../utils/calculateStat";
import { sortAZ } from "../utils/sortAZ";

interface Props {
    senses: ISense[]| undefined;
    skills: ISkills | undefined;
    stats: IStats;
    proficiency: number;
};

export const Senses: React.FC<Props> = ({senses, skills, stats, proficiency}) => {
    
    if (!senses) {
        return null;
    }

    senses.sort((a, b) => sortAZ(a.key, b.key));
    console.log("senses",senses);

    const passive = skills?.wisdom?.find(skill => skill.key === "perception");
    let value = 10 + calculateStat(stats.wisdom);
    console.log(passive);
    if (passive) {
        value += proficiency * passive.prof;
    }
    console.log(value);

    const displaySenses = senses.map(item => {return <li key={item.key}>{item.key} {item.value} ft.</li>});

    return(
        <div>
            <p>Senses</p>
            <ul>
                {displaySenses}
                <li key={passive?.key}>passive Perception {value}</li>
            </ul>
        </div>
    );
};