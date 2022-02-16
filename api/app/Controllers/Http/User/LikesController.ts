import Like from "App/Models/Like";

export default class LikesController {

  public async store({auth, params}) {
    return await Like.create({
      user_id: auth.user.id,
      video_id: params.video_id,
    });
  }

  public async destroy({auth, params, response}) {
    return params;

    let like = await Like.findOrFail(params.id);

    if (like.user_id !== auth.user.id) {
      return response.statusCode(404).send("Not found");
    }

    await like.delete();

    return {
      "message": "Like has been removed successfully.",
    };
  }
}
