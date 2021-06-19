// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

function true_count(bool){
    count=0;
    for(let index in bool){
        if(bool[index]==true)
            count++;
    }
    return count;
}

let b=[true,true,true];
console.log(true_count(b));