import React from "react";
import { ITrait } from "../types/Creature";
import { addPeriod } from "../utils/addPeriod";
import { sortAZ } from "../utils/sortAZ";

interface Props {
    traits: ITrait[] | undefined;
};

export const Traits: React.FC<Props> = ({traits}) => {
    if (!traits) {
        return null
    }

    traits.sort( (a,b) => sortAZ(a.name, b.name))

    const displayTraits = traits.map(item => {
        return <li key={item.name}>{addPeriod(item.name)} {item.desc}</li>
    })

    return(
        <div>
            <p>Traits</p>
            <ul>{displayTraits}</ul>
        </div>
    );
};