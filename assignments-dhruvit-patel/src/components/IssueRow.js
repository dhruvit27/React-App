const IssueRow = (props) => {
  const rowStyle = props.rowStyle;
  const issue = props.issue;
  const setEditIssue = props.setEditIssue;
  const setIssueList = props.setIssueList;
  const dateOfJoining = issue.DateOfJoining
    ? issue.DateOfJoining.toDateString()
    : "Date not defined";

  const handleOnEdit = () => {
    setEditIssue(issue);
  };

  const handleOnDelete = () => {
    setIssueList((currIssueList) => {
      return currIssueList.filter((currIssue) => currIssue.Id !== issue.Id);
    });
  };

  if (props.issue === undefined) return <h3>IssueRow</h3>;
  return (
    <tr>
      {Object.entries(issue).map((value) => {
        if (value[0] === "DateOfJoining") {
          return (
            <td key={value} style={rowStyle}>
              {dateOfJoining}
            </td>
          );
        }
        return (
          <td key={value} style={rowStyle}>
            {value[1]}
          </td>
        );
      })}
      <td style={rowStyle}>
                <button onClick={handleOnEdit}>Edit</button>
            </td>
            <td style={rowStyle}>
                <button onClick={handleOnDelete}>Delete</button>
            </td>
    </tr>
  );
};

export default IssueRow;
