import { Router } from 'express';
import CreateAdminFlow from "../apis/user/admin/createAdmin/flow"
import CreateAdminValidator from "../apis/user/admin/createAdmin/validation"

class UserRoutes {
    router: Router;

    // loginAdminFlow;
    // loginAdminValidator;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.post('/admin', CreateAdminValidator, CreateAdminFlow);
        // this.router.post('/admin/login', this.loginAdminValidator, this.loginAdminFlow);
    }
}

const userRoutes = new UserRoutes();

export default userRoutes.router;