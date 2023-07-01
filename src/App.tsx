import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers';
import FeeStructureList from './components/FeeStructureList';
import AddFeeStructure from './components/AddFeeStructure';

const store = createStore(rootReducer);
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<FeeStructureList />} />
            <Route path="/add" element={<AddFeeStructure />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
