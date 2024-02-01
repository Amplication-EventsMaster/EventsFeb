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
import { CalendarCreateNestedManyWithoutProvidersInput } from "./CalendarCreateNestedManyWithoutProvidersInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProviderCreateInput {
  @ApiProperty({
    required: false,
    type: () => CalendarCreateNestedManyWithoutProvidersInput,
  })
  @ValidateNested()
  @Type(() => CalendarCreateNestedManyWithoutProvidersInput)
  @IsOptional()
  @Field(() => CalendarCreateNestedManyWithoutProvidersInput, {
    nullable: true,
  })
  calendars?: CalendarCreateNestedManyWithoutProvidersInput;
}

export { ProviderCreateInput as ProviderCreateInput };
