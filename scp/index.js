require("dotenv").config()

const app = require("./serve")
require("./database")

console.log(process.env.NOTES_APP_MONGODB_HOST)

app.listen(app.get("port"), () => {
  console.log(`Server is running on port: `, app.get("port"));
});