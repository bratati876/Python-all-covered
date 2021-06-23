function sayHiBye(firstName, lastName) {

    // helper nested function to use below
    function getFullName() {                        //this is a closure which has the access
                                                    // to the outer variables as well as to the global variables
      return firstName + " " + lastName;
    }
  
   console.log( "Hello, " + getFullName() );
   console.log( "Bye, " + getFullName() );
  
  }

  console.log(sayHiBye("bratati","datta"));