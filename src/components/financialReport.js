import { getRegisters } from "../data/student";
import { Link, Outlet } from "react-router-dom";
export function FinancialReport() {
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <Link
          style={{ display: "block", margin: "1rem 0" }}
          to="/financialreport/register"
          key="register"
        >
          Registered Students
        </Link>
        <Link
          style={{ display: "block", margin: "1rem 0" }}
          to="/financialreport/unregister"
          key="unregister"
        >
          Unregistered Students
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
// export function Registered() {
//   let registers = getRegisters();
//   return (
//     <main style={{ padding: "1rem" }}>
//     <h2> registeredtudents</h2>
    
//     {registers.map((register) => (
//       <p>   {register.name}</p>
//         ))}
   
//   </main>
//   );
// }
// export function Unregistered() {
//   let unregisters=getStudentOp("unregister");
//   return(
//     <p> {unregisters.name}
//     </p>
//   )
//   }
  export default FinancialReport;