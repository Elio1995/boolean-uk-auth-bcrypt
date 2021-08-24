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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userWithValidation = void 0;
const dbClient_1 = __importDefault(require("../../utils/dbClient"));
const bcrypt_1 = require("bcrypt");
const userWithValidation = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield dbClient_1.default.user.findUnique({
        where: { username: userData.username },
    });
    if (!foundUser)
        throw new Error("Username/Password incorrect");
    const isPasswordValid = yield bcrypt_1.compare(userData.password, foundUser.password);
    if (!isPasswordValid)
        throw new Error("Username/Password incorrect");
    return foundUser;
});
exports.userWithValidation = userWithValidation;
//# sourceMappingURL=service.js.map