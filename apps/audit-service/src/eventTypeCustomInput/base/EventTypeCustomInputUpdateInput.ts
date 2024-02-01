/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EventTypeWhereUniqueInput } from "../../eventType/base/EventTypeWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsEnum,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumEventTypeCustomInputType } from "./EnumEventTypeCustomInputType";

@InputType()
class EventTypeCustomInputUpdateInput {
  @ApiProperty({
    required: false,
    type: () => EventTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => EventTypeWhereUniqueInput, {
    nullable: true,
  })
  eventType?: EventTypeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  label?: string;

  @ApiProperty({
    required: false,
    enum: EnumEventTypeCustomInputType,
  })
  @IsEnum(EnumEventTypeCustomInputType)
  @IsOptional()
  @Field(() => EnumEventTypeCustomInputType, {
    nullable: true,
  })
  type?: "TEXT" | "TEXTLONG" | "NUMBER" | "BOOL";

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  required?: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  placeholder?: string;
}

export { EventTypeCustomInputUpdateInput as EventTypeCustomInputUpdateInput };