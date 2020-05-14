import * as actionTypes from '../actions/actionTypes';

const initialState = null;

function listNameReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LIST_PICK: {
      const theNameOfTheList = action.payload;
      console.log('the name of the store is ', theNameOfTheList);
      return theNameOfTheList;
    }

    case actionTypes.PAGE_REFRESH: {
      console.log('you refresh the page, now you are in list', action.payload);
      return action.payload;
    }

    default: {
      return state;
    }
  }
}

// export default function listNameReducer(state = initialState, action) {
//   if (action.type === actionTypes.LIST_PICK) {
//     console.log('from reducer');
//     const theNameOfTheList = action.payload;
//     console.log('the name of the store is ', theNameOfTheList);
//     return theNameOfTheList;
//   }
// }

export default listNameReducer;
