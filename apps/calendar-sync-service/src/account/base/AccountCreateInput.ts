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
import { CalendarCreateNestedManyWithoutAccountsInput } from "./CalendarCreateNestedManyWithoutAccountsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AccountCreateInput {
  @ApiProperty({
    required: false,
    type: () => CalendarCreateNestedManyWithoutAccountsInput,
  })
  @ValidateNested()
  @Type(() => CalendarCreateNestedManyWithoutAccountsInput)
  @IsOptional()
  @Field(() => CalendarCreateNestedManyWithoutAccountsInput, {
    nullable: true,
  })
  calendars?: CalendarCreateNestedManyWithoutAccountsInput;
}

export { AccountCreateInput as AccountCreateInput };
