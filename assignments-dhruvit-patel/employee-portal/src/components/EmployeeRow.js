const EmployeeRow = (props) => {
  const rowStyle = props.rowStyle;
  const employee = props.employee;
  const setEditEmployee = props.setEditEmployee;
  const setEmployeeList = props.setEmployeeList;
  // const dateOfJoining = employee.DateOfJoining
  //   ? employee.DateOfJoining.toDateString()
  //   : "Date not defined";

  const handleOnEdit = () => {
    setEditEmployee(employee);
  };

  const handleOnDelete = () => {
    setEmployeeList((currEmployeeList) => {
      return currEmployeeList.filter(
        (currEmployee) => currEmployee.Id !== employee.Id
      );
    });
  };
  if (props.employee === undefined) return <h3>EmployeeRow</h3>;
console.log("EMployee in ROw" ,employee);
  return (
    <tr>
      {Object.entries(employee).map(([key, value], i) => {
        if (key !== "__typename" && (key !== "id" && key !=="Id")) {
          return (
            <td key={i}>
              {value}
            </td>
          );
        }
        return null;
      })}
      {/* <td>
        <button onClick={handleOnEdit}>Edit</button>
      </td>
      <td >
        <button onClick={handleOnDelete}>Delete</button>
      </td> */}
    </tr>
  );
};

export default EmployeeRow;
