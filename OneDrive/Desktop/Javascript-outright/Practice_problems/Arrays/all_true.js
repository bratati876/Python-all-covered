// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false


function truthy(arr){
    for(let key in arr){
        if(arr[key]==false || arr[key]==0)
           return false;
       
    }

    return true;
}

let arr=[2,3,45,6];
console.log(truthy(arr));