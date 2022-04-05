import { Router } from 'express';

import CreateAdminFlow from "../apis/user/admin/createAdmin/flow"
import CreateAdminValidator from "../apis/user/admin/createAdmin/validation"

import LoginAdminFlow from "../apis/user/admin/loginAdmin/flow"
import LoginAdminValidator from "../apis/user/admin/loginAdmin/validation"

class UserRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.post('/admin', CreateAdminValidator, CreateAdminFlow);
        this.router.post('/admin/login', LoginAdminValidator, LoginAdminFlow);
    }
}

const userRoutes = new UserRoutes();

export default userRoutes.router;