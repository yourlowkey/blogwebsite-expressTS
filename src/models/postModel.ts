import { Table, Model, Column, DataType, PrimaryKey, AutoIncrement, AllowNull, BelongsToMany } from "sequelize-typescript";
import { Category } from './categoryModel'
import { PostCategory } from './postCategoryModel'
@Table({
    timestamps: true,
    tableName: "posts"
})

export class Post extends Model<Post> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;
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