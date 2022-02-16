// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Comment from "App/Models/Comment";
import {rules, schema} from "@ioc:Adonis/Core/Validator";

export default class CommentsController {

  public async store({auth, params, request}) {

    const videoSchema = schema.create({
      message: schema.string({}, [
        rules.required(),
      ])
    })

    const payload = await request.validate({schema: videoSchema})

    return await Comment.create({
      user_id: auth.user.id,
      video_id: params.video_id,
      message: payload.message,
    });
  }

  public async destroy({auth, params, response}) {

    let comment = await Comment.findOrFail(params.id);

    if (comment.user_id !== auth.user.id) {
      return response.statusCode(404).send("Not found");
    }

    await comment.delete();

    return {
      "message": "Comment has been removed successfully.",
    };
  }
}
