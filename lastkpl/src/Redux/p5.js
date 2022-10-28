function calculateChange(payment) {
    let change = payment; // 돈
    var money = [];
  
    function billCounting(amount) {
      const count = Math.floor(change / amount);
      change = change - amount * count;
      return count;
    }
  
    const five만 = billCounting(50000);
    money.push(five만);
    const one만 = billCounting(10000);
    money.push(one만);
    const five천 = billCounting(5000);
    money.push(five천);
    const one천 = billCounting(1000);
    money.push(one천);
    const five원 = billCounting(500);
    money.push(five원);
    const onehundred원 = billCounting(100);
    money.push(onehundred원);
    const fivethousand원 = billCounting(50);
    money.push(fivethousand원);
    const oneten원 = billCounting(10);
    money.push(oneten원);
    const one원 = billCounting(1);
    money.push(one원);
  
    return money;
  }
  console.log(calculateChange(15000));