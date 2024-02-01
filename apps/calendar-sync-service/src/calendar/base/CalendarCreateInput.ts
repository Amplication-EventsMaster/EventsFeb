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
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ProviderWhereUniqueInput } from "../../provider/base/ProviderWhereUniqueInput";
import { ScheduleWhereUniqueInput } from "../../schedule/base/ScheduleWhereUniqueInput";
import { SyncLogCreateNestedManyWithoutCalendarsInput } from "./SyncLogCreateNestedManyWithoutCalendarsInput";
import { SyncTokenCreateNestedManyWithoutCalendarsInput } from "./SyncTokenCreateNestedManyWithoutCalendarsInput";

@InputType()
class CalendarCreateInput {
  @ApiProperty({
    required: false,
    type: () => AccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountWhereUniqueInput)
  @IsOptional()
  @Field(() => AccountWhereUniqueInput, {
    nullable: true,
  })
  account?: AccountWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ProviderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProviderWhereUniqueInput)
  @IsOptional()
  @Field(() => ProviderWhereUniqueInput, {
    nullable: true,
  })
  provider?: ProviderWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ScheduleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ScheduleWhereUniqueInput)
  @IsOptional()
  @Field(() => ScheduleWhereUniqueInput, {
    nullable: true,
  })
  schedule?: ScheduleWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SyncLogCreateNestedManyWithoutCalendarsInput,
  })
  @ValidateNested()
  @Type(() => SyncLogCreateNestedManyWithoutCalendarsInput)
  @IsOptional()
  @Field(() => SyncLogCreateNestedManyWithoutCalendarsInput, {
    nullable: true,
  })
  syncLogs?: SyncLogCreateNestedManyWithoutCalendarsInput;

  @ApiProperty({
    required: false,
    type: () => SyncTokenCreateNestedManyWithoutCalendarsInput,
  })
  @ValidateNested()
  @Type(() => SyncTokenCreateNestedManyWithoutCalendarsInput)
  @IsOptional()
  @Field(() => SyncTokenCreateNestedManyWithoutCalendarsInput, {
    nullable: true,
  })
  syncTokens?: SyncTokenCreateNestedManyWithoutCalendarsInput;
}

export { CalendarCreateInput as CalendarCreateInput };
