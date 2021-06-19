function marry(man, woman) {
    woman.husband = man;
    console.log(woman);
    man.wife = woman;
    
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });