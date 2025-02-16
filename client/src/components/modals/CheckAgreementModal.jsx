import * as Dialog from "@radix-ui/react-dialog";

const CheckAgreementModal = ({ children, text, btnText, func }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay">
          <Dialog.Content className="modal-content">
            <Dialog.Title>
              <h1 className="text-xl font-semibold mb-5">{text}</h1>
            </Dialog.Title>
            <Dialog.Description>
              <div className="w-full flex justify-end items-center gap-4">
                <button
                  className="button bg-red-500 hover:bg-red-400 text-white hover:border-red-400"
                  onClick={func}
                >
                  {btnText}
                </button>
                <Dialog.Close>
                  <button className="button bg-custom-blue hover:bg-custom-blue-light text-white">
                    Cancel
                  </button>
                </Dialog.Close>
              </div>
            </Dialog.Description>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CheckAgreementModal;
