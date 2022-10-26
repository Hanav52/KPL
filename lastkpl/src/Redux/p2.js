function problem2(cryptogram) {
    var answer = "";
    for (let i = 0; i < cryptogram.length; i++) {
      console.log(cryptogram[i], i, cryptogram.indexOf(cryptogram[i]));
    }
    return answer;
  }
  
  module.exports = problem2;
  