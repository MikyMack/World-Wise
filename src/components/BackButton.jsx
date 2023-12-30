
import { useNavigate } from "react-router-dom";


export const BackButton = () => {
    const navigate = useNavigate();
  return (
    <button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </button>
  );
};
