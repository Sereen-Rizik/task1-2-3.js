const numbers = [1, 0, 2, 0, -8, 0, 7, 1, 12];
zeroCount = 0;
for(let i=0 ; i<numbers.length ; i++)
  numbers[i] == 0 ? ++zeroCount :(zeroCount = zeroCount)

console.log("zero counter:", zeroCount);
