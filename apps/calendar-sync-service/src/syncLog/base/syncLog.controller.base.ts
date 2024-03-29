/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SyncLogService } from "../syncLog.service";
import { SyncLogCreateInput } from "./SyncLogCreateInput";
import { SyncLog } from "./SyncLog";
import { SyncLogFindManyArgs } from "./SyncLogFindManyArgs";
import { SyncLogWhereUniqueInput } from "./SyncLogWhereUniqueInput";
import { SyncLogUpdateInput } from "./SyncLogUpdateInput";

export class SyncLogControllerBase {
  constructor(protected readonly service: SyncLogService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SyncLog })
  async createSyncLog(
    @common.Body() data: SyncLogCreateInput
  ): Promise<SyncLog> {
    return await this.service.createSyncLog({
      data: {
        ...data,

        calendar: data.calendar
          ? {
              connect: data.calendar,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        calendar: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SyncLog] })
  @ApiNestedQuery(SyncLogFindManyArgs)
  async syncLogs(@common.Req() request: Request): Promise<SyncLog[]> {
    const args = plainToClass(SyncLogFindManyArgs, request.query);
    return this.service.syncLogs({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        calendar: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SyncLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async syncLog(
    @common.Param() params: SyncLogWhereUniqueInput
  ): Promise<SyncLog | null> {
    const result = await this.service.syncLog({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        calendar: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SyncLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSyncLog(
    @common.Param() params: SyncLogWhereUniqueInput,
    @common.Body() data: SyncLogUpdateInput
  ): Promise<SyncLog | null> {
    try {
      return await this.service.updateSyncLog({
        where: params,
        data: {
          ...data,

          calendar: data.calendar
            ? {
                connect: data.calendar,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,

          calendar: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SyncLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSyncLog(
    @common.Param() params: SyncLogWhereUniqueInput
  ): Promise<SyncLog | null> {
    try {
      return await this.service.deleteSyncLog({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,

          calendar: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
