import { DateTime } from 'luxon'
import {BaseModel, belongsTo, column, BelongsTo} from '@ioc:Adonis/Lucid/Orm'
import Channel from "App/Models/Channel";
import User from "App/Models/User";

export default class Video extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Channel)
  public channel: BelongsTo<typeof Channel>
}
