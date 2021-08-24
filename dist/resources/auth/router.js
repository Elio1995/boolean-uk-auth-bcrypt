"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = express_1.Router();
router.route("/login").post(controller_1.loginUser);
exports.default = router;
//# sourceMappingURL=router.js.map