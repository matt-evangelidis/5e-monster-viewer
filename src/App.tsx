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
        climb: 30,
        hover: false
    },
    stats: { //accessible as 0-5
        strength: 30,//0
        dexterity: 18,//1
        constitution: 28,//2
        intelligence: 19,//3
        wisdom: 23,//4
        charisma: 26//5
    },
    savingThrows: {
        str: true,
        dex: true,
        con: true,
        wis: true
    },
    skills: {//18 total skills
        //str
        athletics: [1, true],
        //wis
        insight: [1, false],
        perception: [1, false],
        survival: [1, false],
        //cha
        intimidation: [1, false]
    },
    damageResistImmune: {//1 is resist, 2 is immune
        force: 2
    },
    conditionImmune: {
        frightened: true
    },
    senses:{
        blindsight: 60,
        darkvision: 120
        //passive
    },
    languages: ["Common", "Draconic"],
    challenge: 27,
    traits: [],
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
