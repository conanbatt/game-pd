export default function handler({ query: { id } }, res) {
  return res.status(200).json({
    name: '',
    description: 'Some card',
    attributes: [
      deserialize(RARITY, id.substr(0, 1), 'rarity'),
      deserialize(ZODIACS, id.substr(1, 3), 'zodiacs'),
      deserialize(ROLE, id.substr(3, 4), 'role'),
      deserialize(COLOR, id.substr(4, 5), 'color'),
    ]
  })
}

const ZODIACS = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
const RARITY = ['Bronze', 'Silver', 'Gold', 'Plantinum', 'Diamond'];
const ROLE = ['Knight', 'Priest', 'Jester', 'King', 'Queen', 'Alchemist', 'Bard']
const COLOR = ['Red', 'Blue', 'Orange', 'White', 'Green', 'Brown', 'Violet', 'Indigo', 'Yellow', 'Pink']

function deserialize(set, value, name) {
  return {
    trait_type: name,
    value: set[value % set.length]
  }
}