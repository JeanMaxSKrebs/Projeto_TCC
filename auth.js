const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {
    //configuraremos o passport aqui
    function findUser(username){
        return users.find(user => user.username === username);
    }
    
    function findUserById(id){
        return users.find(user => user._id === id);
    }
    
    
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    
    passport.deserializeUser((id, done) => {
        try {
            const user = findUserById(id);
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });
}