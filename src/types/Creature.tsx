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
    skills!: ISkills;

    damageResistImmune?: IDamageResistImmune;
    damageVulnerable?: IDamageVulnerable;
    conditionImmune?: IConditionImmune;
    senses!: ISenses;

    languages!: string[];
    challenge!: number;
    traits!: entry[];
    actions!: entry[];
    legendary?: boolean;
    mythic?: boolean;
    legendaryActions?: entry[];

};

interface entry {
    name: string;
    desc: string;
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
    //18 total skills, 0 is none, 1 is proficient, 2 is expertise
    //str
    athletics?: number;
    //dex
    acrobatics?: number;
    sleightOfHand?: number;
    stealth?: number;
    //int
    arcana?: number;
    history?: number;
    investigation?: number;
    nature?: number;
    religion?: number;
    //wis
    animalHandling?: number;
    insight?: number;
    medicine?: number;
    perception?: number;
    survival?: number;
    //cha
    deception?: number;
    intimidation?: number;
    performance?: number;
    persuasion?: number;
}

export interface IDamageResistImmune {//1 is resist, 2 is immune
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

export interface IDamageVulnerable {
    acid?: boolean;
    bludgeoning?: boolean;
    cold?: boolean;
    fire?: boolean;
    force?: boolean;
    lightning?: boolean;
    necrotic?: boolean;
    piercing?: boolean;
    poison?: boolean;
    psychic?: boolean;
    radiant?: boolean;
    slashing?: boolean;
    thunder?: boolean;
}

export interface IConditionImmune {
    blinded?: boolean;
    charmed?: boolean;
    deafened?: boolean;
    exhaustion?: boolean;
    frightened?: boolean;
    grappled?: boolean;
    incapacitated?: boolean;
    invisible?: boolean;
    paralyzed?: boolean;
    petrified?: boolean;
    poisoned?: boolean;
    prone?: boolean;
    restrained?: boolean;
    stunned?: boolean;
    unconscious?: boolean;
}

export interface ISenses {
    blindsight?: number;
    darkvision?: number;
    tremorsense?: number;
    truesight?: number;
    //passive
}

export default Creature;