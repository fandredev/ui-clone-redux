import * as types from '../types'


export function actViewInput() {
  return {
    type: types.VIEW_INPUT,
  };
}
export function actHideInput() {
  return {
    type: types.HIDE_INPUT,
  };
}

export function actViewNav() {
  return {
    type: types.SHOW_NAV_HEADER,
  };
}
export function actHideNav() {
  return {
    type: types.HIDE_NAV_HEADER,
  };
}
