import React from 'react';
import { ISkills, IStats } from '../types/Creature';
import { calculateStat } from '../utils/calculateStat';
import { capitalize } from '../utils/capitalize';
import { getPlusMinus } from '../utils/getPlusMinus';
import { iterator } from '../utils/iterator';
import { objectToMap } from '../utils/objectToMap';

interface Props {
    stats: IStats;
    skills: ISkills | undefined;
    proficiency: number;
};

export const Skills: React.FC<Props> = ({stats, skills, proficiency}) => {
    if (!skills) {
        return null;
    }
    const statsMap = objectToMap(stats);//map of stats used to fetch
    const skillsArr = iterator(skills);//key(stat)-value(skills array) array for skills

    const arr = [];

    //iterate through each stat section of the key-value array
    for (const stat of skillsArr) {
        //iterate through the actual skills in each stat's sub-array
        for (const skill of stat.value) {
            //match the stat in the key-value array to the stat in the map
            if (statsMap.has(stat.key)) {
                //calculate the value for display
                const value = calculateStat(statsMap.get(stat.key)) + (proficiency * skill.prof)
                skill["value"] =  value;
                arr.push(skill);
            }
        }
    }
    console.log(arr);

    const displaySkills = arr.map(item => {
        return( 
        <li key={item.key}>
             {capitalize(item.key)} {getPlusMinus(item.value)}{item.value}
        </li>)
    });
    
    return(
        <div>
            <p>Skills</p>
            {displaySkills}
        </div>
    );
};