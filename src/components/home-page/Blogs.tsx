import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import "../../Buttons.css";

function HomeBlogs() {
  const navigate = useNavigate();

  const availableApps: {
    title: string;
    path: string;
  }[] = [
    // Background gradients from:
    // https://cssgradient.io/gradient-backgrounds/
    {
      title: "Navigating website creation with Azure",
      path: "/blogs/azure-website",
    },
    {
      title: "Configuring an API with Python and Flask",
      path: "/blogs/flask-api",
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

export default HomeBlogs;
