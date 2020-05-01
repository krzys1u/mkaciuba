import {
    BaseEntity,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
    ObjectID
  } from "typeorm";
  import { Category } from "./Category";
  import { Media } from "./Media";
import { ObjectType, Field } from 'type-graphql';
 

  @ObjectType()
  @Entity()
  export class CategoryHasMedia extends BaseEntity {
    @PrimaryColumn()
    mediaId: string;
  
    @PrimaryColumn()
    categoryId: string;
  
    @ManyToOne('Category', 'medias', { primary: true })
    @JoinColumn({ name: "category_id" })
    category: Promise<Category>;
  
    @ManyToOne('Media', 'categories', {
      primary: true
    })
    @JoinColumn({ name: "media_id" })
    media: Promise<Media>;

    @Field()
    order: number;
  }