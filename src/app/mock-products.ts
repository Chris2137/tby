import { Product } from './product';

export const PRODUCTS: Product[] = [
  { id: '11',
  name: 'Sashimi - Tuna' ,
  minPrice: 1,
  maxPrice: 99,
  currency: 'USD',
  minQty : 15,
  minQtyUnit : 'piece',
  leadTime : 3,
  leadTimeUnit : 'days',
  countryOfOrigin: 'Austria',
  description: 'Sashimi Tuna is good',
  createdDateStr: '1583026225000',
  modifiedDateStr: '1583395957000',
  visibility: 'G',
  price: 76.68,
  color: ['Red','Green'],
  size: ['S','M', 'L'],
  material: ['raw fish'],
  sellingPoint: 'eco-friendly',
  category: ['Food & Beverage'],
  innerCarton : {
    dimensionUnit : 'cm',
    length : 1,
    width :2,
    height : 3,
    volume : 6,
    weight : 10,
    weightUnit : 'kg',
    quantity : 15,
    quantityUnit : 'piece'
  },
  masterCarton : {
    dimensionUnit : 'cm',
    length : 3,
    width :4,
    height : 5,
    volume : 60,
    weight : 12,
    weightUnit : 'kg',
    quantity : 1,
    quantityUnit : 'set'
  },
  photo: [ {id : 'photo1', name : 'model - goku.png', size : 9991024, thumbnail : 'https://tbytest.blob.core.windows.net/csqa/5e610dd3bdd872df5b9d3eff?sp=r&st=2020-03-04T14:33:55Z&se=2020-06-05T14:33:55Z&spr=https&sv=2018-11-09&sig=lbuhd%2B57n97pjYO%2Bq%2BW9abA26NOTh1oFgBf6fdloED4%3D&srt=o&ss=b'}],
  supportingDoc: [ {id : 'doc1', name : 'br.doc', size : 1102, thumbnail : ''}],
  picUrl:'https://tbytest.blob.core.windows.net/csqa/5e610ea0bdd872df5b9d3f08?sp=r&st=2020-03-04T14:37:20Z&se=2020-06-05T14:37:20Z&spr=https&sv=2018-11-09&sig=k5x0ZJNqdHkErTXj7Cd%2BQD%2Bpo1IlqdSVIPqXMigjtao%3D&srt=o&ss=b'},
  { id: '12',
  name: 'Model - King' ,
  minPrice: 2,
  maxPrice: 88,
  currency: 'HKD',
  minQty : 25,
  minQtyUnit : 'pair',
  leadTime : 4,
  leadTimeUnit : 'weeks',
  countryOfOrigin: 'Japan',
  description: 'Model - King is cool',
  createdDateStr: '1583026225000',
  modifiedDateStr: '1583395957000',
  visibility: 'G',
  price: 77.68,
  color: ['Purple','Yellow'],
  size: ['110mm', '130mm'],
  material: ['plastic'],
  sellingPoint: 'Extremely detail',
  category: ['Toys & Hobbies', 'Gifts & Crafts'],
  innerCarton : {
    dimensionUnit : 'm',
    length : 2,
    width :3,
    height : 4,
    volume : 24,
    weight : 11,
    weightUnit : 'lb',
    quantity : 25,
    quantityUnit : 'pair'
  },
  masterCarton : {
    dimensionUnit : 'cm',
    length : 3,
    width :4,
    height : 5,
    volume : 60,
    weight : 12,
    weightUnit : 'kg',
    quantity : 1,
    quantityUnit : 'set'
  },
  photo: [],
  supportingDoc: [],
  picUrl:'https://tbytest.blob.core.windows.net/csqa/5e610cddbdd872df5b9d3ef6?sp=r&st=2020-03-04T14:29:49Z&se=2020-06-05T14:29:49Z&spr=https&sv=2018-11-09&sig=4Cth9E5iTIPZDdAhJPcgCKl4wlA1eY9NO38mN3HwYOk%3D&srt=o&ss=b' },
  { id: '13',
  name: 'Model - Goku' ,
  minPrice: 3,
  maxPrice: 77,
  currency: 'CNY',
  minQty : 35,
  minQtyUnit : 'set',
  leadTime : 5,
  leadTimeUnit : 'months',
  countryOfOrigin: 'China',
  description: 'Model - Goku looks great',
  createdDateStr: '1583026225000',
  modifiedDateStr: '1583395957000',
  visibility: 'G',
  price: 78.68,
  color: ['Purple','Blue'],
  size: ['115mm', '135mm'],
  material: ['plastic', 'alloy'],
  sellingPoint: 'Unique in market',
  category: ['Toys & Hobbies', 'Gifts & Crafts'],
  innerCarton : {
    dimensionUnit : 'm',
    length : 2,
    width :3,
    height : 4,
    volume : 24,
    weight : 11,
    weightUnit : 'lb',
    quantity : 25,
    quantityUnit : 'pair'
  },
  masterCarton : {
    dimensionUnit : 'cm',
    length : 3,
    width :4,
    height : 5,
    volume : 60,
    weight : 12,
    weightUnit : 'kg',
    quantity : 1,
    quantityUnit : 'set'
  },
  photo: [],
  supportingDoc: [],
  picUrl:'https://tbytest.blob.core.windows.net/csqa/5e610dd3bdd872df5b9d3eff?sp=r&st=2020-03-04T14:33:55Z&se=2020-06-05T14:33:55Z&spr=https&sv=2018-11-09&sig=lbuhd%2B57n97pjYO%2Bq%2BW9abA26NOTh1oFgBf6fdloED4%3D&srt=o&ss=b' },
  { id: '14',
    name: 'Sushi plate' ,
    minPrice: 4,
    maxPrice: 66,
    currency: 'EUR',
    minQty : 45,
    minQtyUnit : 'piece',
    leadTime : 6,
    leadTimeUnit : 'days',
    countryOfOrigin: 'Bulgaria',
    description: 'Sushi Plate is delicious',
    createdDateStr: '1583026225000',
    modifiedDateStr: '1583395957000',
    visibility: 'G',
    price: 100,
    color: ['Red','Orange'],
    size: ['10pcs', '14pcs'],
    material: ['fish', 'rice'],
    sellingPoint: '',
    category: ['Food & Beverage'],
    innerCarton : {
      dimensionUnit : 'm',
      length : 2,
      width :3,
      height : 4,
      volume : 24,
      weight : 11,
      weightUnit : 'lb',
      quantity : 25,
      quantityUnit : 'pair'
    },
    masterCarton : {
      dimensionUnit : 'cm',
      length : 3,
      width :4,
      height : 5,
      volume : 60,
      weight : 12,
      weightUnit : 'kg',
      quantity : 1,
      quantityUnit : 'set'
    },
    photo: [],
    supportingDoc: [],
    picUrl:'https://tbytest.blob.core.windows.net/csqa/5e610f7abdd872df5b9d3f13?sp=r&st=2020-03-04T14:40:58Z&se=2020-06-05T14:40:58Z&spr=https&sv=2018-11-09&sig=9IjV8qRXQeSFnp%2FBgzhcFe9hbcNbWrLegIk64zG7ZEw%3D&srt=o&ss=b' }

];
