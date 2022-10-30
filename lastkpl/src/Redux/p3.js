function solution(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    let current = i;
    if (
      (current / 10 === 3 || current / 10 === 6 || current / 10 === 9) &&
      (current % 10 === 3 || current % 10 === 6 || current % 10 === 9)
    ) {
      count++;
    } else if (
      current / 10 === 3 ||
      current / 10 === 6 ||
      current / 10 === 9 ||
      current % 10 === 3 ||
      current % 10 === 6 ||
      current % 10 === 9
    ) {
      count++;
    }
  }
  return count;
}

console.log(solution(39));