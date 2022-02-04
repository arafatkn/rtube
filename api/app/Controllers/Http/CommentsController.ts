// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Comment from "App/Models/Comment";

export default class CommentsController {

  public async index({ request }) {
    const vid = request.param('id')

    return await Comment.query().where('video_id', vid).paginate(10);
  }
}
