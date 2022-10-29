function solution(s) {
    let ascii_a = "a".charCodeAt(0);
    let ascii_z = "z".charCodeAt(0);
    let ascii_A = "A".charCodeAt(0);
    let ascii_Z = "Z".charCodeAt(0);
  
    return s.split("").reduce((str, char) => {
      let ascii = char.charCodeAt(0);
      let convertString = "";
      let left = 155 - ascii;
      let right = 219 - ascii;
  
      if (ascii_a <= ascii && ascii <= ascii_z) {
        if (ascii_z < right) ascii = 96 + (right - ascii_z);
        convertString = String.fromCharCode(right);
      } else if (ascii_A <= ascii && ascii <= ascii_Z) {
        if (ascii_Z < left) ascii = 64 + (left - ascii_Z);
        convertString = String.fromCharCode(left);
      } else if (ascii === 32) {
        convertString = " ";
      }
  
      str += convertString;
  
      return str;
    }, "");
  }
  console.log(solution("I love you"));
  