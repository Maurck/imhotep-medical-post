"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const flow_1 = __importDefault(require("../apis/user/admin/createAdmin/flow"));
const validation_1 = __importDefault(require("../apis/user/admin/createAdmin/validation"));
class UserRoutes {
    // loginAdminFlow;
    // loginAdminValidator;
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.post('/admin', validation_1.default, flow_1.default);
        // this.router.post('/admin/login', this.loginAdminValidator, this.loginAdminFlow);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
