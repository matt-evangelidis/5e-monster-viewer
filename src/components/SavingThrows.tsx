import React from "react";
import { ISaves, IStats } from "../types/Creature";
import { calculateStat } from "../utils/calculateStat";
import { capitalize } from "../utils/capitalize";
import { iterator } from "../utils/iterator";

interface Props {
    proficiency: number;
    stats: IStats;
    saves: ISaves | undefined;
};

export const SavingThrows: React.FC<Props> = ({proficiency, stats, saves}) => {
    if (!saves) {
        return(<div></div>);
    }
    //const savesArr = [];
    console.log("Stats",stats);
    console.log("Saves",saves);
    const statsArr = iterator(stats);
    const savesArr = iterator(saves);
    console.log("Stats Array",statsArr);
    console.log("Saves Array",savesArr);

    const arr = [];

    for (let i = 0; i< statsArr.length; i++) {

        for (let j = 0; j< savesArr.length; j++) {
            if (statsArr[i].key === savesArr[j].key) {
                const newItem = {
                    key: capitalize(savesArr[j].key.substring(0,3)) ,
                    value: calculateStat(statsArr[i].value) + proficiency
                };
                arr.push(newItem);
            }
        }
    }

    const displaySaves = arr.map(item => {return <li key={item.key}>{item.key} +{item.value}</li>});

    return(
        <div>
            <p>Saving Throws</p>
            <ul>{displaySaves}</ul>
        </div>
    );
};