/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Account, Calendar } from "@prisma/client";

export class AccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AccountCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountCountArgs>
  ): Promise<number> {
    return this.prisma.account.count(args);
  }

  async accounts<T extends Prisma.AccountFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountFindManyArgs>
  ): Promise<Account[]> {
    return this.prisma.account.findMany(args);
  }
  async account<T extends Prisma.AccountFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountFindUniqueArgs>
  ): Promise<Account | null> {
    return this.prisma.account.findUnique(args);
  }
  async createAccount<T extends Prisma.AccountCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountCreateArgs>
  ): Promise<Account> {
    return this.prisma.account.create<T>(args);
  }
  async updateAccount<T extends Prisma.AccountUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountUpdateArgs>
  ): Promise<Account> {
    return this.prisma.account.update<T>(args);
  }
  async deleteAccount<T extends Prisma.AccountDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountDeleteArgs>
  ): Promise<Account> {
    return this.prisma.account.delete(args);
  }

  async findCalendars(
    parentId: string,
    args: Prisma.CalendarFindManyArgs
  ): Promise<Calendar[]> {
    return this.prisma.account
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .calendars(args);
  }
}
