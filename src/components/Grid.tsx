import React from 'react';

const Grid = ({ rows, columns }: { rows: number; columns: number }) => {
  const cellClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    target.innerText = target.innerText === '*' ? '' : '*';
  };

  return (
    <div
      className="grid gap-3"
      style={{
        gridTemplateColumns: `repeat(${columns}, 50px)`,
        gridTemplateRows: `repeat(${rows}, 50px)`,
      }}
    >
      {Array.from({ length: rows * columns }).map((_, i) => {
        return (
          <div key={i} className="text-3xl bg-quaternary text-quinary">
            <button type="button" className="w-full h-full flex items-end justify-center" onClick={cellClickHandler}>
              &nbsp;
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
