import { Kind, GraphQLError, GraphQLScalarType } from 'graphql';
import { processValue } from './utilities';

export const GraphQLPositiveInt: GraphQLScalarType =
  /*#__PURE__*/ new GraphQLScalarType({
    name: 'PositiveInt',

    description: 'Integers that will have a value greater than 0.',

    serialize(value) {
      return processValue(value, 'PositiveInt');
    },

    parseValue(value) {
      return processValue(value, 'PositiveInt');
    },

    parseLiteral(ast) {
      if (ast.kind !== Kind.INT) {
        throw new GraphQLError(
          `Can only validate integers as positive integers but got a: ${ast.kind}`,
        );
      }

      return processValue(ast.value, 'PositiveInt');
    },
    extensions: {
      codegenScalarType: 'number',
    },
  });
