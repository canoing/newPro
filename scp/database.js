const mongoose = require("mongoose")


const mongo_url = `mongodb://${process.env.NOTES_APP_MONGODB_HOST}/${process.env.NOTES_APP_MONGODB_DATABASE}`



mongoose.connect(mongo_url, {


})
    .then(db => console.log("escucho"))
    .catch(err => console.log(err + "sordo"))

