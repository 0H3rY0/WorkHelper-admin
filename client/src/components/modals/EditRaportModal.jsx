import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import useInputChange from "../../hooks/useInputChange";
// import { useUserStore } from "../../store/useUserStore";
import axios from "axios";
import { toast } from "react-toastify";

const ChangePasswordModal = ({ children }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const initialEditState = {
    status: 1,
    priority: 1,
  };

  const [isOpen, setIsOpen] = useState(false);

  const [editState, setEditState] = useState(initialEditState);
  const [error, setError] = useState(null);

  const { InputChange } = useInputChange(setEditState);

  const handleChangePassword = async () => {
    try {
      await axios.post(`${BACKEND_URL}/api/raport/edit`, editState);

      toast.success("Edytowano zgłoszenie poprawnie!");
      setEditState(initialEditState);
      setError(null);
      setIsOpen(false);
    } catch (error) {
      setError(error?.response?.data?.message || "Błąd serwera!");
    }
  };

  console.log(editState);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay">
          <Dialog.Content className="modal-content">
            <Dialog.Title className="sr-only">Edytuj zgłoszenie</Dialog.Title>

            <div className="modal-header">
              <p>Edytuj zgłoszenie</p>
              <Dialog.Close className="modal-close">
                <IoClose size={28} />
              </Dialog.Close>
            </div>

            <div className="mt-6 space-y-4">
              <select
                name="status"
                className="modal-input"
                onChange={InputChange}
              >
                <option>Status</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <select
                name="priority"
                className="modal-input"
                onChange={InputChange}
              >
                <option>Priorytet</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            {error && (
              <p className="text-custom-red text-sm text-center mt-2">
                {error}
              </p>
            )}

            <div className="modal-actions">
              <Dialog.Close asChild>
                <button className="button bg-custom-blue hover:bg-custom-blue-light">
                  Anuluj
                </button>
              </Dialog.Close>
              <button
                className="button bg-custom-orange"
                onClick={handleChangePassword}
              >
                Edytuj
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ChangePasswordModal;
