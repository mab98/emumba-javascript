const squareList = arr => {
  // Only change code below this line
  let arr2 = arr
    .filter(item => item >= 0 && Number.isInteger(item))
    .map(item => item ** 2)
  return arr2
  // Only change code above this line
}

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])
console.log(squaredIntegers)

// squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) should return [16, 1764, 36].

// squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) should return [9, 100, 49]
