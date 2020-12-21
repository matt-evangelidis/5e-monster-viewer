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
    speeds!: {
        base: number;
        climb?: number;
        fly?: number;
        swim?: number;
        burrow?: number;
        hover?: boolean;
    }
    
    stats!: { //accessible as 0-5
        strength: number;//0
        dexterity: number;//1
        constitution: number;//2
        intelligence: number;//3/
        wisdom: number;//4
        charisma: number;//5
    }
    savingThrows?: {
        str?: boolean;
        dex?: boolean;
        con?: boolean;
        int?: boolean;
        wis?: boolean;
        cha?: boolean;
    }
    skills?: {//18 total skills
        //str
        athletics?: [number, boolean];
        //dex
        acrobatics?: [number, boolean];
        sleightOfHand?: [number, boolean];
        stealth?: [number, boolean];
        //int
        arcana?: [number, boolean];
        history?: [number, boolean];
        investigation?: [number, boolean];
        nature?: [number, boolean];
        religion?: [number, boolean];
        //wis
        animalHandling?: [number, boolean];
        insight?: [number, boolean];
        medicine?: [number, boolean];
        perception?: [number, boolean];
        survival?: [number, boolean];
        //cha
        deception?: [number, boolean];
        intimidation?: [number, boolean];
        performance?: [number, boolean];
        persuasion?: [number, boolean];
    }
    damageResistImmune?: {//1 is resist, 2 is immune
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
    damageVulnerable?: {
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
    conditionImmune?: {
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
    senses!:{
        blindsight?: number;
        darkvision?: number;
        tremorsense?: number;
        truesight?: number;
        //passive
    }
    languages!: string[];
    challenge!: number;
    traits!: entry[];
    actions!: entry[];
    legendary!: boolean;
    legendaryActions?: entry[];

    //functions
    
    // public get speed() : Array<any> {
    //     let array = [];
    //     for (let element in this.speeds) {
    //         array.push(element)
    //     }
    //     return array;
    // }
    
};

interface entry {
    name: string;
    desc: string;
};

interface ICreature extends Creature{};

type CreaturePropsArray = Array<keyof ICreature>;

const propsArray: CreaturePropsArray = 
    Object.keys(new Creature()) as CreaturePropsArray;
console.log(propsArray);

export default Creature;