import React, { useRef, useState } from 'react';
import { useGrid } from '../store/grid';
import { TGridCell, TGridSizeType, TGridType } from '../types/grid';
import Grid from './Grid';
import Modal from './Modal';

const Settings = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const generationRef = useRef<HTMLInputElement | null>(null);
  const [gridSizeTmp, setGridSizeTmp] = useState<TGridSizeType>({
    rows: 0,
    columns: 0,
  });
  const gridTmp = useRef<TGridType>(undefined);

  const { setGenerationStep, setGrid, setGridSize } = useGrid();

  const resetSettings = () => {
    setGridSizeTmp({ rows: 0, columns: 0 });
    gridTmp.current = undefined;
    setSettingsOpen(false);
  };

  const changeRowsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rows = parseInt(e.target.value);
    setGridSizeTmp((prev) => ({ ...prev, rows: isNaN(rows) ? 0 : rows }));
    gridTmp.current = undefined;
  };

  const changeColumnsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const columns = parseInt(e.target.value);
    setGridSizeTmp((prev) => ({
      ...prev,
      columns: isNaN(columns) ? 0 : columns,
    }));
    gridTmp.current = undefined;
  };

  const gridCellClickHandler = (index: number, value: TGridCell) => {
    if (!gridTmp.current) {
      gridTmp.current = Array.from({ length: gridSizeTmp.rows }, () =>
        Array(gridSizeTmp.columns).fill(''),
      );
    }

    const newGrid = [...gridTmp.current];

    // if we have a matrix we could make it flat and get the index
    // but in this case is the opposite cause we have the index and not the coordinates
    newGrid[Math.floor(index / gridSizeTmp.columns)][
      index % gridSizeTmp.columns
    ] = value;

    gridTmp.current = newGrid;
  };

  const clickSaveHandler = () => {
    const generationStep = parseInt(generationRef.current?.value ?? '0');

    if (isNaN(generationStep) || generationStep <= 0) {
      alert('Generation number must be a number');
      return;
    }

    setGenerationStep(generationStep);
    setGridSize(gridSizeTmp);
    setGrid(gridTmp.current);
    resetSettings();
  };

  return (
    <>
      <button
        type="button"
        title="Open instructions modal"
        className="w-max py-2 px-5 bg-tertiary rounded-md text-quinary"
        onClick={() => setSettingsOpen((prev) => !prev)}
      >
        Game settings
      </button>
      <Modal
        isOpen={settingsOpen}
        title="Game settings"
        onClose={() => resetSettings()}
      >
        <p>
          Set state of the game in order to control the life of cells (check
          info for details)
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-4">
          <label htmlFor="generation">Generation number</label>
          <input
            type="number"
            id="generation"
            ref={generationRef}
            className="w-24 px-2 py-1 border rounded-md outline-none text-center text-quinary"
          />
          <label htmlFor="size">Grid size (rows * columns)</label>
          <div className="flex gap-3" id="size">
            <input
              type="number"
              id="rows"
              className="w-24 px-2 py-1 border rounded-md outline-none text-center text-quinary"
              onChange={changeRowsHandler}
            />
            <input
              type="number"
              id="columns"
              className="w-24 px-2 py-1 border rounded-md outline-none text-center text-quinary"
              onChange={changeColumnsHandler}
            />
          </div>
          <label htmlFor="grid-initial">Population state</label>
          {gridSizeTmp.rows <= 0 && gridSizeTmp.columns <= 0 && (
            <p className="text-red-500">Please set the grid size first</p>
          )}
          {gridSizeTmp.rows <= 0 && gridSizeTmp.columns > 0 && (
            <p className="text-red-500">Please set the rows size first</p>
          )}
          {gridSizeTmp.columns <= 0 && gridSizeTmp.rows > 0 && (
            <p className="text-red-500">Please set the columns size first</p>
          )}
          {gridSizeTmp.rows > 0 && gridSizeTmp.columns > 0 && (
            <Grid
              id="grid-initial"
              rows={gridSizeTmp.rows}
              columns={gridSizeTmp.columns}
              onCellClick={gridCellClickHandler}
            />
          )}
          <button
            className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded`}
            onClick={clickSaveHandler}
            disabled={false}
          >
            Save
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Settings;
