function solution(n, s) {
    //변수
    const pobi = [];
    const crong = [];
    function pc() {
      const randomNum = Math.random() * 400;
      const randomNumFloor = Math.floor(randomNum) + 1;
      if (randomNumFloor % 2 === 1) {
        console.log(randomNumFloor);
        pobi.push(randomNumFloor);
        pobi.push(randomNumFloor + 1);
      }
      const randomNum1 = Math.random() * 400;
      const randomNumFloor1 = Math.floor(randomNum1) + 1;
      if (randomNumFloor1 % 2 === 1) {
        console.log(randomNumFloor1);
        crong.push(randomNumFloor1);
        crong.push(randomNumFloor1 + 1);
      }
    }
    pc();
    // 포비
    var PobiPlus = [...("" + pobi[0])].map((num) => +num).reduce((a, c) => a + c);
    var PobiDouble = [...("" + pobi[0])]
      .map((num) => +num)
      .reduce((a, c) => a * c);
    var PobiPlus1 = [...("" + pobi[1])]
      .map((num) => +num)
      .reduce((a, c) => a + c);
    var PobiDouble1 = [...("" + pobi[1])]
      .map((num) => +num)
      .reduce((a, c) => a * c);
    //크롱
    var CrongPlus = [...("" + crong[0])]
      .map((num) => +num)
      .reduce((a, c) => a + c);
    var CrongDouble = [...("" + crong[0])]
      .map((num) => +num)
      .reduce((a, c) => a * c);
    var CrongPlus1 = [...("" + crong[1])]
      .map((num) => +num)
      .reduce((a, c) => a + c);
    var CrongDouble1 = [...("" + crong[1])]
      .map((num) => +num)
      .reduce((a, c) => a * c);
  
    var PobiAnswerIndex0 = 0;
    var PobiAnswerIndex1 = 0;
    var CrongAnswerIndex0 = 0;
    var CrongAnswerIndex1 = 0;
  
    if (PobiPlus > PobiDouble) {
      console.log("포비의 더한게 더 커");
      PobiAnswerIndex0 = PobiPlus;
    } else if (PobiPlus < PobiDouble) {
      console.log("포비의 곱한게 더 커");
      PobiAnswerIndex0 = PobiDouble;
    } else if (PobiPlus === PobiDouble) {
      console.log("합과 곱의 값이 같네");
      PobiAnswerIndex0 = PobiPlus;
    }
    // PobiPlus1 PobiDouble1
    if (PobiPlus1 > PobiDouble1) {
      console.log("포비1번인덱스가 더한게 크네");
      PobiAnswerIndex1 = PobiPlus1;
    } else if (PobiPlus1 < PobiDouble1) {
      console.log("포비1번인덱스가 곱한게 크네");
      PobiAnswerIndex1 = PobiDouble1;
    } else if (PobiPlus1 === PobiDouble1) {
      console.log("합과 곱의 값이 같네");
      PobiAnswerIndex1 = PobiPlus1;
    }
    if (CrongPlus > CrongDouble) {
      console.log("크롱의 더한게 더 커");
      CrongAnswerIndex0 = CrongPlus;
    } else if (CrongPlus < CrongDouble) {
      console.log("크롱의 곱한게 더 커");
      CrongAnswerIndex0 = CrongDouble;
    } else if (CrongPlus === CrongDouble) {
      console.log("합과 곱의 값이 같네");
      CrongAnswerIndex0 = CrongPlus;
    }
    // crong
    if (CrongPlus1 > CrongDouble1) {
      console.log("크롱1번인덱스가 더한게 크네");
      CrongAnswerIndex1 = CrongPlus1;
    } else if (CrongPlus1 < CrongDouble1) {
      console.log("크롱1번인덱스가 곱한게 크네");
      CrongAnswerIndex1 = CrongDouble1;
    } else if (CrongPlus1 === CrongDouble1) {
      console.log("합과 곱의 값이 같네");
      CrongAnswerIndex1 = CrongDouble1;
    }
    // 비교
    var poanswer = 0;
    var coanswer = 0;
    if (PobiAnswerIndex0 > PobiAnswerIndex1) {
      poanswer = PobiAnswerIndex0;
    } else if (PobiAnswerIndex0 < PobiAnswerIndex1) {
      poanswer = PobiAnswerIndex1;
    } else if (PobiAnswerIndex0 === PobiAnswerIndex1) {
      console.log("값이 같아");
      poanswer = PobiAnswerIndex0;
    }
    if (CrongAnswerIndex0 > CrongAnswerIndex1) {
      coanswer = CrongAnswerIndex0;
    } else if (CrongAnswerIndex0 < CrongAnswerIndex1) {
      coanswer = CrongAnswerIndex1;
    } else if (CrongAnswerIndex0 === CrongAnswerIndex1) {
      console.log("값이 같아");
      coanswer = CrongAnswerIndex0;
    }
  
    var answer = 0;
    if (poanswer > coanswer) answer = 1;
    else if (poanswer < coanswer) answer = 2;
    else if (poanswer === coanswer) answer = 0;
  
    return answer;
  }
  console.log(solution());
  