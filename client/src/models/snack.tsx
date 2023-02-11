export type snackType = {
  _id:string;
  name:string,
  lastDayConsumed:Date,
  isFavorite:boolean,
  calories:{
    value:number,
    unit:string
  }
}