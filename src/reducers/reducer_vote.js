const initialState = {
  react: 0,
  vue: 0,
  angular: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'voteReact':
      return Object.assign({}, state, { react: state.react + 1 })
    case 'voteVue':
      return Object.assign({}, state, { vue: state.vue + 1 })
    case 'voteAngular':
      return Object.assign({}, state, { angular: state.angular + 1 })
    default:
      return state
  }
}
