import {rules, schema} from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({}, [
      rules.required(),
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    name: schema.string({}, [
      rules.required(),
    ]),
    password: schema.string({}, [
      rules.required(),
      rules.confirmed(),
    ]),
  })

  public messages = {
    'email.required': 'Please provide email to login.',
    'email.email': 'Please provide valid email to login.',
    'email.unique': 'Another account exists with the same email.',
    'password.required': 'Please provide password to login.',
  }
}
