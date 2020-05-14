import * as actionTypes from '../actions/actionTypes';
import { formatTime } from '../formatTime';

const defaultState = [
  {
    id: 0,
    title: 'This is a practice of redux',
    checked: true,
    time: formatTime(),
  },
  {
    id: 1,
    title: 'Made By JOJO Jack',
    checked: false,
    time: formatTime(),
  },
  {
    id: 2,
    title: "I don't know how to do it",
    checked: false,
    time: formatTime(),
  },
];

function listReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.ADD_ITEM: {
      const nextState = [
        {
          id: Date.now(),
          title: action.payload,
          checked: false,
          time: formatTime(),
        },
        ...state,
      ];
      return nextState;
    }

    case actionTypes.DELETE_ITEM: {
      const copyState = [...state];
      const nextState = copyState.filter(
        (item) => item.id !== action.payload.id
      );
      return nextState;
    }

    case actionTypes.CHECK_ITEM: {
      const copyState = [...state];
      const nextState = copyState.map((item) => {
        if (item.id === action.payload.id) {
          item.checked = !item.checked;
          return item;
        } else {
          return item;
        }
      });
      return nextState;
    }

    case actionTypes.SYNC_ITEM: {
      const itemsThatAlreadyExist = action.payload;
      console.log(itemsThatAlreadyExist);
      if (!itemsThatAlreadyExist.length) {
        return [...defaultState];
      }
      const syncItems = [...itemsThatAlreadyExist];
      return syncItems;
    }

    case actionTypes.RESET_ITEM: {
      return defaultState;
    }

    default: {
      return state;
    }
  }
}

export default listReducer;
