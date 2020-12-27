import React from "react";
import { IDamageVulnResistImmune } from "../types/Creature";
import { iterator } from "../utils/iterator";

interface Props {
    damages: IDamageVulnResistImmune | undefined;
};

export const DamageVulnResistImmune: React.FC<Props> = ({damages}) => {
    if (!damages) {
        return null;
    }

    //fits damage interface to key-value array
    const damageArr = iterator(damages);

    //arrays for damage values
    const vulnArr: string[] = [];
    const resistArr: string[] = [];
    const immuneArr: string[] = [];

    //iterate through damageArr, adding items to appropriate arrays
    for (const item of damageArr) {
        console.log(item);
        //-1 is vuln, 0 is nothing, 1 is resist, 2 is immune
        if (item.value === 2) {
            immuneArr.push(item.key);
        }
        else if (item.value === 1) {
            resistArr.push(item.key);
        }
        else if (item.value === -1) {
            vulnArr.push(item.key);
        }
    }

    const displayFunc = (item: any) => {
        return <li key={item}>{item}</li>
    };

    const displayVuln = vulnArr.map(item => {return displayFunc(item)});
    const displayResist = resistArr.map(item => {return displayFunc(item)});
    const displayImmune = immuneArr.map(item => {return displayFunc(item)});

    return(
        <div>
            {vulnArr.length > 0 && <p>Damage Vulnerabilities</p>}
            <ul>
                {displayVuln}
            </ul>
            {resistArr.length > 0 && <p>Damage Resistances</p>}
            <ul>
                {displayResist}
            </ul>
            {immuneArr.length > 0 && <p>Damage Immunities</p>}
            <ul>
                {displayImmune}
            </ul>
        </div>
    );
};