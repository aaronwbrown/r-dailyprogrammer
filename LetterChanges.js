// I found the "Letter Change" challenge on CoderByte, so I thought I'd try it out using a functional, albeit amateurish 
// approach, to the problem. I am currently rewriting the Underscore.js Library, so this was some fun practice. 

// The challenge - Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify 
// it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet 
// (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

var alpha = {1: 'a',
            2: 'b',
            3: 'c',
            4: 'd',
            5: 'e',
            6: 'f',
            7: 'g',
            8: 'h',
            9: 'i',
            10: 'j',
            11: 'k',
            12: 'l',
            13: 'm',
            14: 'n',
            15: 'o',
            16: 'p',
            17: 'q',
            18: 'r',
            19: 's',
            20: 't',
            21: 'u',
            22: 'v',
            23: 'w',
            24: 'x',
            25: 'y',
            26: 'z'};

var each = function(collection, iterator) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            iterator(collection[i], i, collection);
        } 
    } else {
        for (var key in collection) {
            iterator(collection[key], key, collection);
        }
    }
};

var map = function(collection, iterator) {
    result = [];
    each(collection, function(element, index, collection) {
        result.push(iterator(element, index, collection));
    });
    return result;
};

var indexOf = function(collection, target) {
    var result = -1;
    each(collection, function(item, index) {
        if (item === target && result === -1) {
            result = index;
        }
    });
    return result;
};

var getProp = function(str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
        result.push(indexOf(alpha, str[i]))    
    }
    return result;
};


var propMapped = function(str) {
    return map(getProp(str), function(item) {
        if (+item !== 26) {
            return +item + 1;
        }
        if (+item === 26) {
            return item = 1;
        }
    })
}

var alphaMap = function(props) {
    return map(props, function(prop) {
        if ((prop === 1) ||
            (prop === 5) ||
            (prop === 9) ||
            (prop === 15) ||
            (prop === 21) ||
            (prop === 25)) {
            return alpha[prop].toUpperCase();
        } else {
            return alpha[prop];    
        }    
    }) 
}

var getAlphArray = function(str) {
    var propArray = propMapped(str);
    var alphArray = alphaMap(propArray);
    return alphArray;
};

var letterChanges = function(str) {
    var result = [];
    var strArr = str.toLowerCase().split(" ");
    var arrLength = strArr.length;
    if (arrLength > 1) {
        map(strArr, function(item) {
            result.push(letterChanges(item));
        })
    } else {
        result.push(getAlphArray(str));
    }
    var finalResult = result.join(" ").replace(/,/g, "");
    return finalResult;
};

var changedLetters = letterChanges("Alien ways are zee best ways");
console.log(changedLetters); //=> bmjfO xbzt bsf Aff cftU xbzt
