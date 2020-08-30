import * as types from '../types'

const INITIAL_STATE = {
  viewInput: false,
  viewTabHeader: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case types.VIEW_INPUT: {
      return Object.assign(state, {
        viewInput: !state.viewInput
      })
    }
    case types.HIDE_INPUT: {
      return Object.assign(state, {
        viewInput: state.viewInput
      })
    }
    case types.SHOW_NAV_HEADER: {
      return Object.assign(state, {
        viewTabHeader: !state.viewTabHeader
      })
    }
    case types.HIDE_NAV_HEADER: {
      return Object.assign(state, {
        viewTabHeader: state.viewTabHeader
      })
    }
    default: {
      return state
    }
  }
}
