import { useNavigate } from "react-router-dom";
import "../../Buttons.css";

function HomeApps() {
  const navigate = useNavigate();

  const availableApps: {
    title: string;
    path: string;
  }[] = [
    // Background gradients from:
    // https://cssgradient.io/gradient-backgrounds/
    {
      title: "Flag Memorization",
      path: "/apps/flag-app",
    },
    {
      title: "TicTacToe with MinMax algo",
      path: "/apps/tic-tac-toe-app",
    },
  ];

  return (
    <>
      {availableApps.map((val) => {
        return (
          <div
            onClick={() => {
              navigate(val.path);
            }}
            key={val.path}
            className="default-titled-button"
            style={{
              padding: "20px 10px",
              marginBottom: "1vh",
            }}
          >
            <div className="default-button-content">{val.title}</div>
          </div>
        );
      })}
    </>
  );
}

export default HomeApps;
