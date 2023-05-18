import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index"

const App = () => {
  const selector = useSelector((state) => state.stepper);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="text-2xl font-bold mb-8 text-center">Number Stepper using<br/>React & Redux</header>
      <div className="flex items-center space-x-4">
        <button 
        onClick={()=>{dispatch(decNumber())}}
        className="p-4 bg-white rounded shadow-md">
          <span className="text-gray-700 text-2xl font-bold">-</span>
        </button>
        <input
          type="text"
          className="w-16 p-4 bg-white rounded shadow-md text-center"
          value={selector}
          readOnly
        />
        <button 
        onClick={()=>{dispatch(incNumber())}}
        className="p-4 bg-white rounded shadow-md">
          <span className="text-gray-700 text-2xl font-bold">+</span>
        </button>
      </div>
    </div>
  );
};

export default App;
