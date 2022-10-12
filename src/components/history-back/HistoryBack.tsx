import { useNavigate } from "react-router-dom";

function HistoryBack() {
  const navigate = useNavigate();
  return (
    <div
      className="classy-button"
      style={{
        position: "absolute",
        top: "30px",
        left: "30px",

        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        cursor: "pointer",
      }}
      onClick={() => {
        navigate(-1);
      }}
    >
      &#8249; Back
    </div>
  );
}

export default HistoryBack;
