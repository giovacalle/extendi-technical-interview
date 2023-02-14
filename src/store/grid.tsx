// todo:
// 0 definire interface per gestire grid e setting grid (potra essere gestito tutto dallo stesso context ?)
// 1 gestire il context per le settings e poi per l'effettivo status (stop, reset, start)

// una volta settate le settings i commands devono essere abilitati (prima no)
// ogni volta che si preme su next deve essere stampata una 'generation number' (incrementata di 1, recuoerata dal context)

// capire graficamente come gestire le celle (ovvero sarebbe giusto fare una sorta di
// gestione in base alle righe e colonne passate cosi da rimpicciolire/ingrandire la griglia)

// algoritmo per il calcolo della prossima generazione

import React, { createContext, useContext, useState } from 'react';

type GridType = string[][];

type GridContextType = {
  grid: GridType;
  rows: number;
  columns: number;
  setGridSize: (rows: number, columns: number) => void;
  setGridState: (grid: GridType) => void;
};

const GridContext = createContext<GridContextType | null>(null);

const GridProvider = ({ children }: { children: React.ReactNode }) => {
  const [grid, setGrid] = useState<GridType>([]);
  const [rows, setRows] = useState<number>(4);
  const [columns, setColumns] = useState<number>(8);

  const setGridSize = (rows: number, columns: number) => {
    setRows(rows);
    setColumns(columns);
  };

  const setGridState = (grid: GridType) => {
    setGrid(grid);
  };

  return (
    <GridContext.Provider value={{ grid, rows, columns, setGridSize, setGridState }}>{children}</GridContext.Provider>
  );
};

const useGrid = () => {
  return useContext(GridContext);
};
