import { combineReducers } from 'redux'

import ReducerVote from './reducer_vote'

export default combineReducers({
  votes: ReducerVote,
})
