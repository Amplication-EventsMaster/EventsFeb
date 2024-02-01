/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SyncToken, Calendar } from "@prisma/client";

export class SyncTokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SyncTokenCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SyncTokenCountArgs>
  ): Promise<number> {
    return this.prisma.syncToken.count(args);
  }

  async syncTokens<T extends Prisma.SyncTokenFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SyncTokenFindManyArgs>
  ): Promise<SyncToken[]> {
    return this.prisma.syncToken.findMany(args);
  }
  async syncToken<T extends Prisma.SyncTokenFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SyncTokenFindUniqueArgs>
  ): Promise<SyncToken | null> {
    return this.prisma.syncToken.findUnique(args);
  }
  async createSyncToken<T extends Prisma.SyncTokenCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SyncTokenCreateArgs>
  ): Promise<SyncToken> {
    return this.prisma.syncToken.create<T>(args);
  }
  async updateSyncToken<T extends Prisma.SyncTokenUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SyncTokenUpdateArgs>
  ): Promise<SyncToken> {
    return this.prisma.syncToken.update<T>(args);
  }
  async deleteSyncToken<T extends Prisma.SyncTokenDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SyncTokenDeleteArgs>
  ): Promise<SyncToken> {
    return this.prisma.syncToken.delete(args);
  }

  async getCalendar(parentId: string): Promise<Calendar | null> {
    return this.prisma.syncToken
      .findUnique({
        where: { id: parentId },
      })
      .calendar();
  }
}