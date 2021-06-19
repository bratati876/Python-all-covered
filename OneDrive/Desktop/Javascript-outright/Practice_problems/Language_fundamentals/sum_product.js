/*Create a function that takes three collections of arguments and returns the sum of the product of numbers.

Examples
product(1,2)(1,1)(2,3) ➞ 8
// 1 * 1 * 2 + 2 * 1 * 3

product(10,2)(5,0)(2,3) ➞ 100
// 10 * 5 * 2 + 2 * 0 * 3

product(1,2)(2,3)(3,4) ➞ 30
// 1 * 2 * 3 + 2 * 3 * 4

product(1,2)(0,3)(3,0) ➞ 0
// 1 * 0 * 3 + 2 * 3 *     */

function prod(num1,num2,num3)
{
    sum=0;
    for(let i=0;i<2;i++){
        sum+=num1[i]*num2[i]*num3[i];
    }

    return sum;
}
console.log(prod([7,8],[5,6],[1,2]));
