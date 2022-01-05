/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 * 
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
const students = [
  { firstName: 'Kai', lastName: 'Lyons' },
  { firstName: 'Belle', lastName: 'Norton' },
  { firstName: 'Finnley', lastName: 'Rennie' },
  { firstName: 'Tatiana', lastName: 'Dickerson' },
  { firstName: 'Peyton', lastName: 'Gardner' },
];
const groups = 3;

function result(students, groups) {
  // your code here
  
  students.sort((a, b) => (a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0));
  // can be replaced by if else, but ? operator is much shorter

  let groupResults = [];
  // declare group Array

  const studentPerGroup = Math.ceil(students.length / groups);
  // divide total student by group. Use Math.ceil to get maximum student per group

  //this function below loop to make group of students
  for (let indexGroup = 0; indexGroup < groups; indexGroup++) {
    groupResults.push(students.splice(0, studentPerGroup));
    //push the students object to array, with studentPerGroup be the maximum limit of each group  
    //splice(0, studentPerGroup) means from each looping, push student with max limit, then remove pushed data from array 
  }

  return groupResults;
}

console.log(result(students, groups));
