import "./styles/App.css";
import Resume from "./components/Resume";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <div className="page-container flex-row">
        <Sidebar />
        <div className="resume-container">
          <Resume />
        </div>
      </div>
    </>
  );
}

export default App;
