import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./components/courses";
import FinancialReport from "./components/financialReport";
import Registered from "./components/registered";
import Unregistered from "./components/unregistered";
// import {default as Registered} from "./components/financialReport";
// import {default as Unregistered} from "./components/financialReport";
import StudentReg from "./components/studentReg";
import StudentRegParams from "./components/studentRegParams";
import CoursesParams from "./components/coursesParams";
import { AddNewStudent } from "./components/addNewStudent";
import { Authentication } from "./useref/authentication";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseId" element={<CoursesParams />} />
        </Route>
        <Route path="financialreport/" element={<FinancialReport />}>
          <Route path="register" element={<Registered />} />
          <Route path="unregister" element={<Unregistered />} />
        </Route>
        <Route path="studentreg" element={<StudentReg />}>
          <Route path=":studentId" element={<StudentRegParams />} />
        </Route>
        <Route path="addnewstudent" element={<AddNewStudent />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>

  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />}>
  //       <Route path="authentication" element={<Authentication />}>
  //       </Route>
  //       <Route
  //         path="*"
  //         element={
  //           <main style={{ padding: "1rem" }}>
  //             <p>There's nothing here!</p>
  //           </main>
  //         }
  //       />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
