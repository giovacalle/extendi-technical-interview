import React, { HTMLAttributes } from 'react';
import { TGridType } from '../types/grid';

interface IGridProps extends HTMLAttributes<HTMLDivElement> {
  rows: number;
  columns: number;
  grid?: TGridType;
  onCellClick?: (index: number) => void;
}

const Grid = ({ rows, columns, grid, onCellClick, id }: IGridProps) => {
  const cellClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const target = e.target as HTMLButtonElement;
    target.innerText = target.innerText === '*' ? '' : '*';

    if (onCellClick) onCellClick(index);
  };

  return (
    <div
      id={id}
      className="grid gap-3 max-w-[100%] max-h-[300px] overflow-auto"
      style={{
        gridTemplateColumns: `repeat(${columns}, 50px)`,
        gridTemplateRows: `repeat(${rows}, 50px)`,
      }}
    >
      {grid &&
        grid.flat().map((cell, i) => {
          console.log(cell);
          return (
            <div key={i} className="text-3xl bg-quaternary text-quinary">
              <button
                type="button"
                className="w-full h-full flex items-end justify-center"
              >
                {cell ? '*' : ' '}
              </button>
            </div>
          );
        })}
      {!grid &&
        Array.from({ length: rows * columns }).map((_, i) => {
          return (
            <div key={i} className="text-3xl bg-quaternary text-quinary">
              <button
                type="button"
                className="w-full h-full flex items-end justify-center"
                onClick={(e) => cellClickHandler(e, i)}
              >
                &nbsp;
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Grid;
