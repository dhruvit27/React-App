import { useState } from "react";

const IssueEdit = ({editIssue,setIssueList,setEditIssue}) =>{
 const [newIssue,setNewIssue] = useState({
    Id:editIssue.Id,
    FirstName: editIssue.FirstName,
    LastName: editIssue.LastName,
    Age: editIssue.Age,
    DateOfJoining: editIssue.DateOfJoining,
    Title: editIssue.Title,
    Department: editIssue.Department,
    EmployeeType:editIssue.EmployeeType,
    CurrentStatus:editIssue.CurrentStatus
 });
 const handleOnSubmit = (evt) => {
    evt.preventDefault();

    setIssueList((currIssueList) => {
        return currIssueList.map((issue) => {
            if (issue.Id === newIssue.Id) {
                return newIssue;
            } else {
                return issue;
            }
        });
    });

    setEditIssue(null);
};

return (
    <div className="edit-wrapper">
        <h3>IssueEdit</h3>
        <form onSubmit={(e) => handleOnSubmit(e)}>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        value={newIssue.FirstName}
                        onChange={(e) =>
                            setNewIssue((currNewIssue) => {
                                return {
                                    ...currNewIssue,
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
                        value={newIssue.LastName}
                        onChange={(e) =>
                            setNewIssue((currNewIssue) => {
                                return {
                                    ...currNewIssue,
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
                        value={newIssue.Age}
                        onChange={(e) =>
                            setNewIssue((currNewIssue) => {
                                return {
                                    ...currNewIssue,
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
                            newIssue.DateOfJoining
                                ? newIssue.DateOfJoining.toISOString().split("T")[0]
                                : ""
                        }
                        onChange={(e) =>
                            setNewIssue((currNewIssue) => {
                                return {
                                    ...currNewIssue,
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
                        value={newIssue.Department}
                        onChange={(e) =>
                            setNewIssue((currNewIssue) => {
                                return {
                                    ...currNewIssue,
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
                        value={newIssue.Title}
                        onChange={(e) =>
                            setNewIssue((currNewIssue) => {
                                return {
                                    ...currNewIssue,
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
                        value={newIssue.EmployeeType}
                        onChange={(e) =>
                            setNewIssue((currNewIssue) => {
                                return {
                                    ...currNewIssue,
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
                        value={newIssue.CurrentStatus}
                        onChange={(e) =>
                            setNewIssue((currNewIssue) => {
                                return {
                                    ...currNewIssue,
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

export default IssueEdit;
