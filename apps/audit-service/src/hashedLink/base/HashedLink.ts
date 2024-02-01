/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, ValidateNested } from "class-validator";
import { EventType } from "../../eventType/base/EventType";
import { Type } from "class-transformer";

@ObjectType()
class HashedLink {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  link!: string;

  @ApiProperty({
    required: true,
    type: () => EventType,
  })
  @ValidateNested()
  @Type(() => EventType)
  eventType?: EventType;
}

export { HashedLink as HashedLink };