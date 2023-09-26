 const express = require('express')
const path = require("path")
const exphbs = require('express-handlebars');
// iniciar 
const app = express()
// configuracion 
app.set("port",process.env.PORT || 4000)
app.set("views", path.join(__dirname, "views"));

app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'                
}));
app.set('view engine', '.hbs'); // Establecer Handlebars como el motor de plantillas predeterminado
app.set('views', path.join(__dirname, 'views'));


// peticion 
app.use(express.urlencoded({extended:false}))

// variables global 

// rutas 
app.use(require("./routes/index.rountes.js"))



// estico
app.use(express.static(path.join(__dirname,"public")))


module.exports = app