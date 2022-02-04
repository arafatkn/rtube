import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Videos extends BaseSchema {
  protected tableName = 'videos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id', 11).primary()
      table.integer('user_id').index()
      table.integer('channel_id').index()
      table.string('title')
      table.json('thumbnails')
      table.text('description').nullable()
      table.text('path')
      table.bigInteger('views').defaultTo(0)
      table.bigInteger('likes').defaultTo(0)
      table.bigInteger('dislikes').defaultTo(0)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
