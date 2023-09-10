 const express = require('express')
const path = require("path")
// iniciar 
const app = express()
// configuracion 
app.set("port",process.env.PORT || 4000)
app.set("views",path.join(__dirname +  "views"))
// peticion 
app.use(express.urlencoded({extended:false}))

// variables global 



// rutas
app.get('/', (req,res ) => {

    res.sendFile(path.join(__dirname, 'views', 'registro.html'));

}
)
// estico
app.use(express.static(path.join(__dirname,"public")))


module.exports = app