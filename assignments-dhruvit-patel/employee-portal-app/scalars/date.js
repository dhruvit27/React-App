const { GraphQLScalarType, Kind } = require("graphql");

const dateToString = require("../utils/date-to-string");
const stringToDate = require("../utils/string-to-date");

const dateScalar = new GraphQLScalarType({
    name: "Date",
    description: "Date Scalar",
    serialize: (value) => {
        console.log("Serializing Date:", dateToString(value));
        return dateToString(value);
    },
    parseValue: (value) => {
        console.log("Parsing Value:", value);
        return stringToDate(value);
    },
    parseLiteral: (ast) => {
        console.log("Parsing Literal AST:", ast.kind);
        if (ast.kind === Kind.STRING) {
            console.log(stringToDate(ast.value));
            return stringToDate(ast.value);
        }
        throw new Error("Invalid format");
    },
});

module.exports = dateScalar;
