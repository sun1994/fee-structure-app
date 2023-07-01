import { render, screen, fireEvent } from '@testing-library/react';
import { createStore } from 'redux';
import rootReducer from '../store/reducers';
import { Provider } from 'react-redux';
import App from '../App';
import FeeStructureList from './FeeStructureList';

const feeStructureList = [
  {
    id: 1,
    name: 'Fee Structure Demo',
    frequency: 'Yearly',
    installment: 9,
    amount: 1500,
    registerFee: 51,
    course: ['PHP', 'React JS'],
    studentCount: 25,
    status: true,
  },
  // Add more fee structures here
]
describe("<FeeStructureList />", () => {
  test('Render List File', () => {
    render (<FeeStructureList feeStructureList={feeStructureList} />)
  });
 })
