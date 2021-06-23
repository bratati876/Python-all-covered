//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.



function isempty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}

let schedule={};
console.log(isempty(schedule));