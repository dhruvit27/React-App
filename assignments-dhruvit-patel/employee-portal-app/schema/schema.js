const dateScalar = require("../scalars/date");
const Employee = require("../models/Employee");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType,
} = require("graphql");

const EmployeeType = new GraphQLObjectType({
  name: "Employee",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    age: { type: GraphQLInt },
    dateOfJoining: { type: dateScalar },
    title: { type: GraphQLString },
    department: { type: GraphQLString },
    employeeType: { type: GraphQLString },
    currentStatus: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    employee: {
      type: EmployeeType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return Employee.findById(args.id);
      },
    },
    employees: {
      type: new GraphQLList(EmployeeType),
      args: {
        filter: { type: GraphQLString }, // Add a filter argument
      },
      resolve: async (parent, args) => {
        try {
          console.log("Resolver - Fetching All Employees", args.filter);
          const filter =
            args.filter !== "" ? { employeeType: args.filter } : {}; // Assuming employeeType is the field you want to filter
          return await Employee.find(filter);
        } catch (error) {
          console.error("Error fetching employees:", error);
          throw error; // rethrow the error to propagate it
        }
      },
    },
  },
});

const mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    //Add a new Employee to database
    addEmployee: {
      type: EmployeeType,
      args: {
        firstName: { type: GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLNonNull(GraphQLInt) },
        dateOfJoining: { type: dateScalar },
        title: { type: GraphQLNonNull(GraphQLString) },
        department: { type: GraphQLNonNull(GraphQLString) },
        employeeType: { type: GraphQLNonNull(GraphQLString) },
        currentStatus: { type: GraphQLInt },
      },
      resolve: (parent, args) => {
        const employee = new Employee({
          firstName: args.firstName,
          lastName: args.lastName,
          age: args.age,
          dateOfJoining: args.dateOfJoining,
          title: args.title,
          department: args.department,
          employeeType: args.employeeType,
          currentStatus: args.currentStatus,
        });
        console.log(employee);
        return employee.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutations,
});
