const mongoose = require("mongoose")


const mongo_url = process.env.NOTES_APP_MONGODB_HOST




mongoose.connect(mongo_url, {


})
    .then(db => console.log("escucho"))
    .catch(err => console.log(err + "sordo"))

    