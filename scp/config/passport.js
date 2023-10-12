const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/use");

passport.use(new localStrategy({
    usernameField: "email",
    passwordField: "password"
}, async (email, password, done) => {
    // Buscar el usuario por correo electrónico
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return done(null, false, { message: "User not found" });
        }

        // Verificar la contraseña
        const match = await user.matchpassword(password);
        if (match) {
            return done(null, user);
        } else {
            return done(null, false, { message: "Incorrect password" });
        }
    } catch (err) {
        return done(err);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

