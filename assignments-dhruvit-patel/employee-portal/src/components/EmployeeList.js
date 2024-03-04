import { useState } from "react";
import EmployeeTable from "./EmployeeTable";
import EmployeeSearch from "./EmployeeSearch";
import EmployeeAdd from "./EmployeeAdd";
import EmployeeEdit from "./EmployeeEdit";
import EmployeeFilter from "./EmployeeFilter";
import { GET_EMPLOYEES } from "../mutations/EmployeeMutation";
import { useQuery } from "@apollo/client";
const EmployeeList = () => {
  const employees = [
    {
      Id: 1,
      FirstName: "Dhruvit",
      LastName: "Patel",
      Age: 26,
      DateOfJoining: new Date("2024-02-07"),
      Title: "Software Developer",
      Department: "IT",
      EmployeeType: "fullTime",
      CurrentStatus: 1,
    },
    {
      Id: 2,
      FirstName: "Vishva",
      LastName: "Patel",
      Age: 27,
      DateOfJoining: new Date("2024-02-07"),
      Title: "Graphic Designer",
      Department: "Architect Designer",
      EmployeeType: "fullTime",
      CurrentStatus: 1,
    },
    {
      Id: 3,
      FirstName: "Jinal",
      LastName: "Kumbhani",
      Age: 25,
      DateOfJoining: new Date("2024-02-07"),
      Title: "UI/Ux Developer",
      Department: "IT",
      EmployeeType: "fullTime",
      CurrentStatus: 1,
    },
    {
      Id: 4,
      FirstName: "Malay",
      LastName: "Patel",
      Age: 24,
      DateOfJoining: new Date("2024-02-07"),
      Title: "Business Analyst",
      Department: "IT",
      EmployeeType: "fullTime",
      CurrentStatus: 1,
    },
  ];

  const [employeeList, setEmployeeList] = useState([]);
  const [filter, setFilter] = useState("");
  const { loading, error, data } = useQuery(GET_EMPLOYEES, {
    variables: { filter: filter },
    onCompleted: (data) => {
      setEmployeeList(data.employees);
    },
    error: (error) => {
      console.log("Get Employee Error", error);
    },
  });
  const [editEmployee, setEditEmployee] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const handleSearch = (text) => {
    var filteredEmployeeList = employees.filter(
      (employee) =>
        employee.FirstName.toLowerCase().includes(text.toLowerCase()) ||
        employee.LastName.toLowerCase().includes(text.toLowerCase())
    );
    setEmployeeList(filteredEmployeeList);
  };
  const handleFilter = (employeeType) => {
    if (employeeType) {
      setFilter(employeeType);
    } else {
      setFilter("");
    }
  };
  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <>
      {!loading && !error && employeeList.length !== 0 && (
        <>
          <div className="main-heading">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1>Employee Management <span>Portal</span></h1>
                  <p>"To win in the marketplace, you must first win in the workplace."</p>
                  <button onClick={toggleAddForm}>Add Employee</button>
                </div>
                <div className="col-md-6">
                  <img
                    src={require("../images/5239.jpg")}
                    alt="Employee portal"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* // TODO: implement search functionality */}
          {/* <EmployeeSearch handleSearch={handleSearch} /> */}
          {showAddForm && (
            <EmployeeAdd
              setEmployeeList={setEmployeeList}
              toggleAddForm={toggleAddForm}
            />
          )}
          <EmployeeFilter handleFilter={handleFilter} />
          <EmployeeTable
            employeeList={employeeList}
            setEditEmployee={setEditEmployee}
            setEmployeeList={setEmployeeList}
          />

          {editEmployee !== null ? (
            <EmployeeEdit
              editEmployee={editEmployee}
              setEmployeeList={setEmployeeList}
              setEditEmployee={setEditEmployee}
            />
          ) : null}
        </>
      )}
    </>
  );
};

export default EmployeeList;
