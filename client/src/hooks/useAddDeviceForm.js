import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useAddDeviceForm = (initialState, endpoint) => {
  const [formState, setFormState] = useState(initialState);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(endpoint, formState);
      console.log(response);
      setFormState(initialState);
      setError("");
      toast.success("Dane zostały zapisane!", { position: "top-right" });
    } catch (error) {
      console.error(error.response?.data?.error || "Wystąpił błąd");
      setError(error.response?.data?.error || "Wystąpił błąd");
    }
  };

  return {
    formState,
    handleChange,
    handleSubmit,
    error,
  };
};

export default useAddDeviceForm;
