const { drugs } = require('../models');

const drugData = [
  {
    id: 01,
    product_name: 'Xanax',
    generic_name: 'Alprazolam',
    price: 33.33,
    efficacy_rate: 'NNT of 9',
    class_schedule: 'Benzodiazepine, IV',
    ndc: 33.33,
    image: 'Xanax.jpg',
    chemical_image: 'Benzodiazepine_chem2.jpg',
    condition: "Anxiety, Panic Disorder",
    alt_drugs: "Byfavo, Lorazepam",
  },
  {
    id: 02,
    product_name: 'Byfavo',
    generic_name: 'Remimazolam',
    price: 12.67,
    efficacy_rate: 'NNT of 9',
    class_schedule: 'Benzodiazepine, IV',
    ndc: 33.33,
    image: 'Byfavo.jpg',
    chemical_image: 'Benzodiazepine_chem2.jpg',
    condition: "Anxiety, Sedation",
    alt_drugs: "Xanax",
  },
  {
    id: 03,
    product_name: 'Lorazepam',
    generic_name: 'Ativan',
    price: 21.57,
    efficacy_rate: 'NNT of 9',
    class_schedule: 'Benzodiazepine, IV',
    ndc: 33.33,
    image: 'Lorazepam.jpg',
    chemical_image: 'Benzodiazepine_chem2.jpg',
    condition: "Anxiety, Epilepsy",
    alt_drugs: "Xanax, ",
  },
  {
    id: 04,
    product_name: 'Klonopin',
    generic_name: 'Clonazepam',
    price: 19.44,
    efficacy_rate: 'NNT of 6',
    class_schedule: 'Benzodiazepine, IV',
    ndc: 33.33,
    image: 'Klonopin.jpg',
    chemical_image: 'Benzodiazepine_chem2.jpg',
    condition: "Panic Disorder, Seizures",
    alt_drugs: "Xanax, Lexapro",
  },
  {
    id: 05,
    product_name: 'Lexapro',
    generic_name: 'Escitalopram',
    price: 56.38,
    efficacy_rate: 'NNT of 11.9',
    class_schedule: 'Selective Serotonin Reuptake Inhibitors (SSRIs), Not a controlled medication',
    ndc: 33.33,
    image: 'Lexapro.jpg',
    chemical_image: 'SSRIChem.jpg',
    condition: "Depression, Anxiety",
    alt_drugs: "Klonopin, Zoloft, Prozac",
  },
  {
    id: 06,
    product_name: 'Zoloft',
    generic_name: 'sertraline',
    price: 38.08,
    efficacy_rate: 'NNT of 12',
    class_schedule: 'Selective Serotonin Reuptake Inhibitors (SSRIs), Not a controlled medication',
    ndc: 33.33,
    image: 'Zoloft.jpg',
    chemical_image: 'SSRIChem.jpg',
    condition: 'Anxiety, Depression',
    alt_drugs: 'Prozac, Lexapro',
  },
  {
    id: 07,
    product_name: 'Prozac',
    generic_name: 'fluoxetine',
    price: 26.71,
    efficacy_rate: 'NNT of 12',
    class_schedule: 'Selective Serotonin Reuptake Inhibitors (SSRIs), Not a controlled medication',
    ndc: 33.33,
    image: 'Prozac.jpg',
    chemical_image: 'SSRIChem.jpg',
    condition: 'Depression, Panic Disorder',
    alt_drugs: 'Zoloft, Lexapro',
  },
];

const seedProducts = () => Product.bulkCreate(drugData);

module.exports = seedProducts;


const seedPosts = () => Post.bulkCreate(drugData);

module.exports = seedPosts;