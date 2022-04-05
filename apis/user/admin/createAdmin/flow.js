const Admin = require('../../../../models/db/user/admin');

const { encryptPassword, generateJWT } = require('../../../../utils/utils');
const { errorResponse } = require('../../../../utils/responses');

const createAdminFlow = async (req, res) => {

    const {
        admin_dni,
        admin_password
    } = req.body;

    const admin = new Admin({
        admin_dni,
        user_type: 0
    });

    try {

        admin.admin_password = encryptPassword(admin_password);
        const token = await generateJWT(admin._id, admin.user_type);

        await admin.save();

        return res.status(201).json({
            ok: true,
            message: "Usuario administrador creado con exito",
            token,
            user_id: admin._id
        });

    } catch (error) {
        console.log(error)
        return errorResponse(res, "Error: Contacte al administrador de base de datos", error, 500);
    }

}

module.exports = createAdminFlow;