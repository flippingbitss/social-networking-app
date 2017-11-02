// Schema for sample GraphQL server.
import { makeExecutableSchema } from "graphql-tools";
import rootSchema from "./rootSchema.gql";
import rootResolvers from "./resolvers";

const jsSchema = makeExecutableSchema({
  typeDefs: [rootSchema],
  resolvers: [rootResolvers]
});


// The resulting schema.  We insert our 'root' `Query` object, to tell our
// GraphQL server what to respond to.  We could also add a root `mutation`
// if we want to pass mutation queries that have side-effects (e.g. like HTTP POST)
export default jsSchema;
