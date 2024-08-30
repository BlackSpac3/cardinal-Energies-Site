import { useState } from "react";
import ViewEmployees from "../components/employees_page_components/ViewEmployees";
import AddEmployee from "../components/employees_page_components/AddEmployee";

const Employees = () => {
  const [employeesPage, setEmployeesPage] = useState("view");

  return employeesPage == "view" ? (
    <ViewEmployees setEmployeesPage={setEmployeesPage} />
  ) : (
    <AddEmployee setEmployeesPage={setEmployeesPage} />
  );
};
export default Employees;
