// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Video from "App/Models/Video";

export default class VideosController {

  public async show({ request }) {
    const vid = request.param('id')

    return await Video.findOrFail(vid);
  }

}
