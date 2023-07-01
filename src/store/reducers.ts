import { combineReducers } from 'redux';
import FeeStructure from '../types/FeeStructure';

const feeStructuresReducer = (state: FeeStructure[] = [], action: any) => {
    console.log("state, ", state);
    console.log("Actiondata ", action);
    
  switch (action.type) {
    case 'ADD_FEE_STRUCTURE':
      return [...state, action.payload];
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  feeStructures: feeStructuresReducer,
});

export default rootReducer;
