"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var generateToken = function (newUser) {
    var secret = process.env.JWT_SECRET || "sfsfkjds";
    var token = jsonwebtoken_1.default.sign({ _id: newUser._id }, secret, { expiresIn: "2d" });
    return token;
};
exports.generateToken = generateToken;
