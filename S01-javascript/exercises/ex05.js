/** 
 * TODO: Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).
 * ? Test Data:
 * ? console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
 * ? console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
 * ? console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
 */

const compareDates = function(date1, date2) {
    const options = {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    const formatter = new Intl.DateTimeFormat('en-US', options);

    let result = '';
    if (date1.getTime() < date2.getTime()) {
        result = formatter.format(date1) + " less than " + formatter.format(date2);
    } 
    else if (date1.getTime() > date2.getTime()) {
        result = formatter.format(date1) + " greater than " + formatter.format(date2);
    }
    else {
        result = "The dates are equal!";
    }
    return result;
}

console.log(compareDates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compareDates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compareDates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));