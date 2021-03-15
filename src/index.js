module.exports = function check(str, bracketsConfig) {
  let brackets = "[]{}()<>";
  let stack = [];


  for(let bracket of str) {
    let bracketsIndex = brackets.indexOf(bracket);
    if(bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1)
    } else {
      stack.pop();
    }
  }
  return stack.length == 0 ? true : false;
};
