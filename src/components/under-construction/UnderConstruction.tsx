import { Link } from "react-router-dom";

function UnderConstruction({ logo }: { logo: string }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Website is currently in development. Come back later!</p>
      </header>
      {/* <Link to={`/dev`}>Your Name</Link>; */}
    </div>
  );
}
export default UnderConstruction;
