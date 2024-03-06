export default function appendToEachArrayValue(array, appendString) {
    for (const idx of array) {
      let  value = array[idx];
      array[idx] = appendString + value;
    }
  
    return array;
  }
  ///Rewrite the function appendToEachArrayValue to use ES6’s for...of 
  //operator. 
  //And don’t forget that var is not ES6-friendly.