import React, { HTMLAttributes } from 'react';
import { TGridCell, TGridType } from '../types/grid';

interface IGridProps extends HTMLAttributes<HTMLDivElement> {
  rows: number;
  columns: number;
  grid?: TGridType;
  onCellClick?: (index: number, value: TGridCell) => void;
}

const Grid = ({ rows, columns, grid, onCellClick, id }: IGridProps) => {
  const cellClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const target = e.target as HTMLButtonElement;
    target.innerText = target.innerText === '*' ? ' ' : '*';

    if (onCellClick) onCellClick(index, target.innerText as TGridCell);
  };

  return (
    <div
      id={id}
      className="max-w-[100%] max-h-[300px] grid justify-center gap-3 overflow-auto"
      style={{
        gridTemplateColumns: `repeat(${columns}, 50px)`,
        gridTemplateRows: `repeat(${rows}, 50px)`,
      }}
    >
      {grid &&
        grid.flat().map((cell, i) => {
          return (
            <div
              key={i}
              className="text-3xl flex items-end justify-center bg-quaternary text-quinary"
            >
              {cell}
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
