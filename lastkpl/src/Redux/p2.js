function solution(arr) {
  var answer = arr[0];
  var abc;

  for (var i = 1; i < arr.length; i++) {
    var top = answer[answer.length - 1];
    if (top !== arr[i]) {
      answer.push(arr[i]);
      if (abc === arr[i]) {
        answer.pop(arr[i - 1]);
      }
    } else if (top === arr[i]) {
      abc = arr[i];
      answer.pop(arr[i]);
    }
  }
  return answer;
}

console.log(solution("zyelleyz"));
//완성

module.exports = problem2;