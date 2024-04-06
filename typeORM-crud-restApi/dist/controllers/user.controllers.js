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
exports.getUser = exports.deleteUser = exports.updateUser = exports.getUsers = exports.createUser = void 0;
const User_1 = require("../entities/User");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, lastname } = req.body;
        const user = new User_1.User();
        user.firstname = firstname;
        user.lastname = lastname;
        yield user.save();
        console.log(user);
        return res.json(user);
    }
    catch (e) {
        if (e instanceof Error) {
            res.status(500).json(e.message);
        }
    }
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.User.find();
        return res.json(users);
    }
    catch (e) {
        if (e instanceof Error) {
            return res.status(500).json({ message: e.message });
        }
    }
});
exports.getUsers = getUsers;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstname, lastname } = req.body;
    const { id } = req.params;
    try {
        const user = yield User_1.User.findOneBy({ id: parseInt(id) });
        if (!user)
            throw new Error("user does not exist");
        yield User_1.User.update({ id: parseInt(id) }, req.body);
        res.sendStatus(204);
    }
    catch (e) {
        if (e instanceof Error) {
            return res.status(500).json({ message: e.message });
        }
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield User_1.User.delete({ id: parseInt(id) });
        if (result.affected === 0) {
            return res.status(404).json({ message: "user not found" });
        }
        res.sendStatus(204);
    }
    catch (e) {
        if (e instanceof Error) {
            res.json({ message: e.message });
        }
    }
});
exports.deleteUser = deleteUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield User_1.User.findOneBy({ id: parseInt(id) });
        res.json(user);
    }
    catch (e) {
        if (e instanceof Error) {
            res.status(500).json({ message: e.message });
        }
    }
});
exports.getUser = getUser;
