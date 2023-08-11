/** 
 * * Exercise 4: Enumerations
 * TODO: Create an enumeration for different days of the week.
 * TODO: Write a function that takes a DayOfWeek and returns a message indicating whether it's a working day or a weekend.
*/

const WORKING_DAY= "it's a working day!";
const WEEKEND = "it's weekend!";

enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday, 
    Thursday, 
    Friday, 
    Saturday, 
    Sunday
};

function getKindOfDay(day: DaysOfWeek): string {
    let kindOfDay = day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday ? WEEKEND : WORKING_DAY;
    return kindOfDay;
}

console.log(getKindOfDay(DaysOfWeek.Monday));
console.log(getKindOfDay(DaysOfWeek.Sunday));