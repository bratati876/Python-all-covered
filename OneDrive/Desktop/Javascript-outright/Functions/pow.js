function power(x,n){
    let mul=1;
    for(let i=0;i<n;i++){
        mul*=x;
    }
    return mul;
}

console.log(power(3,3));