export interface Product {

  id : string;
  name : string;
  minPrice : number;
  maxPrice : number;
  currency : string;
  minQty : number;
  minQtyUnit : string;
  leadTime : number;
  leadTimeUnit : string;
  countryOfOrigin : string;
  description : string;
  createdDateStr : string;
  modifiedDateStr : string;
  visibility : string;
  picUrl : string;
  price : number;
  color : string[];
  size : string[];
  material : string[];
  sellingPoint : string[]
  innerCarton : {
    dimensionUnit : string;
              length : number,
              width :number,
              height : number,
              volume : number,
              weight : number,
              weightUnit : string,
              quantity : number,
              quantityUnit : string
  }
}
