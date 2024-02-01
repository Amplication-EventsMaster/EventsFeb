import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SyncLogServiceBase } from "./base/syncLog.service.base";

@Injectable()
export class SyncLogService extends SyncLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
