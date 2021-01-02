import {Stats} from "./Stats";
import React from "react";
import Creature from "../types/Creature";
import { iterator } from "../utils/iterator";
import { Speed } from "./Speed";
import { SavingThrows } from "./SavingThrows";
import { Skills } from "./Skills";
import { DamageVulnResistImmune } from "./DamageVulnResistImmune";
import { ConditionImmunes } from "./ConditionImmunes";
import { Senses } from "./Senses";
import { Languages } from "./Languages";
import { Traits } from "./Traits";
import { Actions } from "./Actions";
import { Reactions } from "./Reactions";
import { LegendaryActions } from "./LegendaryActions";

const Monster: React.FC<Creature> = ({ 
    name,
    size,
    type,
    alignment,
    proficiency,
    hitPoints,
    armorClass,
    speeds,
    stats,
    saves,
    skills,

    damageVulnResistImmune,
    conditionImmunes,
    senses,

    languages,
    challenge,
    traits,
    actions,
    reactions,
    legendary,
    legendaryActions,
    mythic
}) => {

    return(
        <div>
            <h1>{name}</h1>
            <h2>{size} {type}, {alignment}</h2>
            <h2>Armor Class {armorClass.value} ({armorClass.from})</h2>
            <h2>Hit Points {hitPoints.value} {hitPoints.formula}</h2>

            <Speed speeds={speeds}/>
            <Stats stats={stats}/>
            <SavingThrows saves={saves}stats={stats} proficiency ={proficiency}/>
            <Skills skills={skills} stats={stats} proficiency={proficiency}/>
            <DamageVulnResistImmune damages={damageVulnResistImmune}/>
            <ConditionImmunes conditions={conditionImmunes}/>
            <Senses senses={senses} stats={stats} skills={skills} proficiency={proficiency}/>
            <Languages languages={languages}/>
            <p>Challenge {challenge}</p>
            <Traits traits={traits}/>
            <Actions attacks={actions?.attacks} effects={actions?.effects} multiattack={actions?.multiattack}/>
            <Reactions reactions={reactions}/>
            {legendaryActions && <LegendaryActions desc={legendaryActions.desc} actions={legendaryActions.actions}/>}
            
        </div>
    );
};

export default Monster;