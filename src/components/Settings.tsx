import React, { useRef, useState } from 'react';
import { useGrid } from '../store/grid';
import { TGridType } from '../types/grid';
import Grid from './Grid';
import Modal from './Modal';

const Settings = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [gridTmp, setGridTmp] = useState<TGridType | undefined>(undefined);
  const generationRef = useRef<HTMLInputElement | null>(null);

  const { setGenerationStep, setGrid, setGridSize } = useGrid();

  const resetSettings = () => {
    setRows(0);
    setColumns(0);
    setGridTmp(undefined);
    setSettingsOpen(false);
  };

  const changeRowsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRows(Number((e.target as HTMLInputElement).value));
  };

  const changeColumnsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumns(Number((e.target as HTMLInputElement).value));
  };

  const gridCellClickHandler = (index: number) => {
    setGridTmp((prev) => {
      if (!prev)
        return Array.from({ length: rows }, () => Array(columns).fill(''));

      const newGrid = [...prev];
      newGrid[Math.floor(index / columns)][index % columns] = '*';
      return newGrid;
    });
  };

  const clickSaveHandler = () => {
    const generationStep = parseInt(generationRef.current?.value ?? '0');

    if (isNaN(generationStep) || generationStep <= 0) {
      alert('Generation number must be a number');
      return;
    }

    setGenerationStep(generationStep);
    setGridSize({ rows, columns });
    setGrid(gridTmp);

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
          Set state of the game in order to control the Life of cells (check
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
          {rows <= 0 && columns <= 0 && (
            <p className="text-red-500">Please set the grid size first</p>
          )}
          {rows <= 0 && columns > 0 && (
            <p className="text-red-500">Please set the rows size first</p>
          )}
          {columns <= 0 && rows > 0 && (
            <p className="text-red-500">Please set the columns size first</p>
          )}
          {rows > 0 && columns > 0 && (
            <Grid
              id="grid-initial"
              rows={rows}
              columns={columns}
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
