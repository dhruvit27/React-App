import {gql} from "@apollo/client";

export const GET_EMPLOYEES = gql`
    query getEmployees($filter: String) {
        employees(filter:$filter)  {
            id
            firstName
            lastName
            age
            dateOfJoining
            title
            department
            employeeType
            currentStatus
        }
    }
`;
export const ADD_EMPLOYEE = gql`
    mutation addEmployee(
        $FirstName: String!
    $LastName: String!
    $Age: Int!
    $DateOfJoining: Date!
    $Title: String!
    $Department: String!
    $EmployeeType: String!
    $CurrentStatus: Int
    ) {
        addEmployee(
            firstName: $FirstName
            lastName: $LastName
            age: $Age
            dateOfJoining: $DateOfJoining
            title: $Title
            department: $Department
            employeeType: $EmployeeType
            currentStatus: $CurrentStatus
        ) {
            id
            firstName
            lastName
            age
            dateOfJoining
            title
            department
            employeeType
            currentStatus
        }
    }
`;
