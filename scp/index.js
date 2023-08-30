const app = require("./serve")


app.listen(app.get("port"), () => {
  console.log(`Server is running on port: `, app.get("port"));
});
