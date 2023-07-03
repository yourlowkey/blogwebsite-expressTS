import { Table,Model,Column,DataType,PrimaryKey, AutoIncrement, AllowNull, BelongsToMany } from "sequelize-typescript";
import {Category} from './Categories.model'
import {PostCategory} from './Post-Categories.model'
@Table({
    timestamps:true,
    tableName:"posts"
})

export class Post extends Model<Post> {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    postId!: number;
  
    @AllowNull(false)
    @Column(DataType.STRING)
    title!: string;
  
    @AllowNull(false)
    @Column(DataType.STRING)
    description!: string;
  
    @AllowNull(false)
    @Column(DataType.TEXT)
    content!: string;
  
    @AllowNull(false)
    @Column(DataType.STRING)
    imageUrl!: string;
  
    @AllowNull(false)
    @Column(DataType.STRING)
    slug!: string;
  
    @BelongsToMany(() => Category, () => PostCategory)
    categoryId!: Category[];
  }