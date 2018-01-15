// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here


  // base case (looking at primitives)
  // numbers, null, bools, strings, undefined

  let typeOfObj = typeof(obj);

  if (typeOfObj === 'string') {
    return '"' + obj + '"';
  } else if (typeOfObj === 'number' || typeOfObj === 'boolean' ) {
    return obj.toString();
  } else if (obj === null) {
    return 'null';
  } else if (typeOfObj === 'function' || typeOfObj === 'undefined') {
    // do nothing
  } 

  // recursive case (something iterable (array or object))

  // add decorators, iterate through items and call on each sub item

  // if it's an array
  // JSON.stringify([new Number(3), new String('false'), new Boolean(false)])
  // expected output: "[3,"false",false]"

  if (Array.isArray(obj)) {
    let result = '';

    // for every item, call stringifyJSON on the item, and add a comma
    for (let i = 0; i < obj.length; i++) {
      if (typeof(obj[i]) !== 'function' && typeof(obj[i]) !== 'undefined') {
        result += stringifyJSON(obj[i]);
        if (i < obj.length - 1) {
          result += ',';
        }
      }
    }

    // return [ + everything else + ]
    return '[' + result + ']';
  } else {
    
  // in case it's an object, go through key value pairs,
  // JSON.stringify({ x: 5, y: 6 })
  // expected output: "{"x":5,"y":6}"

  // loop through every key in the object
    let pairArray = [];

    for (let key in obj) {

      
      if (typeof(obj[key]) !== 'function' && typeof(obj[key]) !== 'undefined') {
        // wrap the key in ""
        // put a colon between key and value
        // stick a comma everywhere except last pair
        let pair = '';
        pair += '"' + key + '":' + stringifyJSON(obj[key]);
        pairArray.push(pair);
      }
    }
    return '{' + pairArray.join(',') + '}';
  }
};
