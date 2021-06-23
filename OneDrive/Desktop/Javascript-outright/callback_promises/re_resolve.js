let promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject(3), 1000); 
     resolve(1);
  
   
  });
  
  promise.then(alert);
  promise.catch(alert);


  //output will be 1 as the asynchronous nature of the settime out function will delay the output then it will come to the second resolve and never will take account of the first reject



                    //   let promise = new Promise(function(resolve, reject) {
                 //     setTimeout(() => resolve(3), 1000); 
                  //      resolve(1);
  
   
                  //   });
  
                   //   promise.then(alert);




  //The second call to resolve is ignored, because only the first call of reject/resolve is taken into account. Further calls are ignored.