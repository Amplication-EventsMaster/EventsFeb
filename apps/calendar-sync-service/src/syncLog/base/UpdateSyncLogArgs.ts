/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SyncLogWhereUniqueInput } from "./SyncLogWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SyncLogUpdateInput } from "./SyncLogUpdateInput";

@ArgsType()
class UpdateSyncLogArgs {
  @ApiProperty({
    required: true,
    type: () => SyncLogWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SyncLogWhereUniqueInput)
  @Field(() => SyncLogWhereUniqueInput, { nullable: false })
  where!: SyncLogWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SyncLogUpdateInput,
  })
  @ValidateNested()
  @Type(() => SyncLogUpdateInput)
  @Field(() => SyncLogUpdateInput, { nullable: false })
  data!: SyncLogUpdateInput;
}

export { UpdateSyncLogArgs as UpdateSyncLogArgs };
