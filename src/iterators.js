// max


var Iterators = (function() {
  var api = {

    max: function(numListMax){
      var max = -Infinity;
      for (var i = 0; i < numListMax.length; i++) {
        if ( numListMax[i] > max ) {
          max = numListMax[i];
        }
      };
      return max;

    }
  };

  return api;
})();

module.exports = Iterators;



// min



var min = function(numListMin){
  var minimum = Infinity;
  for (var i = 0; i < numListMin.length; i++) {
    if ( numListMin[i] < minimum ) {
      minimum = numListMin[i];
    }
  }
  return minimum;
}

Iterators.min = min;



// each



var arrayEach = [3, 6, 3, 2]
var outputEach = function(numEach) {
  // console.log("This is element: ", numEach);
}

var each = function(listEach, actionEach) {
  for (var i = 0; i < listEach.length; i++) {
    actionEach(listEach[i], i)
  }
  return listEach;
}

// each(arrayEach, outputEach);

Iterators.each = each;



// map



var arrayMap = [1, 3, 6, 12];
var doubleMap = function(numMap) {
  return numMap * 2;
}

var map = function(listMap, actionMap) {
  for (var i = 0, result = []; i < listMap.length; i++) {
    result[i] = actionMap(listMap[i]);
  }
  return result;
}

// map(arrayMap, doubleMap);

Iterators.map = map



// filter



var arrayFilter = [2, 9, 8, 4, 3];
var ifTrueFilter = function(currentItemFilter) {
  if (currentItemFilter < 6) {
    return true;
  }
}
var filter = function(listFilter, conditionFilter) {
  for (var i = 0, result = []; i < listFilter.length; i++) {
    if (conditionFilter(listFilter[i]) === true) {
      result.push(listFilter[i]);
    }
  }
  return result;
}

// filter(arrayFilter, ifTrueFilter);

Iterators.filter = filter

// reduce



var arrayReduce = [3, 2, 5, 10];
var flattenWithReduce = function(storeValue, currentValue) {
  if (storeValue === undefined) {
    storeValue = array[0];
  }
  return storeValue + currentValue;
}

var reduce = function(arrayReduce, actionReduce, initialValue) {
  for (var i = 0; i < arrayReduce.length; i++) {
    
  }
}

// reduce(arrayReduce, flattenWithReduce);

Iterators.reduce = reduce

// reject



var arrayReject = [2, 9, 7, 8, 4, 3];
var ifTrueReject = function(currentItemReject) {
  if (currentItemReject < 6) {
    return true;
  } else {
    return false;
  }
}
var reject = function(listReject, conditionReject) {
  for (var i = 0, result = []; i < listReject.length; i++) {
    if (conditionReject(listReject[i]) === false) {
      result.push(listReject[i]);
    }
  }
  return result;
}

// reject(arrayReject, ifTrueReject);

Iterators.reject = reject
