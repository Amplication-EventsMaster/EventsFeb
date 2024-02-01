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
import { IsInt, ValidateNested } from "class-validator";
import { Workflow } from "../../workflow/base/Workflow";
import { Type } from "class-transformer";
import { EventType } from "../../eventType/base/EventType";

@ObjectType()
class WorkflowsOnEventType {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: () => Workflow,
  })
  @ValidateNested()
  @Type(() => Workflow)
  workflow?: Workflow;

  @ApiProperty({
    required: true,
    type: () => EventType,
  })
  @ValidateNested()
  @Type(() => EventType)
  eventType?: EventType;
}

export { WorkflowsOnEventType as WorkflowsOnEventType };
