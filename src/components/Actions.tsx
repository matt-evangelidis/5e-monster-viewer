import React from "react";
import { IAttack, IEffect } from "../types/Creature";
import { addPeriod } from "../utils/addPeriod";
import { sortAZ } from "../utils/sortAZ";
import { Attack } from "./Attack";
import { Effect } from "./Effect";

interface Props{
    attacks?: IAttack[] | undefined;
    effects?: IEffect[] | undefined;
    multiattack?: IEffect | undefined;
};

export const Actions: React.FC<Props> = ({attacks, effects, multiattack}) => {
    if (!attacks && !effects) {
        return null;
    }
    
    let displayAttacks;
    let displayEffects;
    let displayMultiattack;
    let displayActions;

    const attackList = (attacks: IAttack[]) => {
        return attacks.map(attack => {
            return <Attack attack={attack}/>
        });
    };

    const effectList = (effects: IEffect[]) => {
        return effects.map(effect => {
            return <Effect effect={effect}/>
        });
    };

    //if a creature's actions only contains attacks
    if (attacks && !effects) {
        attacks.sort( (a,b) => sortAZ(a.name, b.name));
        displayAttacks = attackList(attacks);
        //console.log("attacks",attacks);
    }
    //if a creature's actions only contains attacks
    else if(effects && !attacks) {
        effects.sort( (a,b) => sortAZ(a.name, b.name));
        effects.forEach(effect => {
            if (effect.subEffects) {
                effect.subEffects.sort( (a,b) => sortAZ(a.name, b.name));
            }
        });
        displayEffects = effectList(effects);
        //console.log("effects",effects);
    }

    //if a creature's actions has both attacks and effects
    const actionsMerge: Array<any> = [];

    if (attacks && effects) {
        attacks.forEach(attack => {
            const attackCopy = {
                value: attack,
                type: "attack"
            }
            actionsMerge.push(attackCopy)
        });
        effects.forEach(effect => {
            const effectCopy = {
                value: effect,
                type: "effect"
            }
            actionsMerge.push(effectCopy)
        });
        actionsMerge.sort( (a, b) => sortAZ(a.name, b.name));
        //console.log("displayMerge",actionsMerge)

        displayActions = actionsMerge.map(action => {
            //console.log("Display Actions mapping", action);
            const type = action.type;
            const value = action.value;

            //necessary to give each called Component a key
            if (type === "attack") {
                return <Attack key={value.name} attack={value}/>;
            }
            else {
                return <Effect key={value.name} effect={value}/>;
            }
        });
    }

    if (multiattack) {
        displayMultiattack = <li key={multiattack.name}>{addPeriod(multiattack.name)} {multiattack.desc}</li>;
    }
    
    return(
        <div>
            <p>Actions</p>
            {actionsMerge.length > 0 && 
                <ul>
                    {displayMultiattack}
                    {displayActions}
                </ul>
                }
            {actionsMerge.length < 1 && 
                <ul>
                    {displayMultiattack}
                    {displayAttacks}
                    {displayEffects}
                </ul>
            }
        </div>
    );
};