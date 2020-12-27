import React from "react";
import { ITrait } from "../types/Creature";
import { sortAZ } from "../utils/sortAZ";

interface Props {
    traits: ITrait[] | undefined;
};

export const Traits: React.FC<Props> = ({traits}) => {
    if (!traits) {
        return null
    }

    traits.sort( (a,b) => sortAZ(a.name, b.name))

    const displayTraits = traits.map(item => {return <li key={item.name}>{item.name} {item.desc}</li>})

    return(
        <div>
            <ul>{displayTraits}</ul>
        </div>
    );
};