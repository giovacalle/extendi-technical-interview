import React, { useState } from 'react';
import Commands from './components/Comands';
import Grid from './components/Grid';
import Modal from './components/Modal';
import Settings from './components/Settings';

function App() {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <>
      <Modal isOpen={infoOpen} title="Game of life instructions" onClose={() => setInfoOpen(false)}>
        <p className="text-quinary">
          The Game of Life is not your typical computer game. It is a cellular automaton, and was invented by Cambridge
          mathematician John Conway. This game became widely known when it was mentioned in an article published by
          Scientific American in 1970. It consists of a grid of cells which, based on a few mathematical rules, can
          live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the
          course of the game.
        </p>
      </Modal>
      <header className="h-[70px] flex items-center justify-center">
        <h1 className="my-0 mx-auto text-2xl">Game of Life</h1>
        <button
          type="button"
          title="Open instructions modal"
          className="py-2 px-5 bg-tertiary rounded-md text-quinary"
          onClick={() => setInfoOpen(true)}
        >
          Info
        </button>
      </header>
      <main className="w-full sm:w-[60%] my-0 mx-auto flex flex-col items-center gap-7 text-center">
        <Settings />
        <Commands />
        <Grid rows={4} columns={8} />
      </main>
    </>
  );
}

export default App;
