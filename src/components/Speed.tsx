import React from "react";
import {iterator} from "../utils/iterator";

interface Props{
    speeds: {
        base: number;
        climb?: number;
        fly?: number;
        swim?: number;
        burrow?: number;
        hover?: boolean;
    }
};

export const Speed: React.FC<Props> = ({speeds}) => {
    const ft = "ft.";

    //iterate through properties of speeds and construct a {key,value} array
    const arr = iterator(speeds);
    console.log(arr);

    //check for fly property
    const fly = arr.find(item => item.key === "fly");
    let hasHover = false;
    if (fly) {
        //find hover property
        let checkHover: number = arr.findIndex(item => item.key === "hover");
        //console.log("hover index", checkHover);
    
        //if checkHover is not undefined and not equal to -1,
        //remove hover from the properties array, and add the term to the fly property if value is true
        if (checkHover && checkHover !== -1) {
            const hover = arr.splice(checkHover, 1)[0]; //splice returns an array, so accessing index[0]
            hasHover = hover.value;
        }
    }
    
    arr.forEach(item => item.value = `${item.value}${ft}`);//add ft to each term
    if (hasHover && fly) {
        fly.value = `${fly.value} (hover)`;
    }

    const displaySpeeds = arr.map(item => {return <li key={item.key}>{item.key} {item.value}</li>});

    return(
        <div>
            <ul>
                {displaySpeeds}
            </ul>
        </div>
    );
};