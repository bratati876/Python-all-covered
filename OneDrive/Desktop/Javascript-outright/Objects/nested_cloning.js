let shoplist={
    soaps:5,
    pencil:7,
    dish_washer:"vim",
    spices:{
        oil:7,
        turmeric:"cookme"
    },
    toothbrush:4
};

let clone=Object.assign({},shoplist);
// console.log(clone.spices);


clone.spices.oil=8;
clone.pencil=5;
console.log(shoplist.spices.oil);
console.log(shoplist.pencil);

