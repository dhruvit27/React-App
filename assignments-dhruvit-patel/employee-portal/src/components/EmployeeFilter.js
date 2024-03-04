const EmployeeFilter = ({ handleFilter }) => {
    return (
        <>
        <div className="mx-3 my-3 filter">
            <h3>Employee Filter</h3>
            <select
                name="employeeType"
                onChange={(e) => handleFilter(e.target.value)}
            >
                <option value=""> Show All</option>
                <option value="FullTime">FullTime</option>
                <option value="PartTime">PartTime</option>
            </select>
            </div>
        </>
    );
};

export default EmployeeFilter;
