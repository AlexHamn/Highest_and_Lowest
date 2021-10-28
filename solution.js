function highAndLow(numbers){
  let arr = numbers.split(' ')
  arr.sort((a,b) => {return Number(a)-Number(b)});
  let max = arr[arr.length-1];
  let min = arr[0];
  return (`${max} ${min}`);
}
