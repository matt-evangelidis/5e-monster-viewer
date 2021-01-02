import Creature from "../types/Creature";

export const dragon: Creature = {
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
      actions: {
          attacks:[
              {name:"Bite", 
              type: "Melee Weapon Attack", 
              toHit:"+18", 
              reach:"15", 
              target:"one target", 
              onHit:`36 (4d12 + 10) piercing damage and 28 (8d6) force
              damage. If the target is a creature, the dragon may grapple it
              (escape DC 26). Until this grapple ends, the dragon may not bite
              another target.`},
              
              {name:"Claw",
              type: "Melee Weapon Attack",
              toHit:"+18",
              reach:"10",
              target:"one target",
              onHit:`29 (3d12 + 10) slashing damage.`},
  
              {name:"Tail",
              type: "Melee Weapon Attack",
              toHit:"+18",
              reach:"15",
              target:"each target of the dragon's choice within range",
              onHit:`26 (3d10 + 10) bludgeoning
              damage. A creature hit by this attack must succeed on a DC 24
              Strength saving throw or be knocked prone.`},
          ],
          effects:[
              {name:"Breath Weapons (Recharge 5-6)", desc:`The dragon uses one of the following breath weapons:`,
              subEffects:[
                  {name:"Antimagic Bomb", desc:`The dragon spits a globule of antimagic
                  at a point within 60 feet which explodes in a 20-foot radius
                  centered on that point. Each spell or magical effect in the area is
                  dispelled as if affected by a dispel magic spell (+6 to dispel spells
                  of 7th level or higher).`},
                  {name:"Force Breath.", desc:`The dragon exhales a pure disintegrating force
                  in a 500-foot line that is 10 feet wide. Everything in that
                  line must succeed on a DC 24 Dexterity saving throw, taking
                  110 (20d10) force damage on a failure, or half as much on a
                  success. A creature reduced to 0 hit points by this damage is
                  disintegrated. Objects and structures in the area not being worn
                  or carried take double damage.`}
              ]
          },
              {name:"Dread Visage", desc:`Each creature of the dragon’s choice within 120
              feet of the dragon that are aware of it must succeed on a DC 24
              Wisdom saving throw or become frightened for 1 minute. While
              frightened in this way, a creature must take the Dash action and
              move away from the dragon by the safest available route on each of
              its turns. If a creature ends its turn in a location where it can’t see
              the dragon, it can attempt a DC 24 Wisdom saving throw, ending
              the effect on a success. If a creature’s saving throw is successful or
              the effect ends for it, the creature is immune to the dragon’s Dread
              Visage for 1 minute.`},
          ],
          multiattack: {name:"Multiattack", desc:`The dragon uses its Dread Visage. It then makes
          three attacks: one with its Bite or Tail, and two with its Claw.`}
      },
      legendary: true,
      legendaryActions: {
          desc:`The dragon can take 3 legendary actions, choosing from the
          options below. Only one legendary action option can be used at
          a time and only at the end of another creature’s turn. The dragon
          regains spent legendary actions at the start of its turn.`,
          actions: [
              {name: `Battlefield Supremacy`, desc: `Until the end of its next turn, when
              the dragon next scores a hit with a weapon attack, the hit deals
              double damage.`},
              {name: `Deep Breath`, desc: `The dragon recharges its Breath Weapons.`},
              {name: `Power Dive (Costs 2 Actions)`, desc: `The dragon flies up to its
              speed in a straight line and immediately makes a weapon attack
              at the end of that movement. On a successful hit, the attack deals
              an additional 3 (1d6) bludgeoning damage for every 20 feet the
              dragon moved via this feature.`},
              {name: `Tail Attack`, desc: `The dragon makes a Tail attack.`},
          ]
      },
      reactions: [
          {name: "Parry", desc:"something about parrying, I guess"}
      ]
  };