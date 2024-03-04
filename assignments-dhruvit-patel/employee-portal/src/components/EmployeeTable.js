import EmployeeRow from "./EmployeeRow";
const EmployeeTable = ({ employeeList, setEditEmployee, setEmployeeList }) => {
  const rowStyle = { border: "1px solid silver", padding: 4 };

  const employeeRows =
    employeeList &&
    employeeList.map((employee) => (
      <EmployeeRow
        key={employee.id}
        rowStyle={rowStyle}
        employee={employee}
        setEditEmployee={setEditEmployee}
        setEmployeeList={setEmployeeList}
      />
    ));
  // [<EmployeeRow rowStyle={rowStyle} employee={employee} />,
  // <EmployeeRow rowStyle={rowStyle} employee={employee} />]
  return (
    <div className="container-fluid tableFixHead">
    <table className="table table-striped table-hover px-2">
      <thead className=" bg-light">
        {employeeList && employeeList.length > 0 ? (
          <tr>
            {Object.keys(employeeList[0]).map((title) => {
              if (title !== "__typename" && title !== "id") {
                const formattedTitle = title
                .split(/(?=[A-Z])/) 
                .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
                .join(' '); 
          
                return (
                  <th key={title} >
                    {formattedTitle}
                  </th>
                );
              }
            })}
          </tr>
        ) : (
          <tr>
            <td
              colSpan={
                employeeList && employeeList[0]
                  ? Object.keys(employeeList[0]).length
                  : 0
              }
               className="no-record-font"
            >
              No record found.
            </td>
          </tr>
        )}
      </thead>
      <tbody>{employeeRows}</tbody>
    </table>
    </div>
  );
};
export default EmployeeTable;
