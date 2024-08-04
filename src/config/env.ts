import 'dotenv/config'
import * as joi from "joi";

interface EnvVars {
  PORT: number
  MONGODB_DATABASE: string
}

const envsSchema = joi.object({
  PORT: joi.number().required(),
  MONGODB_DATABASE: joi.string().required(),
}).unknown(true)

const { error, value } = envsSchema.validate(process.env)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const envVars: EnvVars = value

export const envs = {
  port: envVars.PORT,
  mongodb: envVars.MONGODB_DATABASE,
}