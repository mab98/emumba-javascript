function sentensify (str) {
  // Only change code below this line
  let a = str.split(/\W/)
  return a.join(' ')
  // Only change code above this line
}
console.log(sentensify('May-the-force-be-with-you'))
