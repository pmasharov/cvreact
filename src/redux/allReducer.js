import {
  ACTIVATE_LINK
} from './countersAC';


const initState = {
  activeLink: null
}

function allReducer(state = initState, action) {
  switch (action.type) {
    case ACTIVATE_LINK:
      {
        // надо создать новый счётчик
        // редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!
        // console.log('action:',action);
        // console.log('state до обработки редьюсером:',state);
        // let newState={...state};
        let newState = { ...state,
          activeLink: action.counterid
        };
        // newState.cnt++;
        // console.log('state после обработки редьюсером:',newState);
        return newState;
      }

    default:
      return state;
  }
}

export default allReducer;
