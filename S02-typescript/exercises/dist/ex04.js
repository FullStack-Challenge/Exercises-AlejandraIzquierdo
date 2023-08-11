"use strict";
/**
 * * Exercise 4: Enumerations
 * TODO: Create an enumeration for different days of the week.
 * TODO: Write a function that takes a DayOfWeek and returns a message indicating whether it's a working day or a weekend.
*/
const WORKING_DAY = "it's a working day!";
const WEEKEND = "it's weekend!";
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 0] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 3] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 4] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 5] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 6] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
;
function getKindOfDay(day) {
    let kindOfDay = day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday ? WEEKEND : WORKING_DAY;
    return kindOfDay;
}
console.log(getKindOfDay(DaysOfWeek.Monday));
console.log(getKindOfDay(DaysOfWeek.Sunday));
