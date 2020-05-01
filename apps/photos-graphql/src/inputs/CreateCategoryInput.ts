import { InputType, Field } from "type-graphql";

@InputType()
export class CreateCategoryInput {
  @Field()
  name: string;

  @Field({nullable: true})
  public?: boolean;

  @Field()
  publicationDate: Date;

  @Field({nullable: true})
  imageId?: string;

  @Field({nullable: true})
  fileId?: string

 @Field(type => [String], { nullable: true})
 mediaIds?: string[];

}