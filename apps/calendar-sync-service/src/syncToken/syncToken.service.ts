import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SyncTokenServiceBase } from "./base/syncToken.service.base";

@Injectable()
export class SyncTokenService extends SyncTokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
