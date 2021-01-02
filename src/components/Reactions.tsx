import React from "react";
import { IEffect } from "../types/Creature";
import { sortAZ } from "../utils/sortAZ";
import { Effect } from "./Effect";

interface Props {
    reactions: IEffect[] | undefined;
};

export const Reactions: React.FC<Props> = ({reactions}) => {
    
    if (!reactions) {
        return null;
    }

    reactions.sort( (a, b) => sortAZ(a.name, b.name));

    const displayReactions = reactions.map( reaction => {
        if (reaction.subEffects) {
            reaction.subEffects.sort((a,b) => sortAZ(a.name,b.name))
            return <Effect key={reaction.name} effect={reaction}/>
        }
        return(
            <Effect key={reaction.name} effect={reaction}/>
        );
    });


    return(
        <div>
            <p>Reactions</p>
            {displayReactions}
        </div>
    );
};