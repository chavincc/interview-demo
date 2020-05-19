export const requiredFieldRule = value => {
  if (value.length === 0)
    return {
      valid: false,
      message: 'required'
    }
  return {
    valid: true
  }
}

export const nameRule = value => {
  if (value.match(/^[A-Za-z ]*$/))
    return {
      valid: true
    }
  else {
    return {
      valid: false,
      message: 'name only contain a-z , space'
    }
  }
}
