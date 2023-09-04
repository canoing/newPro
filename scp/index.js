require("dotenv").config()

const app = require("./serve")
require("./database")
console.log(process.env.xf)
console.log(`mongodb://${process.env.NOTES_APP_MONGODB_HOST}/${process.env.NOTES_APP_MONGODB_DATABASE}`)

app.listen(app.get("port"), () => {
  console.log(`Server is running on port: `, app.get("port"));
});