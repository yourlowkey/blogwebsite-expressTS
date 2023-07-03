"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCategory = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Posts_model_1 = require("./Posts.model");
const Categories_model_1 = require("./Categories.model");
let PostCategory = exports.PostCategory = class PostCategory extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], PostCategory.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Posts_model_1.Post),
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], PostCategory.prototype, "postId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Categories_model_1.Category),
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], PostCategory.prototype, "categoryId", void 0);
exports.PostCategory = PostCategory = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'PostCategories' })
], PostCategory);
