let averageScore;
function getAverage(arrOfScores) {
  averageScore = 0;
  for (const score of arrOfScores) {
    averageScore = averageScore + score;
  }
  averageScore = averageScore / arrOfScores.length;
  return averageScore;
}

let studentGrade = "";
function getGrade(studentScore) {
  if (studentScore >= 0 && studentScore <= 59) {
    studentGrade = "F";
    return studentGrade;
  } else if (studentScore >= 60 && studentScore <= 69) {
    studentGrade = "D";
    return studentGrade;
  } else if (studentScore >= 70 && studentScore <= 79) {
    studentGrade = "C";
    return studentGrade;
  } else if (studentScore >= 80 && studentScore <= 89) {
    studentGrade = "B";
    return studentGrade;
  } else if (studentScore >= 90 && studentScore <= 99) {
    studentGrade = "A";
    return studentGrade;
  } else if (studentScore === 100) {
    studentGrade = "A+";
    return studentGrade;
  } else {
    return "error";
  }
}

function hasPassingGrade(studentScore) {
  getGrade(studentScore);

  if (studentGrade === "F") {
    return false;
  } else {
    return true;
  }
}

function studentMsg(arrOfScores, studentScore) {
  getAverage(arrOfScores);
  hasPassingGrade(studentScore);

  if (hasPassingGrade(studentGrade) === false) {
    return `Class average: ${averageScore}. Your grade: ${studentGrade}. You failed the course.`;
  } else {
    return `Class average: ${averageScore}. Your grade: ${studentGrade}. You passed the course.`;
  }
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));

console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]));

console.log(getAverage([10, 20, 30, 40, 55, 65, 75, 83]));

console.log(getAverage([10, 20, 30, 40, 50, 60, 70, 97]));

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));

console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));

console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));
