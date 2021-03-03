function rot13 (str) {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const len = alphabets.length // 26
  const mid = alphabets.length / 2 // 13
  return str
    .split('')
    .reduce((acc, element) => {
      element.match(/[a-zA-Z]/)
        ? acc.push(alphabets[(alphabets.indexOf(element) + mid) % len])
        : acc.push(element)
      return acc
    }, [])
    .join('')
}

console.log(rot13('SERR PBQR PNZC'))
console.log(rot13('SERR CVMMN!'))
console.log(rot13('SERR YBIR?'))
console.log(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'))
