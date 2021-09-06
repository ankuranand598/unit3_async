function findCount(ele,l,div,k){
  let sum=0;
  let count=0;
let windo=0;
  for(let i=0;i<k;i++){
  windo+=ele[i];
  }
  if(windo%div!=0){
  count++
  }
  for(let j=k, x=0;j<l;j++,x++){
  windo+= ele[j];
    windo-=ele[x];
    if(windo%div!=0){
  count++;
  }
  }
  console.log(count)
}
function checkWindow(ele, len, div) {
    let sum = 0;
    ele.forEach((el) => {
        sum += el;
    })
    if (sum % div != 0) {
        return len;
    }
    for (let j = 0; j < len; j++) {
        sum -= ele[j];
        if (sum % div != 0) {
            return len - (j +1) ;
         }
     }
 }
function runProgram(input) {
  var newInput = input.split(/[\r\n]+/);
  var length = newInput[0].split(" ").map(Number);
  let len=length[0];
  let div=length[1];
  var data = newInput[1].split(" ").map(Number);
  //let k=checkSubArray(data,len,div);
  
    let k = checkWindow(data, len, div)
    findCount(data,len,div,k)
  //console.log(k)
}
  if (process.env.USERNAME === "ankur") {
    runProgram(`100 50
96 47 58 86 82 81 65 66 56 28 79 56 61 9 31 47 35 4 69 70 78 51 19 13 76 92 7 79 20 15 58 93 88 50 18 63 18 29 46 99 86 75 70 88 19 39 99 70 97 44 95 52 27 58 72 76 52 37 77 23 54 52 16 47 92 67 22 94 38 90 39 71 29 21 51 54 9 58 35 76 3 7 63 16 100 61 27 78 55 63 17 15 30 61 70 39 22 30 57 79`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
}
