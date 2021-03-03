function telephoneCheck (str) {
  if (
    str.match(/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/)
  ) {
    return true
  }
  return false
}

console.log(telephoneCheck('1 (555) 555-5555'))
