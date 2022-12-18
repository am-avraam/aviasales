export const toggle = (event) => {
  console.log(event.target.value)
  return {
    type: 'TOGGLE',
    name: event.target.value,
  }
}
export const allIn = (event) => {
  console.log(event.target.value)
  return {
    type: 'ALL_IN',
  }
}

export const checkFilter = (event) => {
  // console.log(event.target.value)
  return {
    type: 'CHECK_FILTER',
    name: event.target.value,
  }
}
// export const rnd = (payload) => ({ type: 'RND', payload })
