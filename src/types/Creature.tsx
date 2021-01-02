class Creature {
    name!: string;
    size!: string;
    type!: string;
    alignment!: string;
    proficiency!: number;
    hitPoints!: {
        value: number;
        formula: string;
    }
    armorClass!: {
        value: number;
        from: string;
    }
    speeds!: ISpeeds;
    stats!: IStats;
    saves?: ISaves;
    skills?: ISkills;

    damageVulnResistImmune?: IDamageVulnResistImmune;
    conditionImmunes?: string[];
    senses?: ISense[];

    languages!: string[];
    challenge!: number;
    traits?: ITrait[];
    actions?: {
        attacks?: IAttack[];
        effects?: IEffect[];
        multiattack?: IEffect;
    };
    reactions?: IEffect[];
    legendary?: boolean;
    legendaryActions?: IEffect[];
    mythic?: boolean;

};

export interface ITrait {
    name: string;
    desc: string;
};

export interface IEffect {
    name: string;
    desc: string;
    subEffects?: IEffect[];
};

export interface IAttack {
    name: string;
    type: string;
    toHit: string;
    reach: string;
    target: string;
    onHit: string;
};

export interface ISpeeds {
    base: number;
    climb?: number;
    fly?: number;
    swim?: number;
    burrow?: number;
    hover?: boolean;
};

export interface IStats {
    strength: number;//0
    dexterity: number;//1
    constitution: number;//2
    intelligence: number;//3/
    wisdom: number;//4
    charisma: number;//5
};

export interface ISaves {
    strength?: boolean;
    dexterity?: boolean;
    constitution?: boolean;
    intelligence?: boolean;
    wisdom?: boolean;
    charisma?: boolean;
}

export interface ISkills {
    strength?: ISkill[];
    dexterity?: ISkill[];
    constitution?: ISkill[];
    intelligence?: ISkill[];
    wisdom?: ISkill[];
    charisma?: ISkill[];
}

interface ISkill {
    key: string;
    prof: number;
}

export interface IDamageVulnResistImmune {//-1 is vuln, 0 is nothing, 1 is resist, 2 is immune
    acid?: number;
    bludgeoning?: number;
    cold?: number;
    fire?: number;
    force?: number;
    lightning?: number;
    necrotic?: number;
    piercing?: number;
    poison?: number;
    psychic?: number;
    radiant?: number;
    slashing?: number;
    thunder?: number;
}

export interface ISense {
    key: string;
    value: number;
};

export default Creature;