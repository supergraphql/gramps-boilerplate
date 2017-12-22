const { GraphQLServer } = require('graphql-yoga')
const { importSchema } = require('graphql-import')
const { Graphcool } = require('graphcool-binding')
const { prepare } = require('@gramps/gramps')

const gramps = prepare({
  /* GrAMPS parameters */
})

const server = new GraphQLServer({
  schema: gramps.schema,
  context: req => ({
    ...req,
    ...gramps.getContext(req),
  })
})

server.start(() => console.log('Server is running on http://localhost:4000'))
