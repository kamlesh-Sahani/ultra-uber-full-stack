"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_route_js_1 = require("./routes/user.route.js");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/user", user_route_js_1.default);
exports.default = app;
