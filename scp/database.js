const mongoose = require("mongoose")


const mongo_url = "mongodb+srv://josebulac960:7XgZywrJrfElkI41@iedosocial.0uqhgqe.mongodb.net/?retryWrites=true&w=majority"



mongoose.connect(mongo_url, {


})
    .then(db => console.log("escucho"))
    .catch(err => console.log(err + "sordo"))

    