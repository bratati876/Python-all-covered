// Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).

// Examples
// addName({}, "Brutus", 300) ➞ { Brutus: 300 }

// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }



function series(obj1, str1, num){
    let result={};
    for(let key in obj1){
        result[key];
        result[key]=obj1[key];
    }

    result[str1];
    result[str1]=num;

    console.log(result);
}

series({"fruit":456},"guava",90);