export const requiredFieldRule = () => ({
  required: true,
  message: 'field is required'
})

export const nameRule = () => ({
  pattern: new RegExp(/^[A-Za-z ]*$/),
  message: 'only contain a-z , space'
})
