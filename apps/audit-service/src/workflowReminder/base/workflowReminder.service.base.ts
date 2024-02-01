/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  WorkflowReminder,
  Booking,
  WorkflowStep,
} from "@prisma/client";

export class WorkflowReminderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.WorkflowReminderCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowReminderCountArgs>
  ): Promise<number> {
    return this.prisma.workflowReminder.count(args);
  }

  async workflowReminders<T extends Prisma.WorkflowReminderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowReminderFindManyArgs>
  ): Promise<WorkflowReminder[]> {
    return this.prisma.workflowReminder.findMany(args);
  }
  async workflowReminder<T extends Prisma.WorkflowReminderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowReminderFindUniqueArgs>
  ): Promise<WorkflowReminder | null> {
    return this.prisma.workflowReminder.findUnique(args);
  }
  async createWorkflowReminder<T extends Prisma.WorkflowReminderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowReminderCreateArgs>
  ): Promise<WorkflowReminder> {
    return this.prisma.workflowReminder.create<T>(args);
  }
  async updateWorkflowReminder<T extends Prisma.WorkflowReminderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowReminderUpdateArgs>
  ): Promise<WorkflowReminder> {
    return this.prisma.workflowReminder.update<T>(args);
  }
  async deleteWorkflowReminder<T extends Prisma.WorkflowReminderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowReminderDeleteArgs>
  ): Promise<WorkflowReminder> {
    return this.prisma.workflowReminder.delete(args);
  }

  async getBooking(parentId: number): Promise<Booking | null> {
    return this.prisma.workflowReminder
      .findUnique({
        where: { id: parentId },
      })
      .booking();
  }

  async getWorkflowStep(parentId: number): Promise<WorkflowStep | null> {
    return this.prisma.workflowReminder
      .findUnique({
        where: { id: parentId },
      })
      .workflowStep();
  }
}
