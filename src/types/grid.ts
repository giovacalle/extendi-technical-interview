export type TGridCell = '*' | '';

export type TGridType = TGridCell[][] | undefined;

export type TGridSizeType = {
  rows: number;
  columns: number;
};

export interface IGridContext {
  grid: TGridType;
  gridSize: TGridSizeType;
  generationStep: number;
  setGenerationStep: (generation: number) => void;
  setGridSize: (size: TGridSizeType) => void;
  setGrid: (grid: TGridType) => void;
  nextMove: () => void;
  reset: () => void;
}
