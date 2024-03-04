import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EMPLOYEE } from "../mutations/EmployeeMutation";

const EmployeeAdd = ({ setEmployeeList, toggleAddForm }) => {
  const [newEmployee, setNewEmployee] = useState({
    Id: "",
    FirstName: "",
    LastName: "",
    Age: 0,
    DateOfJoining: "",
    Title: "",
    Department: "",
    EmployeeType: "FullTime",
    CurrentStatus: 0,
  });

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [dateOfJoiningError, setDateOfJoiningError] = useState("");
  const [departmentError, setDepartmentError] = useState("");
  const [employeeTypeError, setEmployeeTypeError] = useState("");
  const [currentStatusError, setCurrentStatusError] = useState("");

  const [addEmployee] = useMutation(ADD_EMPLOYEE, {
    variables: {
      FirstName: newEmployee.FirstName,
      LastName: newEmployee.LastName,
      Age: parseInt(newEmployee.Age),
      DateOfJoining: newEmployee.DateOfJoining,
      Title: newEmployee.Title,
      Department: newEmployee.Department,
      EmployeeType: newEmployee.EmployeeType,
      CurrentStatus: parseInt(newEmployee.CurrentStatus),
    },
    onCompleted: (newValue) => {
      setNewEmployee((currEmployeeList) => {
        return {
          ...currEmployeeList,
          Id: newValue.addEmployee.id,
        };
      });
    },
    onError: (error) => {
      console.error("Mutation Error:", error);
    },
  });
  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    // Clear previous validation errors
    setFirstNameError("");
    setLastNameError("");
    setAgeError("");
    setTitleError("");
    setDepartmentError("");
    setCurrentStatusError("");
    setEmployeeTypeError("");
    setDateOfJoiningError("");

    // Basic validations
    if (newEmployee.FirstName == "") {
      setFirstNameError("First Name is required.");
    }

    if (newEmployee.LastName == "") {
      setLastNameError("Last Name is required.");
    }

    if (newEmployee.Title == "") {
      setTitleError("Title is required.");
    }

    if (newEmployee.Department == "") {
      setDepartmentError("Department is required.");
    }
    if (newEmployee.EmployeeType == "") {
      setEmployeeTypeError("Employee Type is required.");
    }
    if (!newEmployee.DateOfJoining) {
      setDateOfJoiningError("Date Of Joining  is required.");
    }

    // Age validation
    const age = parseInt(newEmployee.Age);
    if (isNaN(age) || age < 20 || age > 70) {
      setAgeError("Age must be a number between 20 and 70.");
    }

    // Validation for string fields
    const stringRegex = /^[a-zA-Z\s]+$/;

    if (!stringRegex.test(newEmployee.FirstName)) {
      setFirstNameError("Please enter characters in First Name.");
    }

    if (!stringRegex.test(newEmployee.LastName)) {
      setLastNameError("Please enter characters in Last Name.");
    }

    if (!stringRegex.test(newEmployee.Title)) {
      setTitleError("Please enter characters in Title.");
    }

    if (!stringRegex.test(newEmployee.Department)) {
      setDepartmentError("Please enter characters in Department.");
    }

    // Validation for number fields (CurrentStatus)
    const currentStatus = parseInt(newEmployee.CurrentStatus);
    if (isNaN(currentStatus)) {
      setCurrentStatusError("Current Status must be a valid number.");
    }

    // Check if any validation errors exist
    if (
      newEmployee.FirstName == "" ||
      newEmployee.LastName == "" ||
      newEmployee.Title == "" ||
      newEmployee.Department == "" ||
      isNaN(age) ||
      age < 20 ||
      age > 70
    ) {
      // Display error messages and prevent form submission
      return;
    }

    addEmployee();
    setEmployeeList((currEmployeeList) => {
      return [
        ...currEmployeeList,
        {
          Id: newEmployee.Id,
          FirstName: newEmployee.FirstName,
          LastName: newEmployee.LastName,
          Age: newEmployee.Age,
          DateOfJoining: newEmployee.DateOfJoining,
          Title: newEmployee.Title,
          Department: newEmployee.Department,
          EmployeeType: newEmployee.EmployeeType,
          CurrentStatus: newEmployee.CurrentStatus,
        },
      ];
    });

    setNewEmployee({
      FirstName: "",
      LastName: "",
      Age: 0,
      DateOfJoining: "",
      Title: "",
      Department: "",
      EmployeeType: "",
      CurrentStatus: 0,
    });
    toggleAddForm();
  };

  return (
    <div className="employee-add">
      <div className=" container">
        <h3>Employee Add</h3>
        <form onSubmit={(e) => handleOnSubmit(e)} className="mx-3 py-3">
          <div className="form-group">
            <div className="row">
              <div className="col-md-2">
                <label className="col-form-label">
                  First Name <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  value={newEmployee.FirstName}
                  onChange={(e) =>
                    setNewEmployee((currNewEmployee) => {
                      return {
                        ...currNewEmployee,
                        FirstName: e.target.value,
                      };
                    })
                  }
                />
              </div>

              <div className="col-md-2">
                <label className="col-form-label">
                  Last Name <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  value={newEmployee.LastName}
                  onChange={(e) =>
                    setNewEmployee((currNewEmployee) => {
                      return {
                        ...currNewEmployee,
                        LastName: e.target.value,
                      };
                    })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4">
                {firstNameError && (
                  <div className="error-list">{firstNameError}</div>
                )}
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-4">
                {lastNameError && (
                  <div className="error-list">{lastNameError}</div>
                )}
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-md-2">
                <label className="col-form-label">
                  Age <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  value={newEmployee.Age}
                  onChange={(e) =>
                    setNewEmployee((currNewEmployee) => {
                      return {
                        ...currNewEmployee,
                        Age: e.target.value,
                      };
                    })
                  }
                />
              </div>

              <div className="col-md-2">
                <label className="col-form-label">
                  Date Of Joining <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="date"
                  value={newEmployee.DateOfJoining}
                  onChange={(e) =>
                    setNewEmployee((currNewEmployee) => {
                      return {
                        ...currNewEmployee,
                        DateOfJoining: e.target.value,
                      };
                    })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4">
                {ageError && <div className="error-list">{ageError}</div>}
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-4">
                {dateOfJoiningError && (
                  <div className="error-list">{dateOfJoiningError}</div>
                )}
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-md-2">
                <label className="col-form-label">
                  Department <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  value={newEmployee.Department}
                  onChange={(e) =>
                    setNewEmployee((currNewEmployee) => {
                      return {
                        ...currNewEmployee,
                        Department: e.target.value,
                      };
                    })
                  }
                />
              </div>

              <div className="col-md-2">
                <label className="col-form-label">
                  Title <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  value={newEmployee.Title}
                  onChange={(e) =>
                    setNewEmployee((currNewEmployee) => {
                      return {
                        ...currNewEmployee,
                        Title: e.target.value,
                      };
                    })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4">
                {departmentError && (
                  <div className="error-list">{departmentError}</div>
                )}
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-4">
                {titleError && <div className="error-list">{titleError}</div>}
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-md-2">
                <label className="col-form-label">
                  Employee Type <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <select
                  name="employeeType"
                  value={newEmployee.EmployeeType}
                  onChange={(e) =>
                    setNewEmployee((currNewEmployee) => {
                      return {
                        ...currNewEmployee,
                        EmployeeType: e.target.value,
                      };
                    })
                  }
                >
                  <option value="FullTime">Full Time</option>
                  <option value="PartTime">Part Time</option>
                </select>
              </div>

              <div className="col-md-2">
                <label className="col-form-label">Current Status</label>
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  value={newEmployee.CurrentStatus}
                  onChange={(e) =>
                    setNewEmployee((currNewEmployee) => {
                      return {
                        ...currNewEmployee,
                        CurrentStatus: e.target.value,
                      };
                    })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4">
                {employeeTypeError && (
                  <div className="error-list">{employeeTypeError}</div>
                )}
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-4">
                {currentStatusError && (
                  <div className="error-list">{currentStatusError}</div>
                )}
              </div>
            </div>
          </div>

          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeAdd;
