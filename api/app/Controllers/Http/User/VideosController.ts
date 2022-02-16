import Video from "App/Models/Video";
import {rules, schema} from "@ioc:Adonis/Core/Validator";
import Drive from "@ioc:Adonis/Core/Drive";
import Application from "@ioc:Adonis/Core/Application";

const md5 = require("md5");

export default class VideosController {

  public async index({auth}) {
    return Video.query().where('user_id', auth.user.id).orderBy('id', 'desc').paginate(20);
  }

  public async store({auth, request, response}) {

    const videoSchema = schema.create({
      video: schema.file({
        size: '256mb',
        extnames: ['mp4'],
      }),
      title: schema.string({}, [
        rules.required(),
      ])
    })

    const payload = await request.validate({schema: videoSchema})

    let video_file = request.file('video');

    const file_name = md5(auth.user.id + (new Date()).toDateString()) + '.' + video_file.extname;

    await video_file.moveToDisk("videos", {
      name: file_name,
    });

    if (video_file.state !== "moved") {
      return response.statusCode(500).send("Server is unable to process.");
    }

    let video = new Video();
    video.path = "videos/" + file_name;
    video.id = md5(video.path).slice(0, 11);
    video.user_id = auth.user.id;
    video.title = payload.title;

    //const ffmpeg = require('ffmpeg-static')
    //const genThumbnail = require('simple-thumbnail')

    /*await genThumbnail(Drive.get(video.path), Application.tmpPath("thumbs/"+video.path+".jpg"), '640x?', {
      path: ffmpeg.path
    });*/

    video.thumbnails = JSON.stringify(["thumbs/"+video.path+".jpg"]);

    await video.save();

    return video;
  }

  public async update({auth, params, request, response}) {
    const videoSchema = schema.create({
      title: schema.string({}, [
        rules.required(),
      ]),
      description: schema.string({}, [
        rules.nullable(),
      ]),
    })

    const payload = await request.validate({schema: videoSchema})

    let video = await Video.findOrFail(params.id);

    if (video.user_id !== auth.user.id) {
      return response.statusCode(404).send("Not found");
    }

    const thumbnail = request.file('thumbnail');

    if (thumbnail) {
      const file_name = md5(auth.user.id + (new Date()).toDateString()) + '.' + thumbnail.extname;
      await thumbnail.moveToDisk("thumbnails", {
        name: file_name,
      })
      video.thumbnails = JSON.stringify(["thumbnails/" + file_name]);
    }

    video.title = payload.title;
    video.description = payload.description;
    await video.save();

    return video;
  }

  public async destroy({auth, params, response}) {

    let video = await Video.findOrFail(params.id);

    if (video.user_id !== auth.user.id) {
      return response.statusCode(404).send("Not found");
    }

    await video.delete();

    return {
      "message": "Video has been deleted successfully.",
    };
  }
}
