import { create } from 'zustand';
import { IGridContext } from '../types/grid';

// this func check 8 neighbors of each cell
// and set grid with new values
const setCellsLife = (grid: string[][]) => {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const neighbors = [];

      // Check top neighbor
      if (row > 0) {
        neighbors.push(grid[row - 1][col]);
      }

      // Check right neighbor
      if (col < grid[0].length - 1) {
        neighbors.push(grid[row][col + 1]);
      }

      // Check bottom neighbor
      if (row < grid.length - 1) {
        neighbors.push(grid[row + 1][col]);
      }

      // Check left neighbor
      if (col > 0) {
        neighbors.push(grid[row][col - 1]);
      }

      // Check top left neighbor
      if (row > 0 && col > 0) {
        neighbors.push(grid[row - 1][col - 1]);
      }

      // Check top right neighbor
      if (row > 0 && col < grid[0].length - 1) {
        neighbors.push(grid[row - 1][col + 1]);
      }

      // Check bottom left neighbor
      if (row < grid.length - 1 && col > 0) {
        neighbors.push(grid[row + 1][col - 1]);
      }

      // Check bottom right neighbor
      if (row < grid.length - 1 && col < grid[0].length - 1) {
        neighbors.push(grid[row + 1][col + 1]);
      }

      // update cell value
      if (grid[row][col] === '*') {
        // alive
        if (
          neighbors.filter((n) => n === '*').length < 2 ||
          neighbors.filter((n) => n === '*').length > 3
        ) {
          // if less than 2 or more than 3 neighbors are alive, cell dies
          grid[row][col] = ' ';
        }
      } else {
        // dead
        // if 3 neighbors are alive, cell becomes alive
        grid[row][col] =
          neighbors.filter((n) => n === '*').length === 3 ? '*' : ' ';
      }
    }
  }
};

export const useGrid = create<IGridContext>((set, get) => ({
  grid: undefined,
  gridSize: {
    rows: 3,
    columns: 4,
  },
  generationStep: 0,
  setGenerationStep: (generationStep) =>
    set((state) => ({ ...state, generationStep })),
  setGridSize: (gridSize) => set((state) => ({ ...state, gridSize })),
  setGrid: (grid) => set((state) => ({ ...state, grid })),
  nextMove: () => {
    const grid = get().grid ?? [[]];

    setCellsLife(grid);

    set((state) => ({ ...state, generationStep: state.generationStep + 1 }));
  },
  reset: () => {
    set((state) => ({
      ...state,
      grid: undefined,
      gridSize: {
        rows: 3,
        columns: 4,
      },
      generationStep: 0,
    }));
  },
}));
