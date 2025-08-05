const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้

const passedStudents = students.filter(students => students.score > 50);
console.log(passedStudents);

const updateStudents = passedStudents.map(student => ({...student, score: student.score * 1.1}))
console.log(updateStudents);

const totalScore = updateStudents.reduce((acc, cur) => {
  return acc + cur.score
}, 0)
console.log(`Total score is ${totalScore}`);