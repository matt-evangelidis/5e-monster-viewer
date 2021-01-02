import React from "react";
import { IEffect } from "../types/Creature";
import { addPeriod } from "../utils/addPeriod";

interface Props {
    effect: IEffect;

};

export const Effect: React.FC<Props> = ({effect}) => {  
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
    return(<li key={effect.name}>{addPeriod(effect.name)} {effect.desc}</li>);
};