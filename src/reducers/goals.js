import {ADD_GOAL,REMOVE_GOAL} from '../actions/goals';
export default function goals(state = [], action) {
    switch (action.type) {
      case ADD_GOAL:
        return state.concat([action.goal]);
      case REMOVE_GOAL:
        return state.filter((s) => s.id !== action.id);
      case RECIEVE_DATA:
        return action.goals;
      default:
        return state;
    }
  }
