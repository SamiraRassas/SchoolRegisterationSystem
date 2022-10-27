//import logo from './logo.svg';
import "./App.css";
import { Outlet, Link ,NavLink} from "react-router-dom";
// import {Columns} from "./fragmentss/Columns"
// import {Login} from "./useEffect/login"
import { Authentication } from "./useref/authentication";
import {Table} from "./fragmentss/Table"
// require('dotenv').config();

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
  //   <>
  //   <Table/>
  //   <div>
  //   <h1>Student Register</h1>
  //   <nav
  //     style={{
  //       borderBottom: "solid 1px",
  //       paddingBottom: "1rem",
  //     }}
  //   >
  //    <NavLink to="/authentication">Login</NavLink> {" "}
  //    <NavLink to="/home">Home</NavLink> {" "}
      
  //   </nav>
    

  //   <Outlet />
  // </div>
  // </>
  );
}

export default App;


/* 

<>
    <Authentication/>
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
       <Outlet>
     <Outlet />
     </div> */
