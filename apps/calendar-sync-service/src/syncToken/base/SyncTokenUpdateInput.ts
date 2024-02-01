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
import { CalendarWhereUniqueInput } from "../../calendar/base/CalendarWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SyncTokenUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CalendarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CalendarWhereUniqueInput)
  @IsOptional()
  @Field(() => CalendarWhereUniqueInput, {
    nullable: true,
  })
  calendar?: CalendarWhereUniqueInput | null;
}

export { SyncTokenUpdateInput as SyncTokenUpdateInput };
