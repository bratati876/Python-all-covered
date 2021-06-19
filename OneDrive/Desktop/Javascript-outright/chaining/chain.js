// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//     },
//     down() {
//       this.step--;
//     },
//     showStep: function() { // shows the current step
//       alert( this.step );
//     }
//   };


  /*Modify the code of up, down and showStep to make the calls chainable, like this:

*/

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;

    },
    showStep: function() { // shows the current step
      console.log( this.step );

    }
  };

  ladder.up().up().down().showStep();
