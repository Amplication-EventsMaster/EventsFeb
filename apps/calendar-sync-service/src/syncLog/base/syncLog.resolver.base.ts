/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { SyncLog } from "./SyncLog";
import { SyncLogCountArgs } from "./SyncLogCountArgs";
import { SyncLogFindManyArgs } from "./SyncLogFindManyArgs";
import { SyncLogFindUniqueArgs } from "./SyncLogFindUniqueArgs";
import { CreateSyncLogArgs } from "./CreateSyncLogArgs";
import { UpdateSyncLogArgs } from "./UpdateSyncLogArgs";
import { DeleteSyncLogArgs } from "./DeleteSyncLogArgs";
import { Calendar } from "../../calendar/base/Calendar";
import { SyncLogService } from "../syncLog.service";
@graphql.Resolver(() => SyncLog)
export class SyncLogResolverBase {
  constructor(protected readonly service: SyncLogService) {}

  async _syncLogsMeta(
    @graphql.Args() args: SyncLogCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SyncLog])
  async syncLogs(
    @graphql.Args() args: SyncLogFindManyArgs
  ): Promise<SyncLog[]> {
    return this.service.syncLogs(args);
  }

  @graphql.Query(() => SyncLog, { nullable: true })
  async syncLog(
    @graphql.Args() args: SyncLogFindUniqueArgs
  ): Promise<SyncLog | null> {
    const result = await this.service.syncLog(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SyncLog)
  async createSyncLog(
    @graphql.Args() args: CreateSyncLogArgs
  ): Promise<SyncLog> {
    return await this.service.createSyncLog({
      ...args,
      data: {
        ...args.data,

        calendar: args.data.calendar
          ? {
              connect: args.data.calendar,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => SyncLog)
  async updateSyncLog(
    @graphql.Args() args: UpdateSyncLogArgs
  ): Promise<SyncLog | null> {
    try {
      return await this.service.updateSyncLog({
        ...args,
        data: {
          ...args.data,

          calendar: args.data.calendar
            ? {
                connect: args.data.calendar,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SyncLog)
  async deleteSyncLog(
    @graphql.Args() args: DeleteSyncLogArgs
  ): Promise<SyncLog | null> {
    try {
      return await this.service.deleteSyncLog(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Calendar, {
    nullable: true,
    name: "calendar",
  })
  async getCalendar(
    @graphql.Parent() parent: SyncLog
  ): Promise<Calendar | null> {
    const result = await this.service.getCalendar(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
