import React from 'react';
import { useGrid } from '../store/grid';
import Commands from './Comands';
import Grid from './Grid';

const GridWrapper = () => {
  const { grid, gridSize } = useGrid();

  const cssDisabled = grid ? '' : 'opacity-50 pointer-events-none';

  return (
    <>
      {!grid && (
        <p className="text-red-600 text-xl">
          Please set settings for the game first
        </p>
      )}
      <div className={`flex flex-col gap-3 ${cssDisabled}`}>
        <Commands />
        <Grid rows={gridSize.rows} columns={gridSize.columns} grid={grid} />
      </div>
    </>
  );
};

export default GridWrapper;
