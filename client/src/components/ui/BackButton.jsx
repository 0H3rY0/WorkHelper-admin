import { useNavigate } from "react-router";

const BackButton = ({ path }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(path)}
      className="text-[16px] button content-center bg-custom-blue text-white flex items-center justify-center gap-2 hover:bg-custom-blue-light"
    >
      Wróć
    </button>
  );
};

export default BackButton;
