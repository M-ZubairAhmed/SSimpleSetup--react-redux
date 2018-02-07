const initialState = {
  reactVotes: 0,
  vueVotes: 0,
  angularVotes: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'upvoteReact':
      return Object.assign({}, state, { reactVotes: state.reactVotes + 1 })
    case 'upvoteVue':
      return Object.assign({}, state, { vueVotes: state.vueVotes + 1 })
    case 'upvoteAngular':
      return Object.assign({}, state, { angularVotes: state.angularVotes + 1 })
    default:
      return state
  }
}
