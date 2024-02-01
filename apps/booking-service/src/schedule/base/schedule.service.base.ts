/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Schedule, Booking } from "@prisma/client";

export class ScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ScheduleCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScheduleCountArgs>
  ): Promise<number> {
    return this.prisma.schedule.count(args);
  }

  async schedules<T extends Prisma.ScheduleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScheduleFindManyArgs>
  ): Promise<Schedule[]> {
    return this.prisma.schedule.findMany(args);
  }
  async schedule<T extends Prisma.ScheduleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScheduleFindUniqueArgs>
  ): Promise<Schedule | null> {
    return this.prisma.schedule.findUnique(args);
  }
  async createSchedule<T extends Prisma.ScheduleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScheduleCreateArgs>
  ): Promise<Schedule> {
    return this.prisma.schedule.create<T>(args);
  }
  async updateSchedule<T extends Prisma.ScheduleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScheduleUpdateArgs>
  ): Promise<Schedule> {
    return this.prisma.schedule.update<T>(args);
  }
  async deleteSchedule<T extends Prisma.ScheduleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScheduleDeleteArgs>
  ): Promise<Schedule> {
    return this.prisma.schedule.delete(args);
  }

  async findBookings(
    parentId: string,
    args: Prisma.BookingFindManyArgs
  ): Promise<Booking[]> {
    return this.prisma.schedule
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .bookings(args);
  }
}
