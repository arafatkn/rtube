// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Video from "App/Models/Video";

export default class PagesController {

  public async index() {

    const videos = await Video.query().preload('user').paginate();

    return { 'status': 'success', 'videos': videos }
  }
}
