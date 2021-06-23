function checkAge(age) {
    if (age > 18) {
      return true;
    } 
      else{
      return confirm('Did parents allow you?');
      }
  }

  console.log(checkAge(45));