function isempty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}

let schedule={};
console.log(isempty(schedule));