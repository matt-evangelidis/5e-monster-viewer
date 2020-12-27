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

interface Props {
    creature: Creature;
};

const Monster: React.FC<Props> = ({ creature }) => {

    return(
        <div>
            <h1>{creature.name}</h1>
            <h2>{creature.size} {creature.type}, {creature.alignment}</h2>
            <h2>Armor Class {creature.armorClass.value} ({creature.armorClass.from})</h2>
            <h2>Hit Points {creature.hitPoints.value} {creature.hitPoints.formula}</h2>

            <Speed speeds={creature.speeds}/>
            <Stats stats={creature.stats}/>
            <SavingThrows saves={creature.saves}stats={creature.stats} proficiency ={creature.proficiency}/>
            <Skills skills={creature.skills} stats={creature.stats} proficiency={creature.proficiency}/>
            <DamageVulnResistImmune damages={creature.damageVulnResistImmune}/>
            <ConditionImmunes conditions={creature.conditionImmunes}/>
            <Senses senses={creature.senses} stats={creature.stats} skills={creature.skills} proficiency={creature.proficiency}/>
            {/* Languages */}
            {/* Challenge */}
            {/* Traits */}
            {/* Actions */}
            {/* Legendary Actions */}
            
        </div>
    );
};

export default Monster;