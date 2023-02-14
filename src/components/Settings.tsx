import React, { useState } from 'react';
import Grid from './Grid';
import Modal from './Modal';

const Settings = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

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
      <Modal isOpen={settingsOpen} title="Game settings" onClose={() => setSettingsOpen(false)}>
        <p>Set the state of the game which you can control in the next step</p>
        <div className="my-4 flex flex-col items-center justify-center gap-3">
          <label htmlFor="generation">Generation number</label>
          <input
            type="number"
            id="generation"
            className="w-24 px-2 py-1 border rounded-md outline-none text-center text-quinary"
          />
          <label htmlFor="size">Grid size (rows * columns)</label>
          <div className="flex gap-3" id="size">
            <input
              type="number"
              id="rows"
              className="w-24 px-2 py-1 border rounded-md outline-none text-center text-quinary"
            />
            <input
              type="number"
              id="columns"
              className="w-24 px-2 py-1 border rounded-md outline-none text-center text-quinary"
            />
          </div>
          <label>Population state</label>
          <Grid rows={4} columns={8} />
        </div>
      </Modal>
    </>
  );
};

export default Settings;
