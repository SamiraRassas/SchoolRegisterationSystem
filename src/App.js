//import logo from './logo.svg';
import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav
        style={{
          
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <div className="menu">
        <Link to="/studentreg">Students</Link>{" "}
        <Link to="/courses">Courses</Link>{" "}
        <Link to="/financialreport">financial Report</Link>{" "}
        </div>
      </nav>

      {/* <Outlet> swaps between the two child routes (<Invoices> and <Expenses>)! */}

      <Outlet />
    </div>
  );
}

export default App;
