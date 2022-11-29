import NPCOne from '../public/images/npc/NPCOne.jpg';
import NPCTwo from '../public/images/npc/NPCTwo.jpg';
import NPCThree from '../public/images/npc/NPCThree.jpg';
import NPCFour from '../public/images/npc/NPCFour.jpg';

export const npcs = [
  {
    id: '1',
    name: 'Merrik Tofot',
    image: NPCOne,
    alignment: 'vennlig',
    lifeTotal: 5,
    location: 'merriks-magiske-butikk',
    descriptionText: [
      'Beskrivelse av Merrik her.',
    ]
  },
  {
    id: '2',
    name: 'Emrik Rødøye',
    image: NPCTwo,
    alignment: 'vennlig',
    lifeTotal: 5,
    location: 'sølvhaneby',
    descriptionText: [
      'Beskrivelse av Emrik her.',
    ]
  },
  {
    id: '3',
    name: 'Kosef Høyhjort',
    image: NPCThree,
    alignment: 'vennlig',
    lifeTotal: 10,
    location: 'sølvhaneby',
    descriptionText: [
      'Beskrivelse av Kosef her.',
    ]
  },
  {
    id: '4',
    name: 'Alva Sølvhjerte',
    image: NPCFour,
    alignment: 'fiende',
    lifeTotal: 10,
    location: 'elvebris',
    descriptionText: [
      'Beskrivelse av Kosef her.',
    ]
  },
]