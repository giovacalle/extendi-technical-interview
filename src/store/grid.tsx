import React, { createContext, useContext, useState } from 'react';

import { TGridType, IGridContext } from '../types';
import { TGridSizeType } from '../types/grid';

const INITIAL_GRID: IGridContext = {
  grid: [[]],
  gridSize: {
    rows: 0,
    columns: 0,
  },
  generationStep: 0,
  setGenerationStep: () => {},
  setGridSize: () => {},
  setGrid: () => {},
  nextMove: () => {},
  reset: () => {},
};

const GridContext = createContext<IGridContext>(INITIAL_GRID);

const GridProvider = ({ children }: { children: React.ReactNode }) => {
  const [grid, setGrid] = useState<TGridType | undefined>(undefined);
  const [gridSize, setGridSize] = useState<TGridSizeType>({
    rows: 4,
    columns: 8,
  });
  const [generationStep, setGenerationStep] = useState(0);

  const reset = () => {
    setGenerationStep(0);
    setGrid(undefined);
  };

  const nextMove = () => {
    setGenerationStep((prev) => prev + 1);
  };

  return (
    <GridContext.Provider
      value={{
        grid,
        gridSize,
        generationStep,
        setGenerationStep,
        setGridSize,
        setGrid,
        nextMove,
        reset,
      }}
    >
      {children}
    </GridContext.Provider>
  );
};

export const useGrid = () => {
  return useContext(GridContext);
};

export default GridProvider;
