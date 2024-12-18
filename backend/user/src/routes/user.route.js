"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controler_js_1 = require("../controller/user.controler.js");
var router = express_1.default.Router();
router.post("/register", user_controler_js_1.userRegister);
exports.default = router;
