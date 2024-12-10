/* Your JS goes in this file */
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

let isAdultResult = isAdult(20);
console.log('value of isAdultResult: ', isAdultResult);

function didStudentPass(score) {
  // tried to use conditional (ternary) operator
  return score >= 70 ? true : false;
}

let didStudentPassResult = didStudentPass(80);
console.log('value of didStudentPassResult: ', didStudentPassResult);

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else {
    return 'A++';
  }
}

let gradeCalculatorResult = gradeCalculator(100);
console.log('value of gradeCalculatorResult: ', gradeCalculatorResult);

function seasonMessenger(season) {
  if (season === 'summer') {
    return 'it is hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'it is cold today';
  } else {
    return 'please enter a valid season';
  }
}

let seasonMessengerResult = seasonMessenger('spring');
console.log('value of seasonMessengerResult: ', seasonMessengerResult);

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend';
  } else {
    return 'It is a weekday!';
  }
}

let dayDetectorResult = dayDetector('thursday');
console.log('value of dayDetectorResult: ', dayDetectorResult);
