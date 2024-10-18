const students = [
    { name:'Raj', major:'CSE',gpa:6.5},
    { name:'Bisnoi',major:'EE',gpa:6.2},
    { name:'Lawerence',major:'CSE',gpa:6.8}
];
const cseStudents = [];
for(let i=0;i<students.length;i++){
if(students[i].major==='CSE'){
cseStudents.push(students[i]);
}
}
console.log(cseStudents);
//crete a function tha takes an paragraph string filter out the string with a length less than 5, capital the remain  string & concat then into a single string