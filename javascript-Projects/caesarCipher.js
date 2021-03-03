function rot13 (str) {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let str2 = ''
  for (let i = 0; i < str.length; i++) {
    const element = str[i]
    let index = alphabets.indexOf(element)
    let index2
    if (index === -1) {
      str2 += element
    } else {
      if (index < 13) {
        index2 = index + 13
        str2 += alphabets[index2]
      } else {
        index2 = index % 13
        str2 += alphabets[index2]
      }
    }
  }
  console.log(str2)
  return str2
}

rot13('SERR PBQR PNZC')
// FREE CODE CAMP

rot13('SERR CVMMN!')
// FREE PIZZA!

rot13('SERR YBIR?')
// FREE LOVE?

rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')
// THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
