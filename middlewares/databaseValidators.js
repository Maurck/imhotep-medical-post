const Admin = require('../models/db/user/admin');

const uniqueAdminDNI = async (adminDNI) => {
    const adminDNIExists = await Admin.findOne({
        admin_dni: adminDNI
    }).exec();
    if (adminDNIExists) {
        throw new Error(`El administrador con el DNI: ${adminDNI} ya existe en la base de datos.`)
    }
}

module.exports = {
    uniqueAdminDNI
};