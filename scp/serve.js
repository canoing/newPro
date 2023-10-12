 const express = require('express')
const path = require("path")
const exphbs = require('express-handlebars');
const morga = require("morgan")
const override = require("method-override")
const flash = require("connect-flash")
const session = require("express-session")

const passport = require('passport');

// iniciar 
const app = express()
require("./config/passport")
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
app.use(morga("dev"))
app.use(express.urlencoded({extended:false}))
app.use(override("_method"))
app.use(session({
    secret : "secreto",
    resave: true, 
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// variables global 
app.use((req, res, next)=> {
  res.locals.published  =  req.flash("published")
  res.locals.error =  req.flash("error")
  res.locals.error_2 =  req.flash("error_2")
  res.locals.user =  req.user || null 
    next()
})

// rutas 
app.use(require("./routes/index.rountes.js"))
app.use(require("./routes/notes.rounte.js"))
app.use(require("./routes/user.rountrs.js"))



// estico
app.use(express.static(path.join(__dirname,"public")))


module.exports = app