import React, { ReactNode } from 'react';

type ModalProps = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, title, onClose, children }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 flex items-center justify-center overflow-x-hidden overflow-y-auto text-quinary">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="relative z-50 w-auto mx-auto my-6">
              <div className="w-max max-w-lg bg-secondary shadow-md rounded-lg">
                <div className="p-4">
                  <div className="flex items-center justify-between gap-5">
                    <h2 className="text-lg font-medium text-primary">
                      {title}
                    </h2>
                    <button
                      type="button"
                      title="Close modal"
                      className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                      onClick={onClose}
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="mt-4">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
