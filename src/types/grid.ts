import { Dispatch, SetStateAction } from 'react';

export type TGridType = string[][];

export type TGridSizeType = {
  rows: number;
  columns: number;
};

export interface IGridContext {
  grid: TGridType;
  gridSize: TGridSizeType;
  generationStep: number;
  setGenerationStep: Dispatch<SetStateAction<number>>;
  setGridSize: Dispatch<SetStateAction<TGridSizeType>>;
  setGrid: Dispatch<SetStateAction<TGridType>>;
  nextMove: () => void;
  reset: () => void;
}
