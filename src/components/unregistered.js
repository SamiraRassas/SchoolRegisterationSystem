import { getUnregisters } from "../data/student";
import { Outlet } from "react-router-dom";

export default function Unregistered() {
  let unregisters = getUnregisters();
  return (
    <main style={{ padding: "1rem" }}>
    <h2> Unregistered Students</h2>
    
    {unregisters.map((unregister) => (
      <p key={unregister.name}>   {unregister.name}</p>
        ))}
    <Outlet/>
  </main>
  );
}
