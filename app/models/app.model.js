const mongoose = require('mongoose')

const AppSchema = mongoose.Schema({
    message: String
})

module.exports = mongoose.model("App", AppSchema)


/*The mongoose.model() call takes two arguments:

The model name - "App"
The schema - AppSchema
This defines a Mongoose model named App which can then be used to interact with MongoDB documents.

So in summary, this code does the following:

Requires the mongoose module
Defines a schema named AppSchema with a message string field
Creates a Mongoose model named App from that schema
Exports the App model so it can be required and used elsewhere
*/
