let arr = [0, 1, 2, 3, 3, 1, 4, 5];		
function allNums(array) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if(item % 2) 
      console.log(item);
  }
}
let zero = arr.filter(function(f) { return f == 0})
allNums(arr);
console.log(zero);