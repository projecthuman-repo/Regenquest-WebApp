import { ApolloServer } from 'apollo-server-cloud-functions';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

import { connect } from 'mongoose';

// Construct a schema, using GraphQL schema language
import typeDefs from './backend/graphql/typeDefs';

// Provide resolver functions for your schema fields
import resolvers from './backend/graphql/resolvers';

const MONGODB = process.env.REACT_APP_MONGODB

connect(MONGODB, {useNewUrlParser: true}).then(() => {
  console.log("mongodb connection successful.");
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});

export const handler = server.createHandler();