import { Router } from 'express';

import CreateAdminFlow from "../apis/user/admin/createAdmin/flow"
import CreateAdminValidator from "../apis/user/admin/createAdmin/validation"

import LoginAdminFlow from "../apis/user/admin/loginAdmin/flow"
import LoginAdminValidator from "../apis/user/admin/loginAdmin/validation"

import CreateMedicFlow from "../apis/user/medic/createMedic/flow"
import CreateMedicValidator from "../apis/user/medic/createMedic/validation"

import LoginMedicFlow from "../apis/user/medic/loginMedic/flow"
import LoginMedicValidator from "../apis/user/medic/loginMedic/validation"


class UserRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.post('/admin', CreateAdminValidator, CreateAdminFlow);
        this.router.post('/admin/login', LoginAdminValidator, LoginAdminFlow);

        this.router.post('/medic', CreateMedicValidator, CreateMedicFlow);
        this.router.post('/medic/login', LoginMedicValidator, LoginMedicFlow);
    }
}

const userRoutes = new UserRoutes();

export default userRoutes.router;