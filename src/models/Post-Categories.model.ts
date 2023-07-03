import { Model, Table, ForeignKey, Column, PrimaryKey, AutoIncrement, DataType,AllowNull } from 'sequelize-typescript';
import { Post } from './Posts.model';
import { Category } from './Categories.model';

@Table({ tableName: 'PostCategories' })
export class PostCategory extends Model<PostCategory> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => Post)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  postId!: number;

  @ForeignKey(() => Category)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  categoryId!: number;
}