/**
 * Direction
 * Get name of the day of 4 days ago from today
 *
 * Expected result:
 * 1. if date now = monday
 * 2. then result = thursday
 */
function result() {
  // write your code here

  var date = new Date();
  date.setDate(date.getDate() - 4);
  var dayname = date.toLocaleString('en-us', { weekday: 'long' });
  return dayname;
}

console.log(result());

