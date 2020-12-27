import React from "react";
import { sortAZ } from "../utils/sortAZ";

interface Props {
    languages: string[];
};

export const Languages: React.FC<Props> = ({languages}) => {
    if (languages.length < 1) {
        return <p>Languages —</p>;
    }

    languages.sort( (a, b) => sortAZ(a, b));

    const displayLanguages = languages.map(item => {return <li key={item}>{item}</li>})
    
    return(
        <div>
            <p>Languages</p>
            <ul>
                {displayLanguages}
            </ul>
        </div>
    );
};