// This actually works! It's not the most pretty looking output (and can definitely be bettered), but I think the code 
// is clean, and it does deliver the right functional output. I can now use each to loop through the collection,
// and then apply my mod function to check and see if the number in the collection
// is divisible by the value. Kinda cool! I built this off an underscore function! :)
// I wonder if this is kind of like what will be made for _.invoke


var each = function(collection, someFunc) {
    result = [];
    for (var i = 0; i < collection.length; i++) {
        someFunc(collection[i], i, collection);
    } return result;
};

var divMod = function(collection, value) {
    var results = [];
    each(collection, function(num) {
        if (num % value == 0) {
            results.push(num + " is divisible by " + value);
        }
    });
    return results;
};

divMod(myArray, 7);

// Output

// [ '0 is divisible by 7',
//   '7 is divisible by 7',
//   '14 is divisible by 7',
//   '21 is divisible by 7',
//   '28 is divisible by 7',
//   '35 is divisible by 7',
//   '42 is divisible by 7',
//   '49 is divisible by 7',
//   '56 is divisible by 7',
//   '63 is divisible by 7',
//   '70 is divisible by 7',
//   '77 is divisible by 7',
//   '84 is divisible by 7',
//   '91 is divisible by 7',
//   '98 is divisible by 7',
//   '105 is divisible by 7',
//   '112 is divisible by 7',
//   '119 is divisible by 7',
//   '126 is divisible by 7',
//   '133 is divisible by 7',
//   '140 is divisible by 7',
//   '147 is divisible by 7',
//   '154 is divisible by 7',
//   '161 is divisible by 7',
//   '168 is divisible by 7',
//   '175 is divisible by 7',
//   '182 is divisible by 7',
//   '189 is divisible by 7',
//   '196 is divisible by 7',
//   '203 is divisible by 7',
//   '210 is divisible by 7',
//   '217 is divisible by 7',
//   '224 is divisible by 7',
//   '231 is divisible by 7',
//   '238 is divisible by 7',
//   '245 is divisible by 7',
//   '252 is divisible by 7',
//   '259 is divisible by 7',
//   '266 is divisible by 7',
//   '273 is divisible by 7',
//   '280 is divisible by 7',
//   '287 is divisible by 7',
//   '294 is divisible by 7' ]
