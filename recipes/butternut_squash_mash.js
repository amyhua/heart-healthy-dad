const title = 'Butternut squash mash';

const ingredients = {
  "butternut squash": {
    "unit": "cup",
    "quantity": 3
  },
  "carrot": {
    "unit": "cup",
    "quantity": 1,
    "descriptor": "chopped"
  },
  "green apple": {
    "unit": "piece",
    "quantity": 1,
    "descriptor": "chopped"
  },
  "extra virgin olive oil": {},
  "salt": {},
  "ground black pepper": {},
  "unsweetened almond milk": {
    "unit": "cup",
    "quantity": 0.5,
  },
};

const notes = [
  'This recipe is for 4 servings, for 4 total meals.',
]

const steps = [
  'Preheat the oven to 375°F.',
  'Cut the butternut squash into cubes. Chop the carrots and apple. Combine these all into a large bowl. Mix with 3 tablespoons of extra virgin olive oil, 1/2 teaspoon of salt, and 1/4 teaspoon of ground black pepper. Shake and mix the bowl well.',
  'Put the vegetables on a baking sheet. Bake for 20 to 30 minutes.',
  'Take out the vegetables and put them in a food processor. Add 1/2 cup of unsweetened almond milk. Blend until smooth.',
];

// per serving
export const calories = 170,
  fatGrams = 11,
  carbsGrams = 20,
  sugarGrams = 7,
  fiberGrams = 4,
  proteinGrams = 2,
  sodiumMg = 630;

export default {
  ingredients,
  steps,
  notes,
  title,
  calories,
  fatGrams,
  carbsGrams,
  sugarGrams,
  fiberGrams,
  proteinGrams,
  sodiumMg,
}
