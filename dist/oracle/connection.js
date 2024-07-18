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
const oracledb_1 = __importDefault(require("oracledb"));
const env_1 = __importDefault(require("../env"));
class db {
    constructor() {
        this.ExecuteDML = (sql) => __awaiter(this, void 0, void 0, function* () {
            oracledb_1.default.autoCommit = true;
            var Conn = yield oracledb_1.default.getConnection({
                user: env_1.default.dbUser,
                password: env_1.default.dbPassword,
                connectString: env_1.default.dbConnection
            });
            Conn.execute(sql);
            Conn.close();
        });
        this.ExecuteQuery = (sql, param) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                var Conn = yield oracledb_1.default.getConnection({
                    user: env_1.default.dbUser,
                    password: env_1.default.dbPassword,
                    connectString: env_1.default.dbConnection
                });
                oracledb_1.default.autoCommit = true;
                try {
                    yield Conn.execute(sql, param, {
                        outFormat: oracledb_1.default.OUT_FORMAT_OBJECT
                    }, (error, result) => {
                        if (error)
                            return reject(error);
                        else
                            return resolve(result.rows);
                    });
                }
                catch (_a) {
                }
                finally {
                    yield Conn.close();
                }
            }));
        };
    }
}
exports.default = db;
