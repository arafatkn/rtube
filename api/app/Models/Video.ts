import { DateTime } from 'luxon'
import {BaseModel, belongsTo, column, BelongsTo, hasMany, HasMany} from '@ioc:Adonis/Lucid/Orm'
import User from "App/Models/User";
import Like from "App/Models/Like";
import Comment from "App/Models/Comment";

export default class Video extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public user_id: number

  @column()
  public title: string

  @column()
  public path: string

  @column()
  public thumbnails: string

  @column()
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: 'user_id',
  })
  public user: BelongsTo<typeof User>

  @hasMany(() => Like, {
    localKey: 'id',
    foreignKey: 'video_id',
  })
  public likes: HasMany<typeof Like>

  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>
}
