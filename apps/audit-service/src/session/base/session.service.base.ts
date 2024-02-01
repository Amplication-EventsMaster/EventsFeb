/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Session, User } from "@prisma/client";

export class SessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SessionCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SessionCountArgs>
  ): Promise<number> {
    return this.prisma.session.count(args);
  }

  async sessions<T extends Prisma.SessionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SessionFindManyArgs>
  ): Promise<Session[]> {
    return this.prisma.session.findMany(args);
  }
  async session<T extends Prisma.SessionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SessionFindUniqueArgs>
  ): Promise<Session | null> {
    return this.prisma.session.findUnique(args);
  }
  async createSession<T extends Prisma.SessionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SessionCreateArgs>
  ): Promise<Session> {
    return this.prisma.session.create<T>(args);
  }
  async updateSession<T extends Prisma.SessionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SessionUpdateArgs>
  ): Promise<Session> {
    return this.prisma.session.update<T>(args);
  }
  async deleteSession<T extends Prisma.SessionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SessionDeleteArgs>
  ): Promise<Session> {
    return this.prisma.session.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.session
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
