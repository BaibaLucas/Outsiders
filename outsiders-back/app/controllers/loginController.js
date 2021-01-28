const loginDataMapper = require('../dataMappers/loginDataMapper');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


module.exports = {
    async login(req, res, next) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const login = await loginDataMapper.login(email);
            const isPasswordValid = bcrypt.compareSync(password, login.password);
            if (!isPasswordValid) {
                res.locals.notFound = "identification invalide";
                next();
                return;
            }
            if (isPasswordValid) {
                const jwtContent = {userId: login.id};
                const jwtOptions = {
                    algorithm: 'HS256',
                    expiresIn: '3h'
                };
                res.json({
                    message: 'utilisateur connecté',
                    data: login,
                    logged: true,
                    username: login.username,
                    token: jwt.sign(jwtContent, process.env.JWTSECRET, jwtOptions)
                });    
            }
        } catch(error) {
            next(error);
        }
    },
};
