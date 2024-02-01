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
import { CalendarService } from "../calendar.service";
import { CalendarCreateInput } from "./CalendarCreateInput";
import { Calendar } from "./Calendar";
import { CalendarFindManyArgs } from "./CalendarFindManyArgs";
import { CalendarWhereUniqueInput } from "./CalendarWhereUniqueInput";
import { CalendarUpdateInput } from "./CalendarUpdateInput";
import { SyncLogFindManyArgs } from "../../syncLog/base/SyncLogFindManyArgs";
import { SyncLog } from "../../syncLog/base/SyncLog";
import { SyncLogWhereUniqueInput } from "../../syncLog/base/SyncLogWhereUniqueInput";
import { SyncTokenFindManyArgs } from "../../syncToken/base/SyncTokenFindManyArgs";
import { SyncToken } from "../../syncToken/base/SyncToken";
import { SyncTokenWhereUniqueInput } from "../../syncToken/base/SyncTokenWhereUniqueInput";

export class CalendarControllerBase {
  constructor(protected readonly service: CalendarService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Calendar })
  async createCalendar(
    @common.Body() data: CalendarCreateInput
  ): Promise<Calendar> {
    return await this.service.createCalendar({
      data: {
        ...data,

        account: data.account
          ? {
              connect: data.account,
            }
          : undefined,

        provider: data.provider
          ? {
              connect: data.provider,
            }
          : undefined,

        schedule: data.schedule
          ? {
              connect: data.schedule,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        account: {
          select: {
            id: true,
          },
        },

        provider: {
          select: {
            id: true,
          },
        },

        schedule: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Calendar] })
  @ApiNestedQuery(CalendarFindManyArgs)
  async calendars(@common.Req() request: Request): Promise<Calendar[]> {
    const args = plainToClass(CalendarFindManyArgs, request.query);
    return this.service.calendars({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        account: {
          select: {
            id: true,
          },
        },

        provider: {
          select: {
            id: true,
          },
        },

        schedule: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Calendar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async calendar(
    @common.Param() params: CalendarWhereUniqueInput
  ): Promise<Calendar | null> {
    const result = await this.service.calendar({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        account: {
          select: {
            id: true,
          },
        },

        provider: {
          select: {
            id: true,
          },
        },

        schedule: {
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
  @swagger.ApiOkResponse({ type: Calendar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCalendar(
    @common.Param() params: CalendarWhereUniqueInput,
    @common.Body() data: CalendarUpdateInput
  ): Promise<Calendar | null> {
    try {
      return await this.service.updateCalendar({
        where: params,
        data: {
          ...data,

          account: data.account
            ? {
                connect: data.account,
              }
            : undefined,

          provider: data.provider
            ? {
                connect: data.provider,
              }
            : undefined,

          schedule: data.schedule
            ? {
                connect: data.schedule,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,

          account: {
            select: {
              id: true,
            },
          },

          provider: {
            select: {
              id: true,
            },
          },

          schedule: {
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
  @swagger.ApiOkResponse({ type: Calendar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCalendar(
    @common.Param() params: CalendarWhereUniqueInput
  ): Promise<Calendar | null> {
    try {
      return await this.service.deleteCalendar({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,

          account: {
            select: {
              id: true,
            },
          },

          provider: {
            select: {
              id: true,
            },
          },

          schedule: {
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

  @common.Get("/:id/syncLogs")
  @ApiNestedQuery(SyncLogFindManyArgs)
  async findSyncLogs(
    @common.Req() request: Request,
    @common.Param() params: CalendarWhereUniqueInput
  ): Promise<SyncLog[]> {
    const query = plainToClass(SyncLogFindManyArgs, request.query);
    const results = await this.service.findSyncLogs(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/syncLogs")
  async connectSyncLogs(
    @common.Param() params: CalendarWhereUniqueInput,
    @common.Body() body: SyncLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      syncLogs: {
        connect: body,
      },
    };
    await this.service.updateCalendar({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/syncLogs")
  async updateSyncLogs(
    @common.Param() params: CalendarWhereUniqueInput,
    @common.Body() body: SyncLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      syncLogs: {
        set: body,
      },
    };
    await this.service.updateCalendar({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/syncLogs")
  async disconnectSyncLogs(
    @common.Param() params: CalendarWhereUniqueInput,
    @common.Body() body: SyncLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      syncLogs: {
        disconnect: body,
      },
    };
    await this.service.updateCalendar({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/syncTokens")
  @ApiNestedQuery(SyncTokenFindManyArgs)
  async findSyncTokens(
    @common.Req() request: Request,
    @common.Param() params: CalendarWhereUniqueInput
  ): Promise<SyncToken[]> {
    const query = plainToClass(SyncTokenFindManyArgs, request.query);
    const results = await this.service.findSyncTokens(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/syncTokens")
  async connectSyncTokens(
    @common.Param() params: CalendarWhereUniqueInput,
    @common.Body() body: SyncTokenWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      syncTokens: {
        connect: body,
      },
    };
    await this.service.updateCalendar({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/syncTokens")
  async updateSyncTokens(
    @common.Param() params: CalendarWhereUniqueInput,
    @common.Body() body: SyncTokenWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      syncTokens: {
        set: body,
      },
    };
    await this.service.updateCalendar({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/syncTokens")
  async disconnectSyncTokens(
    @common.Param() params: CalendarWhereUniqueInput,
    @common.Body() body: SyncTokenWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      syncTokens: {
        disconnect: body,
      },
    };
    await this.service.updateCalendar({
      where: params,
      data,
      select: { id: true },
    });
  }
}