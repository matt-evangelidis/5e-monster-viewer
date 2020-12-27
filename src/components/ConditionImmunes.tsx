import React from "react";
import { sortAZ } from "../utils/sortAZ";

interface Props {
    conditions: string[] | undefined;
};

export const ConditionImmunes: React.FC<Props> = ({conditions}) => {

    if (!conditions) {
        return null;
    }

    conditions.sort((a, b) => sortAZ(a,b))
    console.log("conditions",conditions)
    

    const displayConditions = conditions.map(item => {return <li key={item}>{item}</li>})

    return(
        <div>
            <p>Condition Immunities</p>
            {displayConditions}
        </div>
    );
};