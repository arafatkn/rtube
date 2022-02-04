import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";

export default class VideosController {

  public async loginPost(ctx: HttpContextContract) {
    return ctx.params;
  }
}
