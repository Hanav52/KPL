function solution(arr) {
  var answer = [...arr[0]];
  var abc;

  for (var i = 1; i < arr.length; i++) {
    var top = answer[answer.length - 1];
    if (top !== arr[i]) {
      answer.push(arr[i]);
      abc = arr[i];
    } else if (top === arr[i]) {
      //abc = arr[i];
      answer.pop(arr[i]);
      console.log(abc);
      if (abc !== arr[i]) {
        console.log("1");
        answer.pop(arr[i]);
      }
    } else if (abc === top) {
      console.log("dhkdn");
    }
  }
  return answer;
}

console.log(solution("browoanoommmnaon"));
