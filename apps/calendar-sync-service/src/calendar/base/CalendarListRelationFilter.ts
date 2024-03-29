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
import { CalendarWhereInput } from "./CalendarWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CalendarListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CalendarWhereInput,
  })
  @ValidateNested()
  @Type(() => CalendarWhereInput)
  @IsOptional()
  @Field(() => CalendarWhereInput, {
    nullable: true,
  })
  every?: CalendarWhereInput;

  @ApiProperty({
    required: false,
    type: () => CalendarWhereInput,
  })
  @ValidateNested()
  @Type(() => CalendarWhereInput)
  @IsOptional()
  @Field(() => CalendarWhereInput, {
    nullable: true,
  })
  some?: CalendarWhereInput;

  @ApiProperty({
    required: false,
    type: () => CalendarWhereInput,
  })
  @ValidateNested()
  @Type(() => CalendarWhereInput)
  @IsOptional()
  @Field(() => CalendarWhereInput, {
    nullable: true,
  })
  none?: CalendarWhereInput;
}
export { CalendarListRelationFilter as CalendarListRelationFilter };
