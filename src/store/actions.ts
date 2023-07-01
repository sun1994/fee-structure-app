import FeeStructure from '../types/FeeStructure';
export const addFeeStructure = (feeStructure: FeeStructure) => {
    return {
      type: 'ADD_FEE_STRUCTURE',
      payload: feeStructure,
    };
  };