import React from 'react';

const StepCounter = ({ currentStep, totalSteps }) => {
  

  return (
    <div className="flex flex-col items-center ">
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-orange-500 h-2.5 rounded-full transition-all duration-500"
        ></div>
      </div>
      <div className="text-2xl font-semibold mb-6">{`Step ${currentStep} of ${totalSteps}`}</div>
    </div>
  );
};

export default StepCounter;
