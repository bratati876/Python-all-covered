// Create a function that takes two dates and returns the number of days between the first and second date.

// Examples
// getDays(
//   new Date("June 14, 2019"),
//   new Date("June 20, 2019")
// ) ➞ 6


let months={
    january:31,
    february(year){
        if(yaer%4==0)
          return 29;
        else
          return 28;
    },
    march:31,
    April:30,
    May:31,
    June:30,
    July:31,
    August:31,
    September:30,
    October:31,
    November:30,
    December:31
}


function findDate(date1,date2){
    console.log(date1.charAt(0));
        //   for(let key in months){
        //       if(key==date1.charAt(0)){
        //              day=month[key];
        //       }
        //   }
}

findDate("June 14, 2019","June 20, 2019");