import { DateTime } from 'luxon'
import {BaseModel, column, HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'
import Video from "App/Models/Video";
import Like from "App/Models/Like";
import Comment from "App/Models/Comment";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({})
  public email: string

  @column({})
  public name: string

  @column({})
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Video)
  public videos: HasMany<typeof Video>

  @hasMany(() => Like)
  public likes: HasMany<typeof Like>

  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>
}
