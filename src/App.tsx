import React from 'react';
import './App.css';
import Monster from './components/Monster';
import Creature from './types/Creature';

const dragon: Creature = {
  name: "Ancient Imperial Dragon",
    size: "Gargantuan",
    type: "dragon",
    alignment: "any lawful alignment",
    proficiency: 8,
    hitPoints: {
        value: 546,
        formula: "(28d20 + 252)",
    },
    armorClass: {
        value: 25,
        from: "natural armor"
    },
    speeds: {
        base: 60,
        fly: 120,
        climb: 30
    },
    stats: { //accessible as 0-5
        strength: 30,//0
        dexterity: 18,//1
        constitution: 28,//2
        intelligence: 19,//3
        wisdom: 23,//4
        charisma: 26,//5
        
    },
    saves:{
        strength: true,
        dexterity: true,
        constitution: true,
        wisdom: true
    },
    skills: {
        //str
        strength: [{key: "athletics", prof: 2}],
        //wis
        wisdom: [
            {key: "insight", prof: 1},
            {key: "perception", prof: 1},
            {key: "survival", prof: 1}
        ],
        //cha
        charisma: [{key: "intimidation", prof: 1}]
    },
    damageVulnResistImmune: {//1 is resist, 2 is immune
        force: 2
    },
    conditionImmunes: ["frightened","charmed","prone"],
    senses:[
        {key:"darkvision", value: 120},
        {key:"blindsight", value: 60},
    ],
    languages: ["Common", "Draconic"],
    challenge: 27,
    traits: [
        {name:"Deathproof." , desc: `If an effect would kill the dragon, it may instead
        lose half its current hit points (rounded down) to survive instead.
        The dragon cannot use this feature if it has fewer than 50 hit
        points.`},
        {name:"Heavy Armor.", desc: `The dragon reduces damage it takes from
        weapon attacks by 15.`},
        {name:"Immense.", desc: `The dragon’s form is tremendous. It is 60 feet long
        from snout to tail and has a wingspan of more than 80 feet. On
        the battlefield, the dragon typically occupies a 25-foot-by-25-foot
        space. The dragon can end its movement in a Huge or smaller
        creature’s space and does not treat such spaces as difficult terrain
        when moving through them.`},
        {name:"Improved Critical", desc: `The dragon’s weapon attacks score a critical
        hit on a 17–20.`},
        {name:"Legendary Supremacy (5/Day).", desc: `If the dragon fails a saving
        throw or ability check, it can choose to succeed instead.`},
        {name:"Spell Resistance", desc: `The dragon takes half damage from spells.`},
    ],
    actions: [],
    legendary: true,
    legendaryActions: []
};

function App() {
  return (
    <div className="App">
      <h1>To paraphrase Anakin Skywalker, this is where the app begins</h1>
      <Monster creature={dragon}/>
    </div>
  );
}

export default App;
