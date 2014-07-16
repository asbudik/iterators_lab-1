<!-- ### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function` -->

A higher order function can take multiple functions as an input,
while being able to return a function. The function allows
manipulation on multiple elements.

<!-- * `max` -->

Input: An array of integers
Output: The maximum value element in the array

Example Input: [6, 11, 3, 5]
Example Output: 11

<!-- * `min` -->

Input: An array of integers
Output: The minimum value element in the array

Example Input: [6, 11, 3, 5]
Example Output: 3

<!-- * `each` -->

Input: There are two inputs. One is an array of elements, and
			 the second input is a function with one argument. We call that function with each element as its input.

Output: "each" only iterates over elements in an array, but does
        not modify the elements inside.

Example Input: ["cat", "dog", "snake", "panda"], 
						   function(entry) {
								 entry.toUpperCase();
               }
Example Output: "each" ensures that the input function gets
                called on each and every element in the input
                array.

<!-- * `map` -->

Input:  There are two inputs. One is an array of elements, and
			 the second input is a function with one argument. We call that function with each element as its input.

Output: "map" returns a new array, in which each element is the 				return value of the function called on the original 						input array element.

Example Input: [2, 4, 6, 8],
               function(currentItem) {
	               return currentItem * 2
	              }

Example Output: [4, 8, 12, 16]

<!-- * `filter` -->

Input: "filter" takes two parameters. The first one will be an
       array of elements. The second one will be a condition function with one argument. It will return a boolean value, indicating whether to keep an element if true.

Output: "filter" will output an array of elements that return
        "true" from the condition function.

Example Input: [2, 9, 8, 4, 3],
							 function(currentItem) {
								 if (currentItem < 6) {
								   return true;
							   }
							 }
Example Output: [2, 4, 3]


var filter = function()

Iterators.filter = filter


<!-- * `reduce` -->

Input: "reduce" takes 2 parameters. The first parameter is the
				array of elements. The second parameter is a function that passes (at least) two arguments; one that will store the "flattened" elements in an array (i.e. its sum or product) and the second parameter will be the array's current index value.

Output: "reduce" will return the "flattened" integer produced
				from the array.

Example Input: var array = [5, 3, 2, 10],
							 function(storeValue, currentValue) {
								 if (storeValue === undefined) {
								   storeValue = array[0];
								 }
								 return storeValue + currentValue;
							 }

Example Output: 20


<!-- * `reject` -->

Input: "reject" takes two parameters. The first one will be an
       array of elements. The second one will be a condition function with one argument. It will return a boolean value, indicating whether to keep an element if false.

Output: "reject" will output an array of elements that return
				"false" from the condition function.

Example Input: [2, 9, 8, 4, 3],
							 function(currentItem) {
								 if (currentItem < 6) {
								   return false;
							   }
							 }
Example Output: [9, 8]