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
import { NotificationCreateNestedManyWithoutTemplatesInput } from "./NotificationCreateNestedManyWithoutTemplatesInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TemplateCreateInput {
  @ApiProperty({
    required: false,
    type: () => NotificationCreateNestedManyWithoutTemplatesInput,
  })
  @ValidateNested()
  @Type(() => NotificationCreateNestedManyWithoutTemplatesInput)
  @IsOptional()
  @Field(() => NotificationCreateNestedManyWithoutTemplatesInput, {
    nullable: true,
  })
  notifications?: NotificationCreateNestedManyWithoutTemplatesInput;
}

export { TemplateCreateInput as TemplateCreateInput };
