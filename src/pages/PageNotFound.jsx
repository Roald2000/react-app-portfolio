import { AiOutlineRollback } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <section className=" text-center">
      <p className="p-2 my-2">Oops it looks like you are lost</p>
      <br />
      <button
        type="button"
        className="btn btn-info"
        onClick={() => navigate(-1)}
      >
        <AiOutlineRollback size={24}/> Go Back
      </button>
    </section>
  );
}
