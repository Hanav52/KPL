class Stack {
    constructor(){
        this.arr = [];
    } 

    push(data) {
        this.arr.push(data);
    }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(100);
s.push(200);
s.push(300);

console.log(s);
console.log(s.arr[0])