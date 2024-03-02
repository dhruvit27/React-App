import IssueRow from "./IssueRow";
const EmployeeTable = ({ issueList, setEditIssue, setIssueList }) => {
  const rowStyle = { border: "1px solid silver", padding: 4 };

  const issueRows =
    issueList &&
    issueList.map((issue) => (
      <IssueRow
        key={issue.id}
        rowStyle={rowStyle}
        issue={issue}
        setEditIssue={setEditIssue}
        setIssueList={setIssueList}
      />
    ));
  // [<IssueRow rowStyle={rowStyle} issue={issue} />,
  // <IssueRow rowStyle={rowStyle} issue={issue} />]
  return (
    <table>
      <thead>
        {issueList && issueList.length > 0 ? (
          <tr>
            {Object.keys(issueList[0]).map((title, index) => (
              <th key={title} style={rowStyle}>
                {title}
              </th>
            ))}
          </tr>
        ) : (
          <tr>
            <td colSpan={(issueList && issueList[0]) ? Object.keys(issueList[0]).length : 0}>No record found.</td>
          </tr>
        )}
      </thead>
      <tbody>{issueRows}</tbody>
    </table>
  );
};
export default EmployeeTable;
