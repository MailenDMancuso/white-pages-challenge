const stringChar = "aoNHQATeMNLuWC4vMdGgQpqMge7bit";
const stringArr = stringChar.toLocaleLowerCase().split("");
let result = [];

stringArr.map(char => {
  const existingChar = result.filter(e => e.character === char);

  if (existingChar.length) {
    existingChar[0].count = existingChar[0].count + 1;
  } else {
    result = [
      ...result,
      {
        character: char,
        count: 1
      }
    ];
  }
});

result = result.sort((a, b) => {
  return a.count < b.count ? -1 : 1;
});
console.log("Ascending ordered array is: \n", result);
