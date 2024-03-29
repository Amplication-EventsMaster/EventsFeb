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
import { ChannelWhereUniqueInput } from "./ChannelWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ChannelUpdateInput } from "./ChannelUpdateInput";

@ArgsType()
class UpdateChannelArgs {
  @ApiProperty({
    required: true,
    type: () => ChannelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChannelWhereUniqueInput)
  @Field(() => ChannelWhereUniqueInput, { nullable: false })
  where!: ChannelWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ChannelUpdateInput,
  })
  @ValidateNested()
  @Type(() => ChannelUpdateInput)
  @Field(() => ChannelUpdateInput, { nullable: false })
  data!: ChannelUpdateInput;
}

export { UpdateChannelArgs as UpdateChannelArgs };
