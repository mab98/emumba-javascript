// Only change code below this line
function urlSlug (title) {
  let a = title.toLowerCase().split(/\W/)
  let b = a.filter(item => item !== '')
  console.log(b.join('-'))
  return b.join('-')
}
// Only change code above this line

urlSlug('Winter Is Coming')
// should return "winter-is-coming".

urlSlug(' Winter Is  Coming')
// should return "winter-is-coming".

urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone')
// should return "a-mind-needs-books-like-a-sword-needs-a-whetstone".

urlSlug('Hold The Door')
// should return "hold-the-door"
