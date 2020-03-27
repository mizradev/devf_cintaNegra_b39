

const AuthorResolver = require('./AuthorsResolvers');

module.exports = {
    Query:{
        ...AuthorResolver.Query
    },
    Mutation:{
        ...AuthorResolver.Mutation

    }
};