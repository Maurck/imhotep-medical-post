import Admin from '../models/db/Admin';

export const uniqueAdminDNI = async (adminDNI: string) : Promise<void> => {
    const adminDNIExists = await Admin.findOne({
        admin_dni: adminDNI
    }).exec();
    if (adminDNIExists) {
        throw new Error(`El administrador con el DNI: ${adminDNI} ya existe en la base de datos.`)
    }
}
