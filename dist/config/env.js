"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
const joi = require("joi");
const envsSchema = joi.object({
    PORT: joi.number().required(),
    MONGODB_DATABASE: joi.string().required(),
}).unknown(true);
const { error, value } = envsSchema.validate(process.env);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}
const envVars = value;
exports.envs = {
    port: envVars.PORT,
    mongodb: envVars.MONGODB_DATABASE,
};
//# sourceMappingURL=env.js.map