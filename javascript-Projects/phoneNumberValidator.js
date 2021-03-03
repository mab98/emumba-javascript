function telephoneCheck (str) {
  return str.match(
    /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/
  )
    ? true
    : false
}

console.log(telephoneCheck('1 (555) 555-5555'))
