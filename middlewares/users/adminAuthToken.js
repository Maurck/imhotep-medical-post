const jwt = require('jsonwebtoken');

const Admin = require('../../models/db/user/admin');
const { customErrorResponse } = require('../../utils/responses');

//Auths admin token and puts user info on req.user
const adminAuthToken = async (req, res, next) => {

    const token = req.header('token');
    try {
        const { id, type } = jwt.verify(token, process.env.SECRET_KEY);

        if(type != 0){
            return customErrorResponse(res, "Token inválido: permisos insuficientes", 403);
        }

        const admin = await Admin.findById(id).exec();
        if (!admin) {
            return customErrorResponse(res, "Token inválido: administrador no existe", 400);
        }
        req.user = admin;
        next();
    } catch (error) {
        console.log(error);
        customErrorResponse(res, "Token inválido", 401);
    }
}

module.exports = { adminAuthToken };