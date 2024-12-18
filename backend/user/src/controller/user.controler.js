"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegister = void 0;
var user_model_js_1 = require("../models/user.model.js");
var utils_js_1 = require("../utils/utils.js");
var userRegister = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, email, password, safety, gender, isStudent, contact, isExist, newUser, token, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, name_1 = _a.name, email = _a.email, password = _a.password, safety = _a.safety, gender = _a.gender, isStudent = _a.isStudent, contact = _a.contact;
                if (!name_1 || !email || !password || !gender || !isStudent || !contact) {
                    return [2 /*return*/, res.status(400).json({
                            success: false,
                            message: "please fill the all fields "
                        })];
                }
                return [4 /*yield*/, user_model_js_1.default.findOne({ $or: [{ contact: contact }, { email: email }] })];
            case 1:
                isExist = _b.sent();
                if (isExist) {
                    return [2 /*return*/, res.status(400).json({
                            success: false,
                            message: "already account registered"
                        })];
                }
                return [4 /*yield*/, user_model_js_1.default.create({
                        name: name_1,
                        email: email,
                        password: password,
                        safety: safety,
                        gender: gender,
                        isStudent: isStudent,
                        contact: contact
                    })];
            case 2:
                newUser = _b.sent();
                if (!newUser) {
                    return [2 /*return*/, res.status(500).json({
                            success: false,
                            message: "something went error try again"
                        })];
                }
                token = (0, utils_js_1.generateToken)(newUser);
                res.cookie("auth-token", token, {
                    maxAge: 48 * 60 * 60 * 1000,
                    secure: process.env.NODE_ENV === "production",
                    httpOnly: true
                });
                return [2 /*return*/, res.status(201).json({
                        success: true,
                        message: "register successfuly",
                        token: token,
                        user: newUser
                    })];
            case 3:
                error_1 = _b.sent();
                return [2 /*return*/, res.status(500).json({
                        success: false,
                        message: error_1.message || "internal error"
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.userRegister = userRegister;
