import React from 'react';
import { useSelector , useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"

const App = () => {
  const selector = useSelector((state)=>state.stepper)
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-md shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Number Stepper using React & Redux</h1>
        <div className="flex items-center justify-center space-x-2">
          <button 
          onClick={()=>{dispatch(decNumber())}}
          className="bg-gray-200 hover:bg-gray-300 rounded-md px-4 py-2 shadow-md">
            -
          </button>
          <input
            className="bg-gray-200 px-4 py-2 rounded-md text-center text-gray-700 shadow-md"
            type="text"
            value={selector}
            readOnly
            />
          <button
          onClick={()=>{dispatch(incNumber())}}
          className="bg-gray-200 hover:bg-gray-300 rounded-md px-4 py-2 shadow-md">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
