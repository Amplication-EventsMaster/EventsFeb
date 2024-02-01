/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Template, Notification } from "@prisma/client";

export class TemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TemplateCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateCountArgs>
  ): Promise<number> {
    return this.prisma.template.count(args);
  }

  async templates<T extends Prisma.TemplateFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateFindManyArgs>
  ): Promise<Template[]> {
    return this.prisma.template.findMany(args);
  }
  async template<T extends Prisma.TemplateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateFindUniqueArgs>
  ): Promise<Template | null> {
    return this.prisma.template.findUnique(args);
  }
  async createTemplate<T extends Prisma.TemplateCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateCreateArgs>
  ): Promise<Template> {
    return this.prisma.template.create<T>(args);
  }
  async updateTemplate<T extends Prisma.TemplateUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateUpdateArgs>
  ): Promise<Template> {
    return this.prisma.template.update<T>(args);
  }
  async deleteTemplate<T extends Prisma.TemplateDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateDeleteArgs>
  ): Promise<Template> {
    return this.prisma.template.delete(args);
  }

  async findNotifications(
    parentId: string,
    args: Prisma.NotificationFindManyArgs
  ): Promise<Notification[]> {
    return this.prisma.template
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .notifications(args);
  }
}
