import React from 'react';
import { useGrid } from '../store/grid';

const Commands = () => {
  const { generationStep, nextMove, reset } = useGrid();

  return (
    <div className="flex flex-col gap-2">
      <p>Generation: {generationStep}</p>
      <div className="flex justify-center items-center gap-3">
        <button
          type="button"
          title="Start the game"
          className="py-2 px-5 bg-green-300 rounded-md text-black"
          onClick={() => nextMove()}
        >
          Next
        </button>
        <button
          type="button"
          title="Reset the game"
          className="py-2 px-5 bg-orange-200 rounded-md text-black"
          onClick={() => reset()}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Commands;
