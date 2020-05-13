import * as actionsTypes from '../actions/actionTypes';

const defaultState = [
  { id: 0, title: 'This is a practice of redux', checked: true },
  { id: 1, title: 'Made By JOJO Jack', checked: false },
  { id: 2, title: "I don't know how to do it", checked: false },
];

export default function itemsReducer(state = defaultState, action) {
  switch (action.type) {
    case actionsTypes.ADD_ITEM: {
      const nextState = [...state, action.payload];
      return nextState;
    }
    case actionsTypes.DELETE_ITEM: {
      const { id } = action.payload;
      const nextState = state.slice();
      nextState.splice(nextState.indexOf(id), 1);
      return nextState;
    }
    default:
      return state;
  }
}
