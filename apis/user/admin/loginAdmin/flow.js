const bcryptjs = require("bcryptjs");

const Admin = require("../../../../models/db/user/admin");

const { generateJWT } = require("../../../../utils/utils");
const {
  customErrorResponse,
  errorResponse,
} = require("../../../../utils/responses");

const loginAdminFlow = async (req, res) => {
  const { admin_dni, admin_password } = req.body;

  try {
    const admin = await Admin.findOne({
      admin_dni,
    }).exec();

    if (!admin) {
      return customErrorResponse(res, "Usuario no encontrado", 400);
    }

    const validPassword = bcryptjs.compareSync(
      admin_password,
      admin.admin_password
    );

    if (!validPassword) {
      return customErrorResponse(res, "Contraseña incorrecta", 400);
    }

    const token = await generateJWT(admin._id, admin.user_type);
    return res.json({
      ok: true,
      token,
      user_id: admin._id,
    });
  } catch (error) {
    console.log(error);
    errorResponse(
      res,
      "Error: Contacte al administrador de base de datos",
      error,
      500
    );
  }
};

module.exports = loginAdminFlow;
