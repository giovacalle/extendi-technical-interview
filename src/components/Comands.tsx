import React from 'react';

const Commands = () => {
  return (
    <div className="flex justify-center items-center gap-3 mt-5">
      <button type="button" title="Start the game" className="py-2 px-5 bg-tertiary rounded-md text-quinary">
        Start
      </button>
      <button type="button" title="Stop the game" className="py-2 px-5 bg-tertiary rounded-md text-quinary">
        Stop
      </button>
      <button type="button" title="Reset the game" className="py-2 px-5 bg-tertiary rounded-md text-quinary">
        Reset
      </button>
    </div>
  );
};

export default Commands;
