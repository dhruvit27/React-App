import { useState } from "react";

const EmployeeEdit = ({editEmployee,setEmployeeList,setEditEmployee}) =>{
 const [newEmployee,setNewEmployee] = useState({
    Id:editEmployee.Id,
    FirstName: editEmployee.FirstName,
    LastName: editEmployee.LastName,
    Age: editEmployee.Age,
    DateOfJoining: editEmployee.DateOfJoining,
    Title: editEmployee.Title,
    Department: editEmployee.Department,
    EmployeeType:editEmployee.EmployeeType,
    CurrentStatus:editEmployee.CurrentStatus
 });
 const handleOnSubmit = (evt) => {
    evt.preventDefault();

    setEmployeeList((currEmployeeList) => {
        return currEmployeeList.map((employee) => {
            if (employee.Id === newEmployee.Id) {
                return newEmployee;
            } else {
                return employee;
            }
        });
    });

    setEditEmployee(null);
};

return (
    <div className="edit-wrapper">
        <h3>EmployeeEdit</h3>
        <form onSubmit={(e) => handleOnSubmit(e)}>
                <div>
                    <label>First Name</label>
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
                <div>
                    <label>Last Name</label>
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
                <div>
                    <label>Age</label>
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
                <div>
                    <label>Date Of Joining</label>
                    <input
                        type="date"
                        value={
                            newEmployee.DateOfJoining
                                ? newEmployee.DateOfJoining.toISOString().split("T")[0]
                                : ""
                        }
                        onChange={(e) =>
                            setNewEmployee((currNewEmployee) => {
                                return {
                                    ...currNewEmployee,
                                    DateOfJoining: new Date(e.target.value),
                                };
                            })
                        }
                    />
                </div>
                <div>
                <label>Department</label>
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
                <div>
                    <label>Title</label>
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
                <div>
                    <label>EmployeeType</label>
                    <input
                        type="text"
                        value={newEmployee.EmployeeType}
                        onChange={(e) =>
                            setNewEmployee((currNewEmployee) => {
                                return {
                                    ...currNewEmployee,
                                    EmployeeType: e.target.value,
                                };
                            })
                        }
                    />
                </div>
                <div>
                    <label>CurrentStatus</label>
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
                <button type="submit">Save</button>
            </form>
    </div>
);
};

export default EmployeeEdit;
