import * as types from '../types'

const INITIAL_STATE = {
  viewInput: false,
  viewTabHeader: false,
  viewTabBurger: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.VIEW_INPUT: {
      return Object.assign(state, {
        viewInput: !state.viewInput,
      })
    }

    case types.SHOW_NAV_HEADER: {
      return Object.assign(state, {
        viewTabHeader: !state.viewTabHeader,
      })
    }
    case types.HIDE_NAV_HEADER: {
      return Object.assign(state, {
        viewTabHeader: state.viewTabHeader,
      })
    }

    case types.SHOW_BURGER: {
      return Object.assign(state, {
        viewTabBurger: !state.viewTabBurger,
      })
    }
    default: {
      return state
    }
  }
}
