// Create a function to determine if the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits in a string of numbers.

// If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
// If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
// If the sum of both even and odd numbers are equal, return "Even and Odd are the same".

function sum(str){
    sum_even=0;
    sum_odd=0;
    let len=str.length;
    console.log(len);
    for(let i=0;i<len;i++){
        if(str[i]%2==0)
           sum_even+=parseInt(str[i]);
        else
           sum_odd+=parseInt(str[i]);
    }
    console.log(sum_even); console.log(sum_odd);
    if(sum_even<sum_odd)
      return "Odd is greater than Even";
    else if(sum_even>sum_odd)
      return "Even is greater than Odd";
    else
      return "Even and Odd are the same";
}

console.log(sum("12345"));