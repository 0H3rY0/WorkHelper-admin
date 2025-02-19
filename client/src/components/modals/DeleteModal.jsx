import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

const CheckAgreementModal = ({ text, func, func2, date }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="button bg-red-500 text-white mt-16 min-w-44 hover:bg-red-400 hover:border-red-400">
          Usuń
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay">
          <Dialog.Content className="modal-content">
            <Dialog.Title>
              <p className="text-xl font-semibold">{text}</p>
            </Dialog.Title>

            <input
              type="date"
              className="bg-white border-white text-black p-0 m-0 text-lg font-bold"
              defaultValue={date}
              onChange={(e) => func2(e.target.value)}
            />

            <div className="w-full flex justify-end items-center gap-4">
              <Dialog.Description>
                {/* Opcjonalny opis modalnego okna */}
              </Dialog.Description>

              <Dialog.Close asChild>
                <button
                  className="button bg-red-500 hover:bg-red-400 text-white hover:border-red-400"
                  onClick={func}
                >
                  Delete
                </button>
              </Dialog.Close>

              <Dialog.Close asChild>
                <button className="button bg-custom-blue hover:bg-custom-blue-light text-white">
                  Cancel
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CheckAgreementModal;
