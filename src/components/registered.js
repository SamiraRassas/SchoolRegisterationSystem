import { getRegisters } from "../data/student";
import { Outlet } from "react-router-dom";

export default function Registered() {
  let registers = getRegisters();
  return (
    <main style={{ padding: "1rem" }}>
    <h2> registered students</h2>
    
    {registers.map((register) => (
      <p key={register.name}> {register.name}</p>
        ))}
    <Outlet/>
  </main>
  );
}
