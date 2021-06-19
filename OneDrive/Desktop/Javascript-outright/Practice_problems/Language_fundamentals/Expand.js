/*Create a function that expands a number into a string as shown below:
25 ➞ "20 + 5"
70701 ➞ "70000 + 700 + 1"
685 ➞ "600 + 80 + 5" */


function no_digit(n){
    temp=n;count=0;

    while(temp!=0){
        temp=temp%10;
        temp/=10;
        count++;
    }
    return count;
}


function expand(n){
    let no=no_digit(n);
    result = "";
    while(n!=0){
        quo=n/10**(no-1) ;
        res=quo*(no-1);
        result+=res + "+";
        console.log(result);
        n-=quo*(no-1);
        no--;
    }
    return result;
}

console.log(expand(7890));
