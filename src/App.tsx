import logo from "./construction.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/home-page/Home";
import FlagApp from "./components/apps/flag-app/FlagApp";
import UnderConstruction from "./components/under-construction/UnderConstruction";

import TicTacToe from "./components/apps/tic-tac-toe/TicTacToe";

import AzureWebsiteBlog from "./components/blogs/AzureWebsiteBlog";
import FlaskAPIBlog from "./components/blogs/FlaskAPIBlog";

// All available component mappings
const components: {
  URIPointer: string;
  JSXPointer: JSX.Element;
}[] = [
  { URIPointer: "/", JSXPointer: <Home /> },

  // APPS
  { URIPointer: "/apps/flag-app", JSXPointer: <FlagApp /> },
  { URIPointer: "/apps/tic-tac-toe-app", JSXPointer: <TicTacToe /> },

  // BLOGS
  { URIPointer: "/blogs/azure-website", JSXPointer: <AzureWebsiteBlog /> },
  { URIPointer: "/blogs/flask-api", JSXPointer: <FlaskAPIBlog /> },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {process.env.REACT_APP_STATUS === "under-construction" ? (
            // If app is not under construction, unpack all endpoints included in router
            <Route path="/" element={<UnderConstruction logo={logo} />} />
          ) : (
            // If website construction is underway, don't redirect '/' to main app. Only include dev route.
            components.map((el) => {
              return (
                <Route
                  key={el.URIPointer}
                  path={el.URIPointer}
                  element={el.JSXPointer}
                />
              );
            })
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
