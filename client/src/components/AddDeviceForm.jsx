const AddDeviceForm = ({
  fields,
  handleSubmitForm,
  onInputChange,
  DeviceState,
}) => {
  return (
    <form
      onSubmit={(e) => handleSubmitForm(e)}
      className="w-full flex flex-col"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {fields.map((field) => (
          <div key={field.id} className="flex flex-col gap-1">
            <label
              htmlFor={field.id}
              className="text-sm font-medium text-custom-blue"
            >
              {field.label}
            </label>
            <input
              value={DeviceState[field.name]}
              id={field.id}
              type={field.type}
              name={field.name}
              onChange={onInputChange}
              className="p-2 border border-custom-blue rounded-md bg-dark-gray text-white focus:outline-none focus:ring-2 focus:ring-custom-blue"
            />
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="button bg-custom-blue text-white mt-10 w-1/6 min-w-32"
      >
        Add
      </button>
    </form>
  );
};

export default AddDeviceForm;
