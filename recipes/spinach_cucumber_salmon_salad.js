const title = 'Spinach cucumber salmon salad';

const ingredients = {
  "spinach": {
    "unit": "cup",
    "quantity": 3
  },
  "cucumber": {
    "unit": "piece",
    "quantity": 0.5,
  },
  "fennel bulb": {
    "unit": "piece",
    "quantity": 1,
  },
  "salmon fillet": {
    "unit": "piece",
    "quantity": 2,
    "descriptor": "leftover baked salmon or fresh salmon"
  },
  "avocado": {
    "unit": "piece",
    "quantity": 1,
  },
  "extra virgin olive oil": {
    "unit": "cup",
    "quantity": 0.25
  },
  "lemon juice": {
    "unit": "tablespoon",
    "quantity": 2,
  },
  "salt": {
    "unit": "teaspoon",
    "quantity": 0.5
  },
  "ground black pepper": {
    "unit": "teaspoon",
    "quantity": 0.25
  },
  "dill": {
    "unit": "teaspoon",
    "quantity": 1,
  }
};

const notes = [
  'This recipe is for two servings, for two people.',
]

const steps = [
  'Wash the spinach and cucumber. Peel the cucumber and slice it thinly. Slice the fennel bulb thinly. Peel and slice the avocado.',
  'In two big bowls, put spinach in them. Then, add cucumber, avocado, and fennel.',
  {
    step: 'Take out two leftover baked salmons, or bake the 2 salmon fillets like this:',
    steps: [
      'Preheat the oven to 375°F.',
      'Place the salmon fillets on tin foil. Add olive oil, a little bit of salt, and pepper, and lemon oil to the top of the salmon.',
      'Bake for 10 to 15 minutes, or until the salmon is cooked through.',
    ]  
  },
  'Break the salmon into pieces and add them to the salad bowls.',
  {
    step: 'Make the dressing:',
    steps: [
      'In a small bowl, add the olive oil, lemon juice, a little bit of salt, pepper, and dill. Mix well.',
    ]
  },
  'Pour the dressing over the salad bowls.',
];

export const calories = 590,
  fatGrams = 48,
  carbsGrams = 20,
  sugarGrams = 6,
  fiberGrams = 10,
  proteinGrams = 23,
  sodiumMg = 2560;

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
