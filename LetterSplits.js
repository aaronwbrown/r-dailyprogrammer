var alpha = { 1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F',
              7: 'G', 8: 'H', 9: 'I', 10: 'J', 11: 'K',12: 'L',
              13: 'M',14: 'N',15: 'O',16: 'P',17: 'Q',18: 'R',
              19: 'S',20: 'T',21: 'U', 22: 'V',23: 'W',24: 'X',
              25: 'Y',26: 'Z' };

var int = 345167289;


var intToArray = function(int) { // turn int input into an array
    var intToString = int.toString();
    var intSplit = intToString.split("");
    var intArray = intSplit.map(function(item){
        return parseInt(item);
    });
    return intArray; // return array
};

var intArray = intToArray(int); // run func to get array value

var findNext = function(array, value) {
    var nextItem;
    index = array.indexOf(value);
    if(index >= 0 && index < array.length - 1) {
      nextItem = array[index + 1];
    }
    return nextItem;
};

var split = function(array) {
    var result = [];
    var someVar;
    var addVar;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            array.splice(i, 1);
        }
    }
    for (var i = 0; i < array.length; i++) {
        if ((array[i] === 1) || (array[i] === 2)) {
            someVar = findNext(array, array[i]);
            addVar = ("" + array[i] + someVar); 
            if (addVar <= 26){
                result.push(parseInt(addVar));
                array.splice(array[i], 1);
            } else {
                result.push(array[i]);
            }
        } else {
            result.push(array[i]);
        }
    }
    return result;
};

var intSplit = split(intArray);
console.log(intSplit);

var toAlpha = function(array, obj) {
    return array.map(function(item) {
        return obj[item];
    });
};

var alphad = toAlpha(intSplit, alpha);
console.log(alphad);





