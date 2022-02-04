// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//const { validateAll } = use( 'Validator' );

import RegisterValidator from "App/Validators/Auth/RegisterValidator";
import User from "App/Models/User";
import LoginValidator from "App/Validators/Auth/LoginValidator";
import Hash from "@ioc:Adonis/Core/Hash";

export default class AuthController {

  public async loginPost({auth, request, response}) {

    const payload = await request.validate(LoginValidator)

    const token = await auth.use('api').attempt(payload.email, payload.password)

    if (token) {
      const user = await User.findBy('email', payload.email);

      return {token, user};
    }

    return response.badRequest("Something went wrong.");
  }

  public async registerPost({request, auth, response}) {
    let payload = await request.validate(RegisterValidator)

    payload.password = await Hash.make(payload.password)

    let user = await User.create(payload);

    const token = await auth.generate(user)

    if (token) {
      const user = await User.findBy('email', payload.email);

      return { user, token };
    }

    return response.badRequest("Something went wrong.");
  }
}
