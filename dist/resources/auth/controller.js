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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const service_1 = require("./service");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userCredentials = req.body;
    //   const userData = await dbClient.user.findUnique({
    //     where: {
    //       username: userCredentials.username,
    //     },
    //   });
    //   const passwordValid = await compare(
    //     userCredentials.password,
    //     userData.password
    //   );
    try {
        const loggedInUser = yield service_1.userWithValidation(userCredentials);
        res.json({
            user: { id: loggedInUser.id, username: loggedInUser.username },
        });
    }
    catch (error) {
        res.status(401).json({ error: error.message });
    }
});
exports.loginUser = loginUser;
//# sourceMappingURL=controller.js.map