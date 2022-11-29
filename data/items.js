import ItemOne from '../public/images/items/ItemOne.jpg';
import ItemTwo from '../public/images/items/ItemTwo.jpg';
import ItemThree from '../public/images/items/ItemThree.jpg';
import ItemFour from '../public/images/items/ItemFour.jpg';
import ItemFive from '../public/images/items/ItemFive.jpg';
import ItemSix from '../public/images/items/ItemSix.jpg';
import ItemSeven from '../public/images/items/ItemSeven.jpg';
import ItemEight from '../public/images/items/ItemEight.jpg';

export const items = [
  {
    id: '1',
    name: 'Trollbue',
    image: ItemOne,
    rarity: 'common',
    type: 'våpen',
    value: 40,
    location: 'Sølvhaneby',
    descriptionText: [
      'En magisk bue. Gjør dobbel skade mot troll.'
    ]
  },
  {
    id: '2',
    name: 'Alveøks',
    image: ItemTwo,
    rarity: 'common',
    type: 'weapon',
    value: 65,
    location: 'Sølvhaneby',
    descriptionText: [
      'En magisk øks. Gir alltid flaks når det skal hugges store trær.'
    ]
  },
  {
    id: '3',
    name: 'Måne-spilledåse',
    image: ItemThree,
    rarity: 'rare',
    type: 'gjenstand',
    value: 400,
    location: 'Vinterblom',
    descriptionText: [
      'En magisk spilledåse. Spiller en helbredene melodi som helbreder alle i nærheten, men bare når det er fullmåne.'
    ]
  },
  {
    id: '4',
    name: 'Kjærlighetssmykke',
    image: ItemFour,
    rarity: 'uncommon',
    type: 'gjenstand',
    value: 250,
    location: 'Vinterblom',
    descriptionText: [
      'Et magisk halskjede pyntet med en stor, hjerteformet rubin. Kan knuses for å gjøre en person i nærheten forelsket i deg i 1 time.'
    ]
  },
  {
    id: '5',
    name: 'Ulve-fløyte',
    image: ItemFive,
    rarity: 'rare',
    type: 'gjenstand',
    value: 300,
    location: 'Elvebris',
    descriptionText: [
      'En magisk fløyte. Blåser du på den vil en ulv komme løpende.'
    ]
  },
]