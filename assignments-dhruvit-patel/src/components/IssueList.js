import { useState } from "react";
import IssueTable from "./IssueTable";
import IssueSearch from "./IssueSearch";
import IssueAdd from "./IssueAdd";
import IssueEdit from "./IssueEdit";

const IssueList = () => {
  const issues = [
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

  const [issueList, setIssueList] = useState(issues);
  const [editIssue, setEditIssue] = useState(null);

  const handleSearch = (text) => {
    var  filteredIssueList = issues.filter(
      (issue) =>
        issue.FirstName.toLowerCase().includes(text.toLowerCase()) ||
        issue.LastName.toLowerCase().includes(text.toLowerCase())
    );
    setIssueList(filteredIssueList);
  };
  return (
    <>
      <IssueSearch handleSearch={handleSearch} />
      <IssueTable
        issueList={issueList}
        setEditIssue={setEditIssue}
        setIssueList={setIssueList}
      />
      <IssueAdd setIssueList={setIssueList} />
      {editIssue !== null ? (
        <IssueEdit
          editIssue={editIssue}
          setIssueList={setIssueList}
          setEditIssue={setEditIssue}
        />
      ) : null}
    </>
  );
};

export default IssueList;
