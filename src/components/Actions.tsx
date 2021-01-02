import React from "react";
import { IAttack, IEffect } from "../types/Creature";
import { addPeriod } from "../utils/addPeriod";
import { sortAZ } from "../utils/sortAZ";

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

    const attackElementDisplay = (attack: IAttack) => {
        return (
            <li key={attack.name}>
                {addPeriod(attack.name)} {attack.type}: {attack.toHit}, reach {attack.reach} ft., {attack.target}. Hit: {attack.onHit}
            </li>);
    };
    const attackListItems = (attacks: IAttack[]) => {
        return attacks.map(attack => attackElementDisplay(attack));
    };

    const effectElementDisplay = (effect: IEffect) => {
        if (effect.subEffects) {
            return(
                <li key={effect.name}> 
                    {addPeriod(effect.name)} {effect.desc}
                    <ul key={`${effect.name} subEffects`}>
                        {effect.subEffects.map(subEffect => {
                            return(<li key={subEffect.name}>{addPeriod(subEffect.name)} {subEffect.desc}</li>);
                        })}
                    </ul>
                </li>
            );
        }
        return(<li key={effect.name}>{effect.name} {effect.desc}</li>);
    };

    const effectListItems = (effects: IEffect[]) => {
        return effects.map(effect => {
            if (effect.subEffects) {
                return(
                    <ul key={effect.name}>
                        {effect.name} {effect.desc}
                        {effect.subEffects.map(subEffect => {
                            return(<li key={subEffect.name}>{subEffect.name} {subEffect.desc}</li>);
                        })}
                    </ul>
                );
            }
            return(<li key={effect.name}>{effect.name} {effect.desc}</li>)
        });
    };

    //if a creature's actions only contains attacks
    if (attacks && !effects) {
        attacks.sort( (a,b) => sortAZ(a.name, b.name));
        //attacks.forEach( attack => attack.name = addPeriod(attack.name));
        displayAttacks = attackListItems(attacks);
        console.log("attacks",attacks);
    }
    //if a creature's actions only contains attacks
    else if(effects && !attacks) {
        effects.sort( (a,b) => sortAZ(a.name, b.name));
        effects.forEach(effect => {
            //effect.name = addPeriod(effect.name);
            if (effect.subEffects) {
                //effect.subEffects.forEach( subeffect => subeffect.name = addPeriod(subeffect.name))
                effect.subEffects.sort( (a,b) => sortAZ(a.name, b.name));
            }
        });
        displayEffects = effectListItems(effects);
        console.log("effects",effects);
    }

    //if a creature's actions has both attacks and effects
    const actionsMerge: Array<any> = [];
    let displayActions;
    if (attacks && effects) {
        attacks.forEach(attack => {
            //attack.name = addPeriod(attack.name);
            const attackCopy = {
                value: attack,
                type: "attack"
            }
            actionsMerge.push(attackCopy)
        });
        effects.forEach(effect => {
            // effect.name = addPeriod(effect.name);
            // if (effect.subEffects) {
            //     effect.subEffects.forEach( subeffect => subeffect.name = addPeriod(subeffect.name))
            // }
            const effectCopy = {
                value: effect,
                type: "effect"
            }
            actionsMerge.push(effectCopy)
        });
        actionsMerge.sort( (a, b) => sortAZ(a.name, b.name));
        console.log("displayMerge",actionsMerge)

        displayActions = actionsMerge.map(action => {
            console.log("Display Actions mapping", action);
            const type = action.type;
            const value = action.value;
            if (type === "attack") {
                return attackElementDisplay(value);
            }
            else if (type === "effect") {
                return effectElementDisplay(value);
                //console.log("Effect", action.value)
            }
        });
    }

    if (multiattack) {
        // multiattack.name = addPeriod(multiattack.name);
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