const userDataMapper = require('../dataMappers/userDataMapper');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



module.exports = {
    async allUsers(req, res, next) {
        try {
            console.log('je suis bien dans le controller');
            const allUsers = await userDataMapper.allUsers();
            res.json({
                data: allUsers
            });
        } catch(error) {
            next(error);
        }
    },

    async createNewUser(req, res, next) {
        try {
            const newUser = req.body;
            const saltRounds = 10;
            const regexPassword = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}/;
            const test = regexPassword.test(newUser.password);
            console.log(test);

            if (!test) {
                res.json({
                    message: 'le mot de passe doit contenir au moins 8 caractères dont 1 majuscule, 1 minuscule, 1chiffre, 1 caractère spécial',
                    data: newUser
                });
            };

            if (test) {
                const hashedPassword = bcrypt.hashSync(newUser.password, saltRounds);
                            
                const createdUser = await userDataMapper.createNewUser({
                    lastname: newUser.lastname,
                    firstname: newUser.firstname,
                    email: newUser.email,
                    password: hashedPassword,
                    username: newUser.username,
                    description: newUser.description
                });   

                    const jwtContent = {userId: createdUser.id, roleId: createdUser.role_id};
                    console.log(jwtContent);
                    const jwtOptions = {
                        algorithm: 'HS256',
                        expiresIn: '3h'
                    };
                    
                    res.json({
                        status: 200,
                        message: 'new user created',
                        data: createdUser,
                        logged: true,
                        username: createdUser.username,
                        token: jwt.sign(jwtContent, process.env.JWTSECRET, jwtOptions)
                    });    
            }    
            /*     res.json({
                    message: 'new user created',
                    data: createdUser
                });

            } else {
                res.json({
                    message: 'le mot de passe doit contenir au moins 8 caractères dont 1 majuscule, 1 minuscule, 1chiffre, 1 caractère spécial',
                    data: newUser.email
                });
            } */
            
        } catch(error) {
            next(error);
        }
    },
    
    async oneUser(req, res, next) {
        try {
            const userId = req.params.id;
            const oneUser = await userDataMapper.oneUser(userId);
            res.json({
                data: oneUser
            });
        } catch(error) {
            next(error);
        }
    },

    async updateUser(req, res, next) {
        try {
            //avant d'updater un user, vérif du role du user :
            //si c'est un administrateur, il peut modifier n'importe quel user
            //si ce n'est pas un administrateur, il ne peut modifier que son profil
            const token = req.headers.authorization.split(' ');
            const tokenDecoded = jwt.verify(token[1], process.env.JWTSECRET);
            const tokenRoleId = tokenDecoded.roleId;
            const tokenUserId = tokenDecoded.userId;

            let userId = null;

            if (tokenRoleId === 2 || (tokenRoleId === 1 && tokenUserId == req.params.id)) {
                userId = req.params.id;
            } else {
                res.status('403').json({message : 'Accès interdit : impossible de modifier un autre membre'});
                next(error);
            };

            const userToUpdate = req.body;
            const regexPassword = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}/;
            const test = regexPassword.test(userToUpdate.password);

            if (test) {
                const saltRounds = 10;
                const hashedPassword = bcrypt.hashSync(userToUpdate.password, saltRounds);
                const userUpdated = await userDataMapper.updateUser(userId, {
                    lastname: userToUpdate.lastname,
                    firstname: userToUpdate.firstname,
                    email: userToUpdate.email,
                    password: hashedPassword,
                    username: userToUpdate.username,
                    description: userToUpdate.description});
                
                res.json({
                    message: 'user updated',
                    data: userUpdated
                });
            } else {
                res.json({
                    message: 'le mot de passe doit contenir au moins 8 caractères dont 1 majuscule, 1 minuscule, 1chiffre, 1 caractère spécial',
                    data: newUser.email
                });
            }
        } catch(error) {
            next(error);
        }
    },

    async deleteUser(req, res, next) {
        try {

            //avant de supprimer un user, vérif du role du user :
            //si c'est un administrateur, il peut supprimer n'importe quel user
            //si ce n'est pas un administrateur, il ne peut supprimer que son profil
            const token = req.headers.authorization.split(' ');
            const tokenDecoded = jwt.verify(token[1], process.env.JWTSECRET);
            const tokenRoleId = tokenDecoded.roleId;
            const tokenUserId = tokenDecoded.userId;

            let userId = null;

            if (tokenRoleId === 2 || (tokenRoleId === 1 && tokenUserId == req.params.id)) {
                userId = req.params.id;
            } else {
                res.status('403').json({message : 'Accès interdit : impossible de supprimer un autre membre'});
                next(error);
            };

            const deleteUserId = userId;
            const userDeleted = await userDataMapper.deleteUser(deleteUserId);
            res.json({
                message: 'membre supprimé',
                data: userDeleted
            });
        } catch(error) {
            next(error);
        }
    },

    async allReviews(req, res, next) {
        try {
            const userId = req.params.id;
            const allReviews = await userDataMapper.allReviews(userId);
            res.json({
                data: allReviews
            });
        } catch(error) {
            next(error);
        }
    },

    async createReview(req, res, next) {
        try {
            const reviewToPublish = req.body;
            const newReview = await userDataMapper.createReview(reviewToPublish);
            res.json({
                message: 'nouvel avis posté',
                data: newReview
            });
        } catch(error) {
            next(error);
        }
    },

};