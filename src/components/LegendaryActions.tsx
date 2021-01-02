import React from "react";
import { IEffect } from "../types/Creature";
import { Effect } from "./Effect";

interface Props {
    desc: string;
    actions: IEffect[];
};

export const LegendaryActions: React.FC<Props> = ({desc, actions}) => {
    
    const displayLegendaryActions = actions.map( action => {
        return <Effect key={action.name} effect={action}/>
    }); 
    
    return(
        <div>
            <p>{desc}</p>
            <ul>
                {displayLegendaryActions}
            </ul>
        </div>
    );
};