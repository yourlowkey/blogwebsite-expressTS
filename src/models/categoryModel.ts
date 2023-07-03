import { Model, Column, Table, PrimaryKey, AutoIncrement, AllowNull, DataType, BelongsToMany } from 'sequelize-typescript';
import { Post } from './postModel';
import { PostCategory } from './postCategoryModel';

@Table({ tableName: 'Categories', timestamps: true })
export class Category extends Model<Category> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  slug!: string;

  @BelongsToMany(() => Post, () => PostCategory)
  postId!: Post[];
}