

const rotate = function (numbers, k) {
  const counts = k % numbers.length;
  for (let i = 1; i <= k; i++){
     let temp = numbers.pop();
  numbers.unshift(temp);
  }
  return numbers;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18,19, 20]

// console.log(rotate(arr, 17))



const twoConsecutive = function (arr, k) {
  let s = -Infinity;
  for (let i = 0; i < arr.length - 1; i++){
      let start = i + 1;
      for (let j = start; j < arr.length ; j++){
         if (arr[i] + arr[j] > s && arr[i] + arr[j]  < k ) {
        s = arr[i] + arr[j];
      }
    }
  }
  return s;
}

// console.log(twoConsecutive([34,23,1,24,75,33,54,8],60))

function numberChain(num, count = 1) {
  if (num === 1) return count++;
  num = num % 2 === 0 ? num / 2 : 3 * num + 1;
  count++
  return numberChain(num, count);
}

console.log(numberChain(13));


function longest() {
  let highestChain = -Infinity;
  let hightestNum =900000;
  for (let i =900000; i > 0; i--){
    if (numberChain(i) > highestChain) {
      highestChain = numberChain(i);
      hightestNum = i;
    }
  }
  return [hightestNum,highestChain]
}

console.log(longest());