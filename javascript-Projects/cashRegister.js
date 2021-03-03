let denom = [
  { name: 'ONE HUNDRED', val: 100.0 },
  { name: 'TWENTY', val: 20.0 },
  { name: 'TEN', val: 10.0 },
  { name: 'FIVE', val: 5.0 },
  { name: 'ONE', val: 1.0 },
  { name: 'QUARTER', val: 0.25 },
  { name: 'DIME', val: 0.1 },
  { name: 'NICKEL', val: 0.05 },
  { name: 'PENNY', val: 0.01 }
]

function checkCashRegister (price, cash, cid) {
  const output = { status: null, change: [] }
  let change = cash - price

  // let worth = cid.reduce((sum, element) => (sum += element[1]), 0)

  let register = cid.reduce(
    (acc, element) => {
      acc.total += element[1]
      acc[element[0]] = element[1]
      return acc
    },
    { total: 0 }
  )

  if (register.total < change) {
    output.status = 'INSUFFICIENT_FUNDS'
    return output
  }

  if (register.total === change) {
    output.status = 'CLOSED'
    output.change = cid
    return output
  }

  let change_arr = denom.reduce((acc, element) => {
    let value = 0
    while (register[element.name] > 0 && change >= element.val) {
      change -= element.val
      register[element.name] -= element.val
      value += element.val

      change = Math.round(change * 100) / 100
    }
    if (value > 0) {
      acc.push([element.name, value])
    }
    return acc
  }, [])

  if (change_arr.length < 1 || change > 0) {
    output.status = 'INSUFFICIENT_FUNDS'
    return output
  }
  output.status = 'OPEN'
  output.change = change_arr
  return output
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
  ])
  // worth:  335.40999999999997 , change:  0.5
  // {status: "OPEN", change: [["QUARTER", 0.5]]}
)
