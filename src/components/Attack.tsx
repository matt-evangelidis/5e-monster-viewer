import React from "react";
import { IAttack } from "../types/Creature";
import { addPeriod } from "../utils/addPeriod";

interface Props {
    attack: IAttack;
};

export const Attack: React.FC<Props> = ({attack}) => {
    return (
        <li key={attack.name}>
            {addPeriod(attack.name)} {attack.type}: {attack.toHit}, reach {attack.reach} ft., {attack.target}. Hit: {attack.onHit}
        </li>);
};